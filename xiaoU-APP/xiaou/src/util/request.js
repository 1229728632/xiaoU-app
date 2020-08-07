import axios from "axios"
import qs from "qs"

//响应拦截
axios.interceptors.response.use(res=>{
    console.log(res);
    return res;
})