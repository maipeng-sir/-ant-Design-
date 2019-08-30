import React, { Component, Fragment } from 'react'
import { Table, Divider, Tag,Card  ,Button} from 'antd';
import { connect } from "react-redux";
import { Modal } from "antd";
import { mapStateToProps, mapDispatchToProps } from "./connect";
import ModelForm from "@components/ModelForm"
import XLSX from "xlsx";


class HotBooks extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      modelData:{},
      columns: [
        {
          title: '书籍名称',
          dataIndex: 'booksName',
          key: 'booksName',
          render: text => <a>{text}</a>,
          width: 200
        },
        {
          title: '书籍封面',
          dataIndex: 'booksLogo',
          key: 'booksLogo',
          render: url => <img src={url} />,
          width: 200
        },
        {
          title: '书籍作者',
          dataIndex: 'booksAuth',
          key: 'booksAuth',
          width: 200
        },
        {
          title: '书籍状态',
          dataIndex: 'booksStatus',
          key: 'booksStatus',
          width: 200
        },
        {
          title: "标签",
          key: 'booksTag',
          dataIndex: 'booksTag',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
          render: (text, record) => (
            <span>
              <a onClick={this.handleShowModel.bind(this,record)}>操作 {record.name}</a>
              <Divider type="vertical" />
              <a onClick={this.handleDel.bind(this, record)}>删除</a>
            </span>
          ),
        },
      ]
    }
  }
  render() {
    let { hotBooks } = this.props;
    let { columns,modelData} = this.state;
    return (
      <Fragment>
        <Card title="热门书籍" extra={<Button onClick={this.exportFile.bind(this)}>导出表格</Button>}>
          <Table columns={columns} dataSource={hotBooks} scroll={{ y: 500 }} />
        </Card>
        <Modal
          title="修改书籍"
          visible={this.state.visible}
          onCancel={this.handleClose}
          footer={null}
        >
          <ModelForm modelData={modelData}/>
        </Modal>
      </Fragment>
    )
  }
  exportFile() {
    let data = [["书籍名称","书籍封面","书籍作者","书籍状态","书籍类型"]];
    let {hotBooks} = this.props
    for(var i=0;i<hotBooks.length;i++){
      var arr = [];
       for(var key in hotBooks[i]){

          if(key == "booksTag"){
            arr.push(hotBooks[i][key].join(""))
          }else{
            arr.push(hotBooks[i][key])
          }
          

       }
       data.push(arr);
    }
    
    //设置导出的数据
		const ws = XLSX.utils.aoa_to_sheet(data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
		XLSX.writeFile(wb, "书籍列表.xlsx")
	};
  handleClose=()=>{
    this.setState({
      visible:false
    })
  }
  handleShowModel(record){
    this.setState({
      visible:true,
      modelData:record
    })
  }
  componentDidMount() {
    this.props.getHotBooks();
  }
  handleDel(record) {
    Modal.confirm({
      content: `您确定要删除${record.booksName}正本书吗？`,
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        //ajax请求 删除数据
        console.log(record.id)
      }
    })


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotBooks)