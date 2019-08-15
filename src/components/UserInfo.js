import React,  { PropTypes } from 'react';

export default function UserInfo({ userinfo }) {
  return (
    <div>
      <img
        src={userinfo.photo}
        alt={userinfo.username}
        style={{ width: '10rem' }}
      />
      <h2>
        <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </h2>

      <ul>
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  )
}

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired
}