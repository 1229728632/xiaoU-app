import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"

//引入路由
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Index from "./pages/Index/index"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/index" component={Index}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
