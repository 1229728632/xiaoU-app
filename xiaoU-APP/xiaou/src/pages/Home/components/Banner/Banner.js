import React from 'react'
import {Carousel} from "antd-mobile"
import "./Banner.styl"
export default function Banner(props) {
    const {banner}=props
    // console.log(banner);
    return (
        <div className="banner-box">
              <Carousel
              autoplay={true}
              infinite
              >
                    {
                        banner.map(item=>{
                            return (
                                <img key={item.id} src={item.img} alt=""/>
                            )
                        })
                    }
                </Carousel>
        </div>
    )
}
