import React, { Component } from 'react'
import "./Home.styl"
import { connect } from "react-redux"
import { banner, requestBannerAction, seckill, requestSeckillAction } from '../../store/modules/home'



//引入组件
import Header from "./components/Header/Header"
import Banner from './components/Banner/Banner'
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"


class Home extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            seckill:[]
        }
    }
    componentDidMount() {
        this.props.requestBanner();
        this.props.requestSeckill();
    }
    render() {
        const { banner,seckill } = this.props
        return (
            <div className="homeBox">
                <Header></Header>
                <Banner banner={banner}></Banner>
                <Nav></Nav>
                <List seckill={seckill}></List>
            </div>
        )
    }
}

//数据
const mapStateToProps = (state) => {
    return {
        banner: banner(state),
        seckill:seckill(state)
    }
   
}


//函数方法
const mapDispatchToProps = (dispatch) => {
    return {
        requestBanner: () => dispatch(requestBannerAction()),
        requestSeckill:()=>dispatch(requestSeckillAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
