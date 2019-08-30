import React, { Component } from 'react'
import { Layout} from 'antd';
import SliderTabBar from "@common/SliderTabBar"
import "./index.css"
const { Header, Content, Footer, Sider } = Layout;

export default class Page extends Component {
    render() {
        return (
            <Layout>
              <Sider
                style={{
                  overflow: 'auto',
                  height: '100vh',
                  position: 'fixed',
                  left: 0,
                }}
              >
                <div className="logo" >
                  <img src="https://fanyi.bdstatic.com/static/translation/img/header/logo_40c4f13.svg" alt="logo"/>
                </div>
                <SliderTabBar/>
              </Sider>
              <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                  <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                    {this.props.children}
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
              </Layout>
            </Layout>
        )
    }
}
