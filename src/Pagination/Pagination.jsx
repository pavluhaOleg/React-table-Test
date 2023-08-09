
import React, { useState, useRef } from 'react'
import p from './Pagination.module.css'
import ItemPagination from './ItemPagination/ItemPagination';

const Pagination = ({ countriesPerPage, totalCountries, paginate, pagePrev, pageNext }) => {
  const [elemActive, setElemActive] = useState(1);

  const pageNumbers = [];
  let i = 1
  for (; i <= totalCountries / countriesPerPage; i++) {
    pageNumbers.push(i);
  }

const Left = (e) => {
  e.preventDefault()
  if (elemActive > 1) {
    pagePrev()
    setElemActive(elemActive - 1)
  }
}

const Right = (e) => {
  e.preventDefault()
  if (elemActive < pageNumbers.length) {
    pageNext()
    setElemActive(elemActive + 1)
  }
}

return (

  <div className={p.block}>
    <a href='!#' onClick={Left} className={p.prev}>Назад</a>

    <div className={p.lid}>
      <ul className={p.blockCnp}>{
        pageNumbers.map(number => (
          <ItemPagination key={number} number={number} paginate={paginate}
            elemActive={elemActive} setElemActive={setElemActive}
          />
        ))}
      </ul>
    </div>
    <a href='!#' onClick={Right} className={p.next}>Далее</a>
  </div>

)
}


export default Pagination