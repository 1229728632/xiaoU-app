import React, { Component } from 'react';
import "./Mine.styl"
import touxiang from "../../static/img/Mine/touxiang.png"

export default class Mine extends Component {
    render() {
        return (
            <div className="mine">
                <div className="topBar">
                    <div className="top">
                        <span className="left-ioc"></span>
                        <h2>个人中心</h2>
                        <span className="right-ico"></span>
                    </div>

                    <div className="bottom">
                        <div className="touxiang">
                            <img src={touxiang} alt="" />
                            <p>你瞅啥</p>
                        </div>
                        <div className="bottom-con">
                            <span className="ico"></span>
                            <span>我的收藏( 999+ )</span>
                        </div>
                    </div>
                </div>
                {/* 我的订单 */}
                <div className="order">
                    <div className="orderTop">
                        <span className="wode">我的订单</span>
                        <span className="chakan">查看订单</span>
                    </div>
                    <div className="orderBottom">
                        <div className="item">
                            <i className="imgs"></i>
                            <p>代发货</p>
                        </div>
                        <div className="item">
                            <i className="imgs"></i>
                            <p>代发货</p>
                        </div>
                        <div className="item">
                            <i className="imgs"></i>
                            <p>代发货</p>
                        </div>
                        <div className="item">
                            <i className="imgs"></i>
                            <p>代发货</p>
                        </div>
                        <div className="item">
                            <i className="imgs"></i>
                            <p>代发货</p>
                        </div>
                    </div>
                </div>
                {/* 收货地址 */}
                <div className="shouhuo">
                    <span>收货地址管理</span>
                </div>
            </div>
        )
    }
}
