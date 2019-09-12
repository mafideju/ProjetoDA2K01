import React from 'react' 
import PropTypes from 'prop-types' 
import styles from './UserInfo.css' 

export default function UserInfo({ userinfo }) {
  return (
    <div>
      <img
        src={userinfo.photo}
        alt={`Na imagem, o usuário GitHub ${userinfo.username}`}
        className={styles.photo}
      />
      <h2>
        <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </h2>

      <ul>
        <li>
          Repositórios: {userinfo.repos}
        </li>
        <li>
          Seguidores: {userinfo.followers}
        </li>
        <li>
          Seguindo: {userinfo.following}
        </li>
      </ul>

    </div>
  ) 
}

// UserInfo.defaultProps = {
//   userinfo: {
//     username: '',
//     repos: '',
//     followers: 0,
//     following: 0,
//     photo: '',
//     login: '',
//   },
// } 

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string,
    repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    photo: PropTypes.string,
    login: PropTypes.string,
  }),
} 
