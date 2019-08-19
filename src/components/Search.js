import React, { PropTypes } from 'react';

export default function Search({ handleSearch }) {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o Nome do Usuário"
        style={{ width: '20rem', height: '2rem', margin: '1rem 0' }}
        onChange={handleSearch}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func
}