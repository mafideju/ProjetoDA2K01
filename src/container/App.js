import React from 'react'
import Search from '../components/Search'
import UserInfo from '../components/UserInfo'
import Actions from '../components/Actions';
import Repos from '../components/Repos';
import Starred from '../components/Starred';

export default function App() {
  return (
    <div className="app">
      <Search />
      <UserInfo />
      <Actions />
      <Repos
        className="repos"
        title="Repositórios"
        repos={[
          {
            name: "Mafideju",
            link: "#"
          },
          {
            name: "Fábrica",
            link: "#"
          },
          {
            name: "Maconha",
            link: "#"
          }
        ]}
      />
      <Starred
        className="starred"
        title="Favoritos"
        repos={[
          {
            name: "Favoritos do Mafideju",
            link: "#"
          },
          {
            name: "Favoritos do Fábrica",
            link: "##"
          },
        ]}
      />
    </div>
  )
}
// https://api.github.com/users/mafideju
