import React from 'react';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import UserInfo from '../components/UserInfo';
import Actions from '../components/Actions';
import Repos from '../components/Repos';
import Starred from '../components/Starred';

export default function AppContent({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isFetching,
}) {
  return (
    <div className="app">
      <Search handleSearch={handleSearch} />
      {isFetching && <h2>Carregando...</h2>}
      {userinfo && <UserInfo userinfo={userinfo} />}
      {userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
      {repos.length && (
      <Repos
        className="repos"
        title="Repositórios"
        repos={repos}
      />
      )}
      {starred.length && (
      <Starred
        className="starred"
        title="Favoritos"
        repos={starred}
      />
      )}
    </div>
  );
}

AppContent.propTypes = {
  userinfo: PropTypes.objectOf(PropTypes.object),
  repos: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ),
  starred: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ),
  handleSearch: PropTypes.func,
  getRepos: PropTypes.func,
  getStarred: PropTypes.func,
  isFetching: PropTypes.bool,
};
