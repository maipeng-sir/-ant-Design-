import React from 'react';
import { Switch,Redirect} from "react-router-dom";
import routesEach from "@utils/routesEach"
import LayoutCom from "@layout"
import AuthRoute from "@common/authRoute"
import {LayoutRouteComponent} from "@router"
let pageRoute = routesEach(LayoutRouteComponent)
class App extends React.Component {
  render() {
    return (
        <Switch>
            <LayoutCom>
              <Redirect from="/" to="/auth" exact/>
              {
                pageRoute
              }
            </LayoutCom>
        </Switch>
    )
  }
}

export default AuthRoute(App);

