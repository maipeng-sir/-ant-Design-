import React, { Component} from 'react'
import {Route,Redirect} from "react-router-dom"
import store from "@store";

export default (WrapperComponent)=>{
    return class extends Component{
        constructor(){
            super();
            this.state = store.getState();
        }
        render(){
            let token = this.state.user.token;
            let {component: Component, ...rest} = this.props
            // if (!token) {
            //     return <Redirect to={{ pathname: '/login' }} />
            // }   
            return (
                <Route {...rest} render={(props)=>(
                    <WrapperComponent {...props}/>
                )}/>
            )
        }
    }
}
