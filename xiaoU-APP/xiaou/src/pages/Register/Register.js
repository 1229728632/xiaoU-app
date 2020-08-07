import React, { Component } from 'react'
import "./Register.styl"
import GoBack from "../../components/GoBack/GoBack"
export default class register extends Component {
    toLogin() {
        this.props.history.push("/login")
    }
    render() {
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
                                账 号: <input type="text" />
                            </span>
                        </p>
                    </div>
                    <div className="content-crd">
                        <p>
                            <span>
                                昵 称: <input type="text" />
                            </span>
                        </p>
                    </div>
                    <div className="content-crd">
                        <p>
                            <span>
                                密 码: <input type="text" />
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
