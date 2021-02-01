import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="login">
        <p className="auth-link" onClick={() => loginWithRedirect()}>
          Log In
        </p>
      </div>
    )
  );
};

export default Login;
