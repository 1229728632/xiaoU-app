import axios from "axios"
import qs from "qs"

//响应拦截
axios.interceptors.response.use(res=>{
    console.log("请求路径:"+res.config.url);
    console.log(res);
    return res;
})

//登录
export const requestLogin=(data)=>{
   return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}

//注册
export const requestRegister=(data)=>{
    return axios({
        url:"/api/register",
        method:"post",
        data:qs.stringify(data)
    })
}

//轮播图
export const requestBanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}

//限时秒杀
export const requestSeckill=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}

//分类树形
export const requestCatetree=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}
//获取分类商品
export const requestGoods=(params)=>{
    return axios({
        url:"/api/getgoods",
        method:"get",
        params,
    })
}

//获取单个商品
export const requestGoodsinfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params
    })
}

//加入购物车
export const addShop=(data)=>{
    return axios({
        url:"/api/cartadd",
        method:"post",
        data:qs.stringify(data)
    })
}

//购物车列表
export const requestShopList=(params)=>{
    return axios({
        url:"/api/cartlist",
        method:"get",
        params
    })
}

//修改
export const requestShopEdit = (data) => {
    return axios({
        url: "/api/cartedit",
        method:"post",
        data: qs.stringify(data)
    })
}

//删除
export const requestShopDel = (data) => {
    return axios({
        url: "/api/cartdelete",
        method:"post",
        data: qs.stringify(data)
    })
}
