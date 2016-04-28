import React from 'react';
import { render } from 'react-dom';
import Store from './store';
import App from './containers/App';

render(
    <Store>
        <App />
    </Store>,
    document.getElementById('app')
);