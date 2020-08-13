import React, { Component } from 'react'
import "./Shopping.styl"
import { connect } from "react-redux"
import selectImg from "../../static/img/shop/editor_hig.png"
import noselect from "../../static/img/shop/editor_nor.png"
import seletImg2 from "../../static/img/shop/radio_hig.png"
import noselect2 from "../../static/img/shop/radio_nor.png"
import ico from "../../static/img/shop/store.png"
import {successAlert} from "../../util/alert"
import {
    shopList,
    requestListAction,
    isEditor,
    changeIsEditorAction,
    requestDelAction,
    isAll,
    requestEditAction,
    changeIsAllAction,
    changeOneAction,
    getAllPrice
} from '../../store/modules/shop'
class Shopping extends Component {
    componentDidMount() {
        this.props.requestList()
    }
    sub(item) {
        if (item.num === 1) {
           successAlert("宝贝不能再少了");
            return
        }
        this.props.requestEditAction({ id: item.id, type: 1 })
    }
    render() {
        const {
            list,
            isEditor,
            changeIsEditor,
            requestDelAction,
            isAll,
            changeIsAll,
            changeOne,
            getAllPrice,
            requestEditAction
        } = this.props
        return (
            <div className="shop">
                <div className="header">
                    <span>购物车</span>
                </div>
                {/* 每一个商品 */}
                {
                    list.map((item, index) => {
                        return (
                            <div className="shop-item" key={item.id}>
                                <div className="shopinner">
                                    <p>
                                        <i><img src={ico} alt="" /></i>
                                        <span>  杭州报税清仓</span>
                                    </p>
                                    <div className="item-con">
                                        <div className="inner" className={isEditor ? 'inner inner-del' : 'inner'}>
                                            <img onClick={() => changeOne(index)} className="select-chekbox" src={item.checked ? selectImg : noselect} alt="" />
                                            <img className="item-shop-img" src={item.img} alt="" />
                                            <div className="tex-tit">
                                                <h3>{item.goodsname}</h3>
                                                <button onClick={() => this.sub(item)}>-</button>
                                                <span> {item.num} </span>
                                                <button onClick={() => requestEditAction({ id: item.id, type: 2 })}>+</button>
                                                <p>总价:{item.price * item.num}元</p>
                                            </div>
                                            <span>￥{item.price}元</span>
                                            <div className="shop-item-del" onClick={() => requestDelAction(item.id)}>删除</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* 底部的全选反选 */}
                <div className="shop-footer">
                    {/* 全选 */}
                    <div className="all" onClick={() => changeIsAll()}>
                        <img src={isAll ? selectImg : noselect} alt="" />
                        <div>全选</div>
                    </div>
                    {/* 编辑 */}
                    <div className="all" onClick={() => changeIsEditor()}>
                        <img src={isEditor?seletImg2:noselect2} alt="" />
                        <div>编辑</div>
                    </div>
                    {/* 总价 */}
                    <div className="all">合计：￥{getAllPrice}元</div>
                </div>
            </div>
        )
    }
}

const mapState = state => {
    console.log(state);
    return {
        list: shopList(state),
        isEditor: isEditor(state),
        isAll: isAll(state),
        getAllPrice: getAllPrice(state)
    }
}

const mapDispatch = dispatch => {
    return {
        requestList: () => dispatch(requestListAction()),
        changeIsEditor: () => dispatch(changeIsEditorAction()),
        changeIsAll: () => dispatch(changeIsAllAction()),
        changeOne: (index) => dispatch(changeOneAction(index)),
        requestEditAction: (data) => dispatch(requestEditAction(data)),
        requestDelAction: id => dispatch(requestDelAction(id))
    }
}



export default connect(mapState, mapDispatch)(Shopping)