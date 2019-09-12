import React from 'react' 
import PropTypes from 'prop-types' 

export default function Actions({ getRepos, getStarred }) {
  return (
    <div className="actions">
      <button type="button" onClick={getRepos}>Ver Repositórios</button>
      <button type="button" onClick={getStarred}>Ver Favoritos</button>
    </div>
  ) 
}

Actions.propTypes = {
  getRepos: PropTypes.func,
  getStarred: PropTypes.func,
} 
