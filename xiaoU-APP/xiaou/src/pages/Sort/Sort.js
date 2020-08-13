import React, { Component } from 'react'
import { connect } from "react-redux"
import "./Sort.styl"
import Header from "./components/Header/Header"
import { catetree, requestCatetreeAction } from "../../store/modules/cate"
class Sort extends Component {
    constructor() {
        super()
        this.state = {
            catename: [],
            n: 0
        }
    }
    componentDidMount() {
        this.props.requestcatetree()
    }
    items(index) {
        this.setState({
            n: index
        })
    }
    todetail(id,cantname){
        this.props.history.push("/index/sortdetail?id="+id+'&'+cantname)
    }
    render() {
        const { catename } = this.props;
        const { n } = this.state
        console.log(catename);
        return (
            <div className="sortBox">
                <Header></Header>
                <div className="con">
                    <div className="left">
                        <ul>
                            {
                                catename.map((item, index) => {
                                    return <li key={item.id} onClick={() => this.items(index)}
                                        className={n === index ? 'sel' : ""}
                                    >{item.catename}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="right">
                        {
                            catename.length > 0 ? catename[n].children.map(item => {
                                return(
                                 <div key={item.id} className="itemBox" onClick={()=>this.todetail(item.id,item.catename)}>
                                    <img className="itemImg" src={item.img} alt="" />
                                    <p className="itemTit">{item.catename}</p>
                                </div>
                                )
                            }) : null
                        }
                    </div>
                </div>

            </div>
        )
    }
}
//数据
const mapStateToProps = (state) => {
    return {
        catename: catetree(state)
    }
}

//函数方法
const mapDispatchProps = (dispatch) => {
    return {
        requestcatetree: () => dispatch(requestCatetreeAction())
    }
}





export default connect(mapStateToProps, mapDispatchProps)(Sort)