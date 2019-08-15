import React from 'react';
import axios from 'axios';

export default function Search() {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o Nome do Usuário"
        style={{ width: '20rem', height: '2rem', margin: '1rem 0' }}
        onChange={e => {
          const value = e.target.value;
          axios
            .get(`https://api.github.com/users/${value}`)
            .then(result => {
             console.log(result)
            })
        }}
        // onKeyUp={e => {
        //   const value = e.target.value;
        //   const keyCode = e.which || e.keyCode;
        //   if (keyCode === 13) {
        //     axios
        //       .get(`https://api.github.com/users/${value}`)
        //       .then(result => {
        //         console.log(result)
        //       })
        //   }
        // }}
      />
    </div>
  )
}
