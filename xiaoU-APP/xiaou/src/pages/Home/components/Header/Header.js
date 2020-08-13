import React from 'react'
import "./Header.styl"
import logo from "../../../../static/img/home/logo.jpg"
export default function Header() {
    return (
        <div className="homeHeader">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="seatch">
                <span>寻找商品</span>
                {/* <SearchBar
                    placeholder="手动获取获取光标"
                    ref={ref => this.manualFocusInst = ref}
                /> */}
            </div>
        </div>
    )
}
