
import { requestBanner, requestSeckill} from "../../util/request"

//初始状态
const initState = {
    banner: [],  //轮播图
    seckill: [],  //限时秒杀
}









//action 轮播图
const changeBannerAction = (arr) => {
    return { type: "changeBanner", list: arr }
}
export const requestBannerAction = () => {
    return (dispatch, getState) => {
        const {banner} = getState().home
        if(banner.length>0){
            return
        }
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
        const {seckill} = getState().home
        if(seckill.length>0){
            return
        }
        requestSeckill().then(res => {
            dispatch(changeSeckillAction(res.data.list[0].content))
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
        default:
            return state;
    }
}



//导出数据
export const banner = state => state.home.banner;
export const seckill = state => state.home.seckill;

export default reducer;