import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';

import AppRoutes from './AppRoutes';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
