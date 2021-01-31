import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain="dev-lukn5ug2.us.auth0.com"
            clientId="hML8En9F3KwCNjKAYTbqpj2MTRBSYZ8K"
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience="https://express.eye-site"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;