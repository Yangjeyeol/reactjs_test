import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import MyName from './MyName';
//import MyName2 from './MyName2';
//import Counter from './Counter';
//import Counter2 from './Counter2';
import Counter3 from './Counter3';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Counter3 />, document.getElementById('root'));
//ReactDOM.render(<App/>, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
