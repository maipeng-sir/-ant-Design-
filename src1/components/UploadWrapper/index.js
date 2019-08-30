import React, { Component } from 'react'
import {Upload,Icon} from "antd";
export default class UploadWrapper extends Component {
    constructor(){
        super()
        this.state = {
            imageUrl:"",
            loading:false
        }
    }
    render() {
    
   
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          let {imageUrl} = this.state;
        return (
            <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        )
    }
    handleChange = (info)=>{
        this.props.onChange(info.fileList)
    }
}
