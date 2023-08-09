import React from 'react'
import nt from './Nav-Title.module.css'
import arrow from '../../img/arou.svg'

const NavTitle = ({ text, sortElem}) => {
  return (
    <li className={nt.text} onClick={sortElem}>{text}
      <img src={arrow} alt='' className={nt.m_left} />
    </li>
  )
}

export default NavTitle