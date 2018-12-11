import React, { Component, Fragment } from "react"
import { Route } from "react-router-dom"
import { Routes } from "./routes"
import { TaskView } from "./views/taskView";


export class Startpage extends Component {
    render() {
        return (
            <Fragment>
                <Routes />
            </Fragment>
                
        )
    }
}
