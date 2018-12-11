import React, { Fragment, Component } from "react"
import { Switch, Route } from "react-router-dom"
import { TaskView }  from './views/taskView'
import { routes } from "./config"

export class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact={true} path={routes.taskview} component={TaskView}/>
                    {/* <Route path={routes.shoppingCart} component={ShoppingCart} />*/}
                </Switch>
            </Fragment>
        )
    }
}
