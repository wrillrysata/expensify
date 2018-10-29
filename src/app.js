import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Expensify from '../src/components/Expensify';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<p>Welcome to expensify</p>, document.getElementById('app'));
registerServiceWorker();

