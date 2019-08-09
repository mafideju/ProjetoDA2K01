import React from 'react'

const App = () => {
  return (
    <div className="app">
      <div className="search">
        <input type="search" placeholder="Digite o Nome do Usuário" />
      </div>
      <div className="user-info">
        <img
          src="https://avatars0.githubusercontent.com/u/34278662?v=4"
          alt="Foto Marcio Rodrigues"
        />
        <h2><a href="https://github.com/mafideju">Marcio Rodrigues</a></h2>

        <ul className="repos-info">
          <li>Repositórios: 122</li>
          <li>Seguidores: 10</li>
          <li>Seguindo: 10</li>
        </ul>

        <div className="actions">
          <button>Ver Repositórios</button>
          <button>Ver Favoritos</button>
        </div>

        <div className="repos">
          <h3>Repos: </h3>
          <ul><li><a href="#">Nome do Repos</a></li></ul>
        </div>

        <div className="starred">
          <h3>Favoritos: </h3>
          <ul><li><a href="#">Nome do Repos</a></li></ul>
        </div>
      </div>
    </div>
  )
}
// https://api.github.com/users/mafideju

export default App;
