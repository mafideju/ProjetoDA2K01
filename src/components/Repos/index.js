/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

export default function Repos({ className, title, repos }) {
  return (
    <div className={className}>
      <h3>
        {title}
:
      </h3>
      <ul>
        {repos.map((repo, i) => (
          <li key={i}>
            <a href={repo.link}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Repos.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ),
};
