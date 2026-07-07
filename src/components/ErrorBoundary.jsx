import { Component } from "react";

/* App-level safety net: a render error anywhere below shows a warm recovery
   card instead of a blank white screen — critical for a live demo. */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Developer signal only — never surfaced to the user.
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="grid min-h-screen place-items-center bg-paper px-6 text-center font-body text-ink">
        <div className="max-w-sm">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-shopfront font-display text-2xl font-bold text-marigold">
            दु
          </div>
          <h1 className="font-display text-2xl font-semibold text-shopfront">
            Something hiccuped
          </h1>
          <p className="mt-2 text-sm text-ink/60">
            Don't worry — your data is safe. Let's reload and get you back to your shop.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-marigold px-6 py-2.5 text-sm font-semibold text-shopfront transition-transform hover:-translate-y-0.5"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }
}
