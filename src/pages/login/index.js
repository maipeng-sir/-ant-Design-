import React, { Component } from 'react'
import { Form, Input, Icon, Button } from "antd";
import { LoginWrapper } from "./styled"
import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {connect} from "react-redux"
class Login extends Component {
    render() {
        let { getFieldDecorator } = this.props.form;

        return (
            <LoginWrapper>
                <div>
                    <div className="logo">
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
                    </div>
                    <Form onSubmit={this.handleLogin}>
                        <Form.Item>
                            {
                                getFieldDecorator("username", {
                                    rules: [
                                        {
                                            required: true, message: "用户名称必须填写"
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="text"
                                        placeholder="请输入用户名"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator("password", {
                                    rules: [
                                        {
                                            required: true, message: "密码称必须填写"
                                        },
                                        {
                                            pattern:/^\w{5,13}$/,message:"密码格式错误"
                                        }
                        
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>登陆</Button>
                        </Form.Item>
                    </Form>
                </div>
            </LoginWrapper>
        )
    }
    handleLogin=(e)=>{
        e.preventDefault();
        //获取表单中的数据
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.handleLogin(values.username,values.password);
          }
        });
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Form.create()(Login)));