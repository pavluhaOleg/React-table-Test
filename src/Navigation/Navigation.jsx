import React from 'react'
import nav from './Navigation.module.css'
import NavTitle from '../Components/Nav-Title/Nav-Title'

const Navigation = ({ sortId, sortAlphabetically }) => {

  return (
    <ul className={nav.navigation}>
      <NavTitle text={"ID"} sortElem={sortId} />
      <NavTitle text={"Заголовок"} sortElem={sortAlphabetically} />
      <div className={`${nav.m_left} ${nav.flex}`}>
        <NavTitle text={"Описание"} sortElem={sortAlphabetically} />
      </div>

    </ul>
  )
}

export default Navigation