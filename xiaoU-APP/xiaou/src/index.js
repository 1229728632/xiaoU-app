import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//reset.css
import "./static/css/reset.css"
//rem.js
import "./static/js/rem"

//定义路由模式
import { HashRouter } from "react-router-dom"
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

