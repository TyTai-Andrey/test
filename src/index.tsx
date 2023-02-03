import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
// import { ReactNotifications } from 'react-notifications-component';

// import 'react-notifications-component/dist/theme.css';
import './index.scss';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

ReactDOM.render(<App />, document.getElementById('root'));
