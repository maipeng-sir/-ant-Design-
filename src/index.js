import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
import {Provider} from "react-redux"
import {noLayoutRouteComponent} from "./router"
import {HashRouter as Router,Switch,Route} from "react-router-dom"
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch> 
                {
                    noLayoutRouteComponent.map((item,index)=>{
                       return <Route key={index}  path={item.path} render={()=>(
                           <item.component/>
                       )}/>
                    })
                }
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>
    , 
document.getElementById('root'));

