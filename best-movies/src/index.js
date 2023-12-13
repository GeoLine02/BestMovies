import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/BestMovies">
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
