import React, { PropTypes } from 'react';
import Search from '../components/Search';
import UserInfo from '../components/UserInfo'
import Actions from '../components/Actions';
import Repos from '../components/Repos';
import Starred from '../components/Starred';

export default function AppContent({ userinfo, repos, starred }) {
    return (
        <div className="app">
          <Search />
          {userinfo && <UserInfo userinfo={userinfo}/>}
          {userinfo && <Actions />}
          {repos.length && <Repos
            className="repos"
            title="Repositórios"
            repos={repos}
          />}
          {starred.length && <Starred
            className="starred"
            title="Favoritos"
            repos={starred}
          />}
      </div>
    )
}

AppContent.propTypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
}