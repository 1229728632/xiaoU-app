import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import {filterPrice} from "../../../../filters/filters"
import "./List.styl"

 class List extends Component {
    toDetail(id) {
        console.log(id);
        this.props.history.push("/detail?id=" + id)
    }
    render() {
        const { seckill } = this.props
        return (
            <div className="listBox">
                {
                    seckill.map(item => {
                        return (
                            <div key={item.id} className="listItem" onClick={() => this.toDetail(item.id)}>
                                <img src={item.img} className="item-img" alt="" />
                                <div className="item-right-con">
                                    <h3 className="item-name">{item.goodsname}</h3>
                                    <div className="item-price-box">
                                        <p className="item-price">{'￥' + filterPrice(item.price)}</p>
                                        <p className="item-btn">立即抢购</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default withRouter(List)
