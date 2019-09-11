import React from 'react';
import PropTypes from 'prop-types';

const Span = () => <span>...</span>;

export default function Page({ page, pageLink, onClick }) {
  const Component = page === '...' ? Span : 'a';
  const handleClick = !onClick ? null : (e) => {
    e.preventDefault();
    onClick(page);
  };

  return (
    <Component
      href={pageLink}
      onClick={handleClick}
    >
      {page}
    </Component>
  );
}

Page.propTypes = {
  page: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func,
};
