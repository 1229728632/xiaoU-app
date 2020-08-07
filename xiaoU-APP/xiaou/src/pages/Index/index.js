import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./index.styl"
import HomeNo from "../../static/img/footBar/tab_home_nor.png"
import SortNo from "../../static/img/footBar/tab_menu_nor.png"
import ShoppingNo from "../../static/img/footBar/tab_shopping_nor.png"
import MineNo from "../../static/img/footBar/tab_me_nor.png"
//二级路由
import Home from "../Home/Home"
import Sort from "../Sort/Sort"
import Shopping from "../Shopping/Shopping"
import Mine from "../Mine/Mine"

export default class index extends Component {
    sel(e){
       var sel = e.target;
       console.log(e.target);
       return sel;
    }
    render() {
        var sel =sel
        return (
            <div>
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/sort" component={Sort}></Route>
                    <Route path="/index/shopping" component={Shopping}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
                <footer>
                    <NavLink to="/index/home" className="item" activeClassName="selct" onClick={(e)=>this.sel(e)}>
                        <img src={HomeNo} alt="" />
                        <span>首页</span>
                    </NavLink>

                    <NavLink to="/index/sort" activeClassName="selct" className="item">
                        <img src={SortNo} alt="" />
                        <span>分类</span>
                    </NavLink>


                    <NavLink to="/index/shopping" activeClassName="selct" className="item">
                        <img src={ShoppingNo} alt="" />
                        <span>购物车</span>
                    </NavLink>

                    <NavLink to="/index/mine" activeClassName="selct" className="item">
                        <img src={MineNo} alt="" />
                        <span>我的</span>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
