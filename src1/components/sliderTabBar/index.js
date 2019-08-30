import React, { Component } from 'react'
import {Menu} from "antd"
import {layoutRouter} from "@router";
import sliderEach from "@utils/sliderEach";
import {withRouter} from "react-router-dom"
let sliderComponent = sliderEach(layoutRouter)


class SliderTabBar extends Component {
    render() {
        return (
            <Menu 
                theme="dark" 
                defaultSelectedKeys={['/home']} 
                mode="inline" 
                onClick={this.handleToggle}>
                {sliderComponent}
            </Menu>
        )
    }
    handleToggle=({key})=>{
        this.props.history.push(key);
    }
}

export default withRouter(SliderTabBar)