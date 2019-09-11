import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Page from './Page';
import pagination from '../../utils/pagination';

export default function Pagination({
  total,
  activePage,
  pageLink,
  onClick,
}) {
  return (
    <ul style={{ backgroundColor: 'lightblue', listStyleType: 'none' }}>
      {
        pagination({ total, activePage }).map((page) => (
          <li
            key={uuid()}
            style={activePage === page ? { backgroundColor: 'white' } : null}
          >
            <Page
              page={page}
              pageLink={pageLink.replace('%page%', page)}
              onClick={onClick}
            />
          </li>
        ))
      }
    </ul>
  );
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func,
};
