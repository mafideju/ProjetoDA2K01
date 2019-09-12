import React from 'react' 
import PropTypes from 'prop-types' 

const Span = () => <span>...</span> 

export default function Page({ page, pageLink, onClick }) {
  const Component = page === '...' ? Span : 'a' 
  const handleClick = !onClick ? null : (e) => {
    e.preventDefault() 
    onClick(page) 
  } 

  return (
    <Component
      href={pageLink}
      onClick={handleClick}
    >
      {page}
    </Component>
  ) 
}

Page.defaultProps = {
  pageLink: ''
}

Page.propTypes = {
  page: PropTypes.string,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
} 
