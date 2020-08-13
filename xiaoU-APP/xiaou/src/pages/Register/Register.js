import React, { Component } from 'react'
import "./Register.styl"
import GoBack from "../../components/GoBack/GoBack"
import { requestRegister } from "../../util/request"
import {successAlert,warningAlert} from "../../util/alert"
export default class register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",   //手机号
                nickname: "", //昵称
                password: "" //密码
            }
        }
    }
    changeUser(e,key){
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    toLogin() {
        requestRegister(this.state.user).then(res => {
            if(res.data.code === 200){
                successAlert(res.data.msg);
                this.props.history.push("/login")
            }else{
                this.setState({
                    user:{
                        phone: "",   
                        nickname: "", 
                        password: "" 
                    }
                })
                warningAlert(res.data.msg)
            }
        })
        // this.props.history.push("/login")
    }
    render() {
        const {user} =this.state
        return (
            <div className="register">
                <div className="header">
                    <span className="goback">
                        <GoBack></GoBack>
                    </span>
                    <span className="tex-register">注册</span>
                </div>
                <div className="content">
                    <div className="content-crd">
                        <p>
                            <span>
                                账 号: <input type="text" value={user.phone} onChange={(e)=>this.changeUser(e,'phone')}/>
                            </span>
                        </p>
                    </div>
                    <div className="content-crd">
                        <p>
                            <span>
                                昵 称: <input type="text" value={user.nickname} onChange={(e)=>this.changeUser(e,'nickname')}/>
                            </span>
                        </p>
                    </div>
                    <div className="content-crd">
                        <p>
                            <span>
                                密 码: <input type="text" value={user.password} onChange={(e)=>this.changeUser(e,'password')}/>
                            </span>
                        </p>
                    </div>

                    <div className="btn" onClick={() => this.toLogin()}>
                        <span>注册</span>
                    </div>
                </div>
            </div>
        )
    }
}
