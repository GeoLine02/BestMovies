import React, { createContext, useContext, useMemo, useReducer } from "react";
import { appContextReducer, initialState } from "./reducer";

const appContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appContextReducer, initialState);
  const appState = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return <appContext.Provider value={appState}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }
  throw new Error("App Context Error!");
};

export default AppContextProvider;
