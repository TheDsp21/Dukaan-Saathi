import { createContext, useContext } from "react";

/* Shared auth context + hook, kept in a hook-only module so the provider
   component file (auth.jsx) exports components only — keeps React Fast Refresh
   happy (react/only-export-components). */
export const AuthCtx = createContext(null);

export const useAuth = () => useContext(AuthCtx);
