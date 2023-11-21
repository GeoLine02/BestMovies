import React from "react";
import { Navigate } from "react-router-dom";
import routes from "../constants/routes";
import { useAppContext } from "../context/AppContextProvider";

const AuthGuard = ({ children }) => {
  const {
    state: { isUserAuthenticated },
  } = useAppContext();

  if (!isUserAuthenticated) {
    return (
      <div>
        <Navigate to={routes.home} />
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;
