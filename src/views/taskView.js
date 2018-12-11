import React, { Component } from 'react'
import { TaskCard } from '../components/taskCard'

export class TaskView extends Component { 
    render() {
        return (
            <div>
                <TaskCard profile="hej"/>
            </div>
        )
    }
}
