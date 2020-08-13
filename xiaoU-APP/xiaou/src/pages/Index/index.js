import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
//懒加载
import async from "../../util/asyncComponents"
//底部导航
import Navbar from "./components/Navbar/Navbar"

//二级路由
// import Home from "../Home/Home"

// import Sort from "../Sort/Sort"
// import SortDetail from "../Sort/Detail/SortDetail"
// import GoodsInfo from "../Sort/GoodsInfo/GoodsInfo"
// import Shopping from "../Shopping/Shopping"
// import Mine from "../Mine/Mine"

const Home = async(() => import("../Home/Home"))
const Sort = async(() => import("../Sort/Sort"))
const SortDetail = async(() => import("../Sort/Detail/SortDetail"))
// const GoodsInfo = async(() => import("../GoodsInfo/GoodsInfo"))
const Shopping = async(() => import("../Shopping/Shopping"))
const Mine = async(() => import("../Mine/Mine"))




export default class index extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/sort" component={Sort}></Route>
                    <Route path="/index/sortDetail" component={SortDetail}></Route>
                    {/* <Route path="/index/goods" component={GoodsInfo}></Route> */}
                    <Route path="/index/shopping" component={Shopping}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
                <Navbar></Navbar>
            </div>
        )
    }
}
