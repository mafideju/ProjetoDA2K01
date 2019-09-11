import React from 'react';
import PropTypes from 'prop-types';

export default function Starred({ className, title, repos }) {
  return (
    <div className={className}>
      <h3>
        {title}:
      </h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.link}>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Starred.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object),
};
