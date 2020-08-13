import React, { Component } from 'react'
import { requestLogin } from "../../util/request"
import {successAlert,warningAlert} from "../../util/alert"
import "./Login.styl"
import {connect} from "react-redux"
import { changeUserAction } from '../../store/modules/user'
 class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    toRigst() {
        this.props.history.push("/register")
    };
    login() {
        requestLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                successAlert(res.data.msg);
                
                //把res.data.list 存入redux
                this.props.changeUser(res.data.list)
                sessionStorage.setItem("user",JSON.stringify(res.data.list));

                this.props.history.push("/index")
            } else {
                this.setState({
                    user: {
                        phone: "123",
                        password: "123"
                    }
                })
                warningAlert(res.data.msg)
            }
        })


    }

    render() {
        const { user } = this.state
        return (
            <div className="login">
                <div className="header">
                    <span className="tex-login">登录</span>
                    <span className="tex-register" onClick={() => this.toRigst()}>注册</span>
                </div>
                <div className="content">
                    <div className="content-crd">
                        <p>
                            <span>
                                账 号: <input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} />
                            </span>
                        </p>
                    </div>
                    <div className="content-crd">
                        <p>
                            <span>
                                密 码: <input type="text" value={user.password} onChange={(e) => this.changeUser(e, "password")} />
                            </span>
                        </p>
                    </div>
                    <div className="info">
                        <span>忘记密码</span>
                    </div>
                    <div className="btn" onClick={() => this.login()}>
                        <span>登录</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStart=(start)=>{
    console.log(start);
    return {

    }
}

const mapDispatch=(dispatch)=>{
    return {
        changeUser:(user)=>dispatch(changeUserAction(user))
    }
}
export default connect(mapStart,mapDispatch)(Login)