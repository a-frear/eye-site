import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./ScrollToTop";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,

  document.getElementById("root")
);

reportWebVitals();
