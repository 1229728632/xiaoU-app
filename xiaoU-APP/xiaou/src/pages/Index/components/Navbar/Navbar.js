import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom"
import "../../index.styl"
import HomeNo from "../../../../static/img/footBar/tab_home_nor.png"
import HomeYes from "../../../../static/img/footBar/tab_home_hig.png"
import SortNo from "../../../../static/img/footBar/tab_menu_nor.png"
import SortYes from "../../../../static/img/footBar/tab_menu_hig.png"
import ShoppingNo from "../../../../static/img/footBar/tab_shopping_nor.png"
import ShoppingYes from "../../../../static/img/footBar/tab_shopping_hig.png"
import MineNo from "../../../../static/img/footBar/tab_me_nor.png"
import MineYes from "../../../../static/img/footBar/tab_me_hig.png"



class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            footers: [
                {
                    tit: "首页",
                    No: HomeNo,
                    Yes: HomeYes,
                    path: "/index/home"
                },
                {
                    tit: "分类",
                    No: SortNo,
                    Yes: SortYes,
                    path: "/index/sort"
                },
                {
                    tit: "购物车",
                    No: ShoppingNo,
                    Yes: ShoppingYes,
                    path: "/index/shopping"
                },
                {
                    tit: "我的",
                    No: MineNo,
                    Yes: MineYes,
                    path: "/index/mine"
                },
            ]
        }
    }
    // ss() {
    //     console.log(this.props.location.pathname);
    // }
    render() {
        const { footers } = this.state
        return (
            <footer>
                {
                    footers.map(item => {
                        return (
                            <NavLink
                                to={item.path} key={item.tit}
                                className="item"
                                activeClassName={'selct'}
                            >
                                <img src={this.props.location.pathname === item.path ? item.Yes : item.No} alt="" />
                                <span>{item.tit}</span>
                            </NavLink>
                        )
                    })
                }
            </footer>
        )
    }
}
export default withRouter(Navbar)
