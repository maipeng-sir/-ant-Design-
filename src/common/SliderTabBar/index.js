import React, { Component } from 'react'
import { Menu } from 'antd';
import SliderEach from "@utils/SliderEach"
import {withRouter} from "react-router-dom"
import {LayoutRouteComponent} from "@router"
const sliderList = SliderEach(LayoutRouteComponent)
class SliderTabBar extends Component {
    render() {
        return (
            <Menu 
              theme="dark" 
              mode="inline" 
              defaultSelectedKeys={['/auth']}
              onClick={this.handleTo.bind(this)}
              >
              {sliderList}
            </Menu>
        )
    }
    handleTo({key}){
      this.props.history.push(key)
    }
}

export default withRouter(SliderTabBar)