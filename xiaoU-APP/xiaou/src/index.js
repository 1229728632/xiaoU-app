import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//reset.css
import "./static/css/reset.css"

//rem.js
import "./static/js/rem"

//uik库
import "antd-mobile"


//定义路由模式
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

//图片路径拼接
Component.prototype.$img="http://localhost:3000"

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

