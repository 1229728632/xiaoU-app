
import { requestGoodsinfo } from "../../util/request"

//初始状态
const initState = {
    goodsinfo: [] //获取单个商品详情
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
//导出数据
export const goodsinfo =state=>state.goodsinfo.goodsinfo

export default reducer;