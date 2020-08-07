import React, { Component } from 'react'
import "./Login.styl"
export default class Login extends Component {
    toRigst(){
        this.props.history.push("/register")
    };
    login(){
        this.props.history.push("/index")
    }

    render() {
        return (
            <div className="login">
                <div className="header">
                    <span className="tex-login">登录</span>
                    <span className="tex-register" onClick={()=>this.toRigst()}>注册</span>
                </div>
                <div className="content">
                    <div className="content-crd">
                        <p>
                            <span>
                                账 号: <input type="text"/>
                            </span>
                        </p>
                    </div>
                    <div className="content-crd">
                        <p>
                            <span>
                                密 码: <input type="text"/>
                            </span>
                        </p>
                    </div>
                    <div className="info">
                            <span>忘记密码</span>
                    </div>
                    <div className="btn" onClick={()=>this.login()}>
                     <span>登录</span>
                    </div>
                </div>
            </div>
        )
    }
}
