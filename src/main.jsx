import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { styles } from "./style.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-77fpbtd6w6bgiecu.us.auth0.com"
      clientId="7mEc4wfH6Pi6l7QLMJjldTpreVzItKxz"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className={`${styles.bg}`}>
        <App />
      </div>
    </Auth0Provider>
  </React.StrictMode>
);
