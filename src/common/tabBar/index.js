import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./index.css"
export default class TabBar extends Component {
    render() {
        return (
            <div id="tabbar">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <i className="iconfont">&#xe677;</i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/recommend">
                            <i className="iconfont">&#xe60f;</i>
                            <span>推荐</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/chat">
                            <i className="iconfont">&#xe81a;</i>
                            <span>聊天</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">
                            <i className="iconfont">&#xe623;</i>
                            <span>搜索</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mine">
                            <i className="iconfont">&#xe659;</i>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
