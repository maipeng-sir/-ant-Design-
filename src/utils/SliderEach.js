import React from 'react'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default (tabBars)=>tabBars.map((item,index)=>{
        if(item.children){
              return  <SubMenu
                    key={item.key}
                    title={
                    <span>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                    </span>
                }
                >
                {
                    item.children.map((child,idx)=>{
                      
                    return  <Menu.Item key={child.key} >
                                <span className="nav-text">{child.name} </span>
                            </Menu.Item>
                    }) 
                }
            </SubMenu>
        }else{
             
              
            return <Menu.Item key={item.key}>
                        <Icon type={item.icon} />
                        <span className="nav-text">{item.name}</span>
                    </Menu.Item>
        }
    


})
