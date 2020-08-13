
import { requestGoods } from "../../util/request"

//初始状态
const initState = {
    goods: [],    //分类商品
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

//reduce 用来修改state
//state是上一次修改完成后的state
//action是自己约定的动作
function reducer(state = initState, action) {
    //action={type:"任务名称"}
    switch (action.type) {
        //分类商品
        case "changeGoods":
            return {
                ...state,
                goods: action.list
            }
        default:
            return state;
    }
}






//导出数据
export const goods = state => state.goods.goods;
export default reducer;