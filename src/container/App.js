import React, { Component } from 'react'
import AppContent from './AppContent';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      userinfo: {
        username: 'Marcio Mafideju',
        photo: 'https://avatars0.githubusercontent.com/u/34278662?v=4',
        login: 'mafideju',
        repos: 100,
        followers: 0,
        following: 3,
      },
      repos: [{
        name: 'Repos  Test',
        link: '#'
      }],
      starred: [{
        name: 'Starred  Test',
        link: '#'
      }],
    }
  }
  render() {
    return (
      <AppContent 
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

// https://api.github.com/users/mafideju
