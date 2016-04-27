import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import App from './containers/App';

ReactDOM.render(
    <Store>
        <App />
    </Store>,
    document.getElementById('app')
);