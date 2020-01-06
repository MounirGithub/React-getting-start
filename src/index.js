import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Button/>, document.getElementById('root'));

serviceWorker.unregister();
