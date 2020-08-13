import React, { Component } from 'react'
import querystring from "querystring"
import { connect } from "react-redux"
import { goods, requestGoodsAction } from "../../../store/modules/goods"
import { filterPrice } from "../../../filters/filters"

import "./SortDetail.styl"
class SortDetail extends Component {
    constructor() {
        super()
        this.state = {
            kname: []
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        // console.log(id);
        const name = querystring.parse(this.props.location.search.slice(1))
        // console.log(name);

        //name

        for (let key in name) {
            this.state.kname.push(key)
        }
        this.props.requestgoods(id)
    }
    //详情
    detail(ids) {
        this.props.history.push("/detail?id=" + ids)
    }
    render() {
        const { goods } = this.props;
        const { kname } = this.state
        // console.log(goods);
        return (
            <div>
                <header>
                    <span>{kname[1]}</span>
                </header>
                {
                    goods.length > 0 ? goods.map(item => {
                        return <div key={item.id} className="sortDetail" onClick={() => this.detail(item.id)}>
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="con">
                                <h3>{item.goodsname}</h3>
                                <p className="price">{'￥' + filterPrice(item.price)}</p>
                                <p className="btn">立即抢购</p>
                            </div>
                        </div>
                    }) : null
                }
            </div>
        )
    }
}

//数据
const mapStateToprops = (state) => {
    return {
        goods: goods(state)
    }
}

//方法 函数
const mapDispatchToProps = (dispatch) => {
    return {
        requestgoods: (id) => dispatch(requestGoodsAction(id))
    }
}






export default connect(mapStateToprops, mapDispatchToProps)(SortDetail)
