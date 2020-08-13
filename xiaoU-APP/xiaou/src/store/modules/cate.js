
import { requestCatetree } from "../../util/request"

//初始状态
const initState = {
    catetree: [],  //分类
}




//action 分类
const changeCatetreeAction = (arr) => {
    return { type: "changeCatetree", list: arr }
}
export const requestCatetreeAction = () => {
    return (dispatch, getState) => {
        const {catetree} = getState().cate
        if(catetree.length>0){
            return;
        }
        requestCatetree().then(res => {
            dispatch(changeCatetreeAction(res.data.list))
        })
    }
}


//reduce 用来修改state
//state是上一次修改完成后的state
//action是自己约定的动作
function reducer(state = initState, action) {
    //action={type:"任务名称"}
    switch (action.type) {
        //分类
        case "changeCatetree":
            return {
                ...state,
                catetree: action.list
            }
        default:
            return state;
    }
}



//导出数据
export const catetree = state => state.cate.catetree;
export default reducer;