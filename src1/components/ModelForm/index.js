import React, { Component } from 'react'
import { Form, Input,Select,Checkbox,Button} from "antd"
import UploadWrapper from "@components/UploadWrapper"
const {Option} = Select;
class ModelForm extends Component {
    render() {
        let {booksName,booksAuth,booksStatus,booksTag} = this.props.modelData
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
               
            },
            wrapperCol: {
                xs: { span: 20 },
               
            },
        };
        const plainOptions = ['武侠', '言情', '动作','玄幻','都市','历史','游戏','科幻','修仙','爱情']
        const fileList = [{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }]
        return (
            <Form {...formItemLayout} onSubmit={this.handleAdd.bind(this)}>
                <Form.Item label="书籍名称">
                    {
                        getFieldDecorator("booksName", {
                            rules: [
                                {
                                    required:true,message:"不能为空"
                                }
                            ],
                            //设置默认值
                            initialValue:booksName
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="书籍作者">
                    {
                        getFieldDecorator("booksAuth", {
                            rules: [],
                            initialValue:booksAuth
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="书籍状态">
                    {
                        getFieldDecorator("booksStatus", {
                            rules: [],
                            initialValue:booksStatus
                        })(
                          <Select>
                              <Option value="请选择">请选择</Option>
                              <Option value="连载中">连载中</Option>
                              <Option value="已完结">已完结</Option>
                          </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="书籍类型">
                    {
                        getFieldDecorator("booksTag", {
                            rules: [],
                            initialValue:booksTag
                        })(
                            <Checkbox.Group 
                                options={plainOptions} 
                                />
                        )
                    }
                </Form.Item>
                <Form.Item label="书籍封面">
                    {
                        getFieldDecorator("booksLogo", {
                            valuePropName:"fileList",
                            rules: [],
                            initialValue:fileList,
                            getValueFromEvent:this.handleUpload.bind(this)
                        })(
                            <UploadWrapper/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">修改</Button>
                </Form.Item>
            </Form>
        )
    }
    handleUpload(fileList){
        return fileList
    }
    handleAdd(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //进行前后端数据的交互
                console.log('Received values of form: ', values);
            }
          });
    }
}

export default Form.create()(ModelForm)
