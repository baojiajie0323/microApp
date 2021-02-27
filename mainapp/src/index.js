import React from 'react';
import ReactDOM from 'react-dom';

import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


registerMicroApps([
  {
    name: 'dvajs', // app name registered
    entry: '//localhost:8000',
    container: '#childapp',
    activeRule: '/dvajs',
  },
  {
    name: 'umi', // app name registered
    entry: '//localhost:8001',
    container: '#childapp',
    activeRule: '/umi',
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#childapp',
  //   activeRule: '/yourActiveRule2',
  // },
]);

start({
  sandbox : {
    experimentalStyleIsolation  : true
  }
});