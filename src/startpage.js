import React, { Component, Fragment } from "react"
import { TaskView }  from './views/taskView'

export class Startpage extends Component {
    render() {
        return (
            <Fragment>
                <TaskView />
            </Fragment>
        )
    }
}
