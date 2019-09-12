import React from 'react' 
import PropTypes from 'prop-types' 
import uuid from 'uuid' 
import Pagination from '../Pagination' 

export default function Repos({ className, title, repos }) {
  return (
    <div className={className}>
      <h3>
        {title}:
      </h3>
      <ul>
        {repos.map((repo) => (
          <li key={uuid()}>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))}
      </ul>
      <Pagination total={10} />
    </div>
  ) 
}

Repos.defaultProps = {
  className: '',
  repos: [],
} 

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object),
} 
