import React, { Component } from 'react';
import Axios from 'axios';
import AppContent from './AppContent';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
    };
  }

  handleSearch = (e) => {
    // if (onKeyUp) {
    //   this.setState({
    //     isFetching: true
    //   })
    // }
    Axios
      .get(`https://api.github.com/users/${e.target.value}`)
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.data.name,
            photo: result.data.avatar_url,
            login: result.data.login,
            repos: result.data.public_repos,
            followers: result.data.followers,
            following: result.data.following,
          },
          repos: [],
          starred: [],
        });
        // this.setState({
        //   isFetching: false
        // })
      });
  }

  getRepos = (type) => () => {
    Axios
      .get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
      .then((result) => {
        this.setState({
          [type]: result.data.map((repo) => ({
            name: repo.name,
            link: repo.html_url,
          })),
        });
      });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <AppContent
        className="black"
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}


// onKeyUp={e => {
//   const value = e.target.value;
//   const keyCode = e.which || e.keyCode;
//   if (keyCode === 13) {
//     Axios
//       .get(`https://api.github.com/users/${value}`)
//       .then(result => {
//         console.log(result)
//       })
//   }
// }}
