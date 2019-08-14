import React, { PropTypes } from 'react';

export default function Repos({ className, title, repos }) {
  return (
    <div className={className}>
      <h3>{title}: </h3>
      <ul>
        {repos.map((repo, idx) => (
          <li key={idx}>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}