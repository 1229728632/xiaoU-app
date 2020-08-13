//创建仓库
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { requestBanner, requestSeckill, requestCatetree, requestGoods,requestGoodsinfo } from "../util/request"

//初始状态
const initState = {
    banner: [],  //轮播图
    seckill: [],  //限时秒杀
    catetree: [],  //分类
    goods: [],    //分类商品
    goodsinfo: [] //获取单个商品详情
}









//action 轮播图
const changeBannerAction = (arr) => {
    return { type: "changeBanner", list: arr }
}
export const requestBannerAction = () => {
    return (dispatch, getState) => {
        requestBanner().then(res => {
            dispatch(changeBannerAction(res.data.list))
        })
    }
}


//action 首页列表
const changeSeckillAction = (arr) => {
    return { type: "changeSeckill", list: arr }
}
export const requestSeckillAction = () => {
    return (dispatch, getState) => {
        requestSeckill().then(res => {
            dispatch(changeSeckillAction(res.data.list[0].content))
        })
    }
}

//action 分类
const changeCatetreeAction = (arr) => {
    return { type: "changeCatetree", list: arr }
}
export const requestCatetreeAction = () => {
    return (dispatch, getState) => {
        requestCatetree().then(res => {
            dispatch(changeCatetreeAction(res.data.list))
        })
    }
}

//action 分类商品
const changeGoodsAction = (arr) => {
    return { type: "changeGoods", list: arr }
}
export const requestGoodsAction = (id) => {
    return (dispatch, getState) => {
        requestGoods({ fid: id }).then(res => {
            dispatch(changeGoodsAction(res.data.list))
        })
    }
}

//action 获取单个商品
const changeGoodsingos = (obj) => {
    return { type: "changeGoodsInfo", list: obj }
}
export const requestGoodsItemAction=(id)=>{
    return (dispatch,getState)=>{
        requestGoodsinfo({id:id}).then(res=>{
            dispatch(changeGoodsingos(res.data.list[0]))
        })
    }
}










//reduce 用来修改state
//state是上一次修改完成后的state
//action是自己约定的动作
function reducer(state = initState, action) {
    //action={type:"任务名称"}
    switch (action.type) {
        //修改轮播图
        case "changeBanner":
            return {
                ...state,
                banner: action.list
            }
        //首页列表
        case "changeSeckill":
            return {
                ...state,
                seckill: action.list
            }
        //分类
        case "changeCatetree":
            return {
                ...state,
                catetree: action.list
            }
        //分类商品
        case "changeGoods":
            return {
                ...state,
                goods: action.list
            }
        //获取单个商品
        case "changeGoodsInfo":
            return {
                ...state,
                goodsinfo: action.list
            }
        default:
            return state;
    }
}


//创建仓库
const store = createStore(reducer, applyMiddleware(thunk))



//导出数据
export const banner = state => state.banner;
export const seckill = state => state.seckill;
export const catetree = state => state.catetree;
export const goods = state => state.goods;
export const goodsinfo =state=>state.goodsinfo

export default store;