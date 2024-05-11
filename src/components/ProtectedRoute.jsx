import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { styles } from "../style";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div
        className={` bg-[#DDCBE9] ${styles.flexCenter}  w-full min-h-[100vh] `}
      >
        <div className="loader" />
      </div>
    );
  }
  if (!isAuthenticated && !isLoading) {
    loginWithRedirect({ appState: { returnTo: window.location.pathname } });
    return (
      <div
        className={` bg-[#DDCBE9] ${styles.flexCenter}  w-full min-h-[100vh] `}
      >
        <div className="loader" />
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
