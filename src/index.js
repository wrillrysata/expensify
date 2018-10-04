import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './playground/counter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<Counter />, document.getElementById('app'));
registerServiceWorker();

