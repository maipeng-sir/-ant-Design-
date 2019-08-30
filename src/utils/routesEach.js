import {Route} from "react-router-dom";
import React from "react";
export default (routes)=>routes.map((route,index)=>{
    let fn = (children)=>{
        return children.map((child,idx)=>{
            if(child.children){
                fn(child.children);
            }
            return <Route path={child.path} component={child.component} key={idx}/>
        })
    }

    if(route.children){
      return  fn(route.children);
    }else{
        return <Route path={route.path} component={route.component} key={index}/>
    }


})