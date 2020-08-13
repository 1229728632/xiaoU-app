import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import home from "./modules/home"
import cate from "./modules/cate"
import goods from "./modules/goods"
import goodsinfo from "./modules/goodsinfo"
import shop from "./modules/shop"
import user from "./modules/user"


const reducer = combineReducers({
    home,
    cate,
    goods,
    goodsinfo,
    shop,
    user
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store;