import React, { Component } from 'react'
import { Layout } from 'antd';
import SliderTabBar from "@components/sliderTabBar"
import {LogoWrapper} from "./styled"
const { Header, Content, Footer, Sider } = Layout;


export default class layoutWrapper extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <LogoWrapper>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg"/>
                    </LogoWrapper>
                    <SliderTabBar></SliderTabBar>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '20px', background:"#fff"}}>
                       {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
