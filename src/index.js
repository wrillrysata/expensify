import React from 'react';
import ReactDOM from 'react-dom';
import Planner from '../src/Components/Planner';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<Planner />, document.getElementById('app'));
registerServiceWorker();

