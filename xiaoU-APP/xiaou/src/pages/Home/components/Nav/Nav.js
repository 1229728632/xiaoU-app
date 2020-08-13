import React from 'react'
import "./Nav.styl"
import items from "../../../../static/img/home/1.jpg"
export default function Nav() {
    return (
        <div className="navBox">
            <div className="navItem">
                <img src={items} alt="" />
                <p><span>限时抢购</span></p>
            </div>
            <div className="navItem">
                <img src={items} alt="" />
                <p><span>限时抢购</span></p>
            </div>
            <div className="navItem">
                <img src={items} alt="" />
                <p><span>限时抢购</span></p>
            </div>
            <div className="navItem">
                <img src={items} alt="" />
                <p><span>限时抢购</span></p>
            </div>
        </div>
    )
}
