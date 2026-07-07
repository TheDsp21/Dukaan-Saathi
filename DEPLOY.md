# Deploying Dukaan Saathi (free tier)

One Node process serves both the built frontend (`dist/`) and the API. Data
lives in a **Turso / libSQL** cloud database, so it runs on Render's **free**
web-service plan — no persistent disk. Locally, with `TURSO_DATABASE_URL` unset,
the server falls back to a local SQLite file (`server/data/dukaan.db`), so dev
and tests need no cloud account.

The schema creates itself on first boot (`dbReady` in `server/db.js`) — there is
no separate migration step to run.

## 1. Create the Turso database

Install the CLI: https://docs.turso.tech/cli/installation

```bash
turso auth login
turso db create dukaan-saathi

turso db show dukaan-saathi --url     # -> TURSO_DATABASE_URL  (libsql://…)
turso db tokens create dukaan-saathi  # -> TURSO_AUTH_TOKEN
```

Keep both values for step 3.

## 2. Push to GitHub

Render deploys from a Git repo, so the code must be on a remote first. Create an
empty repo on GitHub (no README/license), then:

```bash
git remote add origin https://github.com/<you>/dukaan-saathi.git
git push -u origin main
```

## 3. Deploy on Render

On https://dashboard.render.com → **New → Blueprint** → pick the repo.
`render.yaml` is read automatically (free plan, build + start commands, health
check at `/api/health`). Then set the secrets in the dashboard:

| Env var                | Value                                                        |
| ---------------------- | ------------------------------------------------------------ |
| `JWT_SECRET`           | a fresh long random string                                   |
| `TURSO_DATABASE_URL`   | from step 1                                                  |
| `TURSO_AUTH_TOKEN`     | from step 1                                                  |
| `ANTHROPIC_API_KEY`    | optional — real `sk-ant-…` key; without it, rule-based parse |
| `SARVAM_API_KEY`       | optional — enables voice-note transcription                  |

Click **Apply**. First deploy runs `npm ci && npm run build && npm --prefix
server ci` then `npm --prefix server start`.

## 4. Verify

```bash
curl https://<your-app>.onrender.com/api/health
# {"ok":true,"integrations":{…}}
```

Then open the site, register a shop (PIN), and send a message in the simulator.

## Notes

- Free web services **sleep after ~15 min idle** and cold-start (a few seconds)
  on the next request. Fine for demos.
- **Twilio WhatsApp:** point the sandbox webhook at
  `https://<your-app>.onrender.com/webhooks/whatsapp` and set
  `VALIDATE_TWILIO_SIGNATURE=true` (already in `render.yaml`) plus the Twilio
  secrets so signature validation passes.
