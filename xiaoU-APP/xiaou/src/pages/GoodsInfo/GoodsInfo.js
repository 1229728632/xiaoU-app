import React, { Component } from 'react'
import { connect } from "react-redux"
import querystring from "querystring"
import { goodsinfo, requestGoodsItemAction } from "../../store/modules/goodsinfo"
import {addShop} from "../../util/request"
import {successAlert} from "../../util/alert"
import "./GoodsInfo.styl"
import {getUser} from "../../store/modules/user"
// import {filterPrice} from "../../../filters/filters"
class GoodsInfo extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        // this.id = querystring.parse(this.props.location.search.slice(1)).id
        // // console.log(htis.id);
        // this.props.requestgoods(this.id)

        this.id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestgoods(this.id)

        //第二次的缓存
        if (this.refs.des && this.props.info.description) {
            this.refs.des.innerHTML = this.props.info.description
        }
    }

    //加入购物车
    addshop() {
        addShop({
            uid: this.props.user.uid,
            goodsid: this.id,
            num: 1
        }).then(res => {
            successAlert(res.data.msg)
        })
    }
    render() {
        var { goodsinfo } = this.props;
        console.log(goodsinfo);

        return (
                <div className="goodsInfo">
                    <div className="header">
                        <span>商品详情</span>
                    </div>
                    <div>
                        <p className="imgBox">
                            <img src={goodsinfo.img} alt="" />
                        </p>

                        <div className="titBox">
                            <h2>{goodsinfo.goodsname}</h2>
                            {goodsinfo.status === 1 ? <span className="shoucang">收藏</span> : <span>已收藏</span>}
                            <p>{'￥' + goodsinfo.price}
                                {goodsinfo.ishot === 1 ? <span>新品</span> : null}
                                {goodsinfo.isnew === 1 ? <span>热品</span> : null}

                            </p>
                            <p className="yuanjia">{'￥' + goodsinfo.market_price}</p>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: goodsinfo.description }}></div>
                    </div>
                    <div className="add">
                        <div className="add-tit" onClick={()=>this.addshop()}>
                            <span>
                                加入购物车
                        </span>
                        </div>
                    </div>
                </div>

        )
    }
}
//数据
const mapStateToProps = (state) => {
    return {
        goodsinfo: goodsinfo(state),
        user:getUser(state)
    }
}

//函数方法
const mapDispatchProps = (dispatch) => {
    return {
        requestgoods: (id) => dispatch(requestGoodsItemAction(id))
    }
}




export default connect(mapStateToProps, mapDispatchProps)(GoodsInfo)