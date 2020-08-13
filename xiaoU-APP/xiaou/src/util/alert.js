import { Toast } from "antd-mobile"
import 'antd-mobile/dist/antd-mobile.css';

//成功弹框
export const successAlert=(msg)=>{
    Toast.success(msg, 2);
}
//警告弹框
export const warningAlert=(msg)=>{
    Toast.offline(msg, 2);
}

//错误弹框
export const errorAlert=(msg)=>{
    Toast.fail(msg, 2);
}