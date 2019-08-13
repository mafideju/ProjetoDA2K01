import React from 'react'

export default function UserInfo() {
  return (
    <div className="user-info">
      <img
        src="https://avatars0.githubusercontent.com/u/34278662?v=4"
        alt="Foto Marcio Rodrigues"
        style={{ width: '10rem' }}
      />
      <h2><a href="https://github.com/mafideju">Marcio Rodrigues</a></h2>

      <ul className="repos-info">
        <li>Repositórios: 122</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 10</li>
      </ul>
    </div>
  )
}
