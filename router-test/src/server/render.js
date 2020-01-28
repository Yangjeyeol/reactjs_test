import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'shared/App';

const render = (location) => ReactDomServer.renderToString(
    <StaticRouter location={location}>
        <App/>
    </StaticRouter>
);

export default render;