import React, { Component } from 'react'
import AppContent from './AppContent';
import Axios from 'axios';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: '',
        photo: '',
        login: '',
        repos: 0,
        followers: 0,
        following: 0,
      },
      repos: [],
      starred: [],
    }
  }

  handleSearch = e => {
    Axios
      .get(`https://api.github.com/users/${e.target.value}`)
      .then(result => {
        console.log("RESULT =>", result)
        this.setState({
          userinfo: {
            username: result.data.name,
            photo: result.data.avatar_url,
            login: result.data.login,
            repos: result.data.public_repos,
            followers: result.data.followers,
            following: result.data.following,
          }
        })
      })
  }


  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={e => this.handleSearch(e)}
      />
    )
  }
}

// https://api.github.com/users/mafideju
