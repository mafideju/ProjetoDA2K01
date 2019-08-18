import React, { PropTypes } from 'react';

export default function Search({ handleSearch }) {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o Nome do Usuário"
        style={{ width: '20rem', height: '2rem', margin: '1rem 0' }}
        onChange={handleSearch}
      // onKeyUp={e => {
      //   const value = e.target.value;
      //   const keyCode = e.which || e.keyCode;
      //   if (keyCode === 13) {
      //     Axios
      //       .get(`https://api.github.com/users/${value}`)
      //       .then(result => {
      //         console.log(resul t)
      //       })
      //   }
      // }}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}