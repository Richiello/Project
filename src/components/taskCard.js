import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import profile from '../images/profile_avatar.png'


export class TaskCard extends Component {
  render() {
    return (
      <div className="task-card">
        <Image src={profile} avatar />
        <span>Username</span>
      </div>
    )
  }
}
