import React from 'react';
import { render } from 'react-dom';
import Store from './store';

// Application Main CSS
require('../styles/main.scss');

render(
    <Store />,
    document.getElementById('app')
);