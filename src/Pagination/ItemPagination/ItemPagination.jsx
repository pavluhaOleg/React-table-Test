import React from 'react'
import p from './ItemPagination.module.css'

const ItemPagination = ({ number, paginate, elemActive, setElemActive }) => {

  const clickNumber = (e) => {
    e.preventDefault();
    setElemActive(number)
    paginate(number)
  }

  return (
    <li key={number}
      className={elemActive === number ? `${p.number} ${p.active}` : p.number}
      onClick={clickNumber}>
      {number}
    </li>
  )
}

export default ItemPagination