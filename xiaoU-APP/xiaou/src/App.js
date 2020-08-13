import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import MyRoute from "./pages/Myroute/Myroute"

//引入路由
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import async from "./util/asyncComponents" 
// import Index from "./pages/Index/index"
const Index =async(()=>import("./pages/Index/index"))
const Detail = async(()=>import("./pages/GoodsInfo/GoodsInfo"))
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <MyRoute path="/index" component={Index}></MyRoute>
        <MyRoute path="/detail" component={Detail}></MyRoute>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
