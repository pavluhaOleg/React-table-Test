import React, { useState } from 'react'
import s from './Search.module.css'
import cnp from '../img/search-menu.svg';


const Search = ({ fetchData, tempSearch, setTempSearch }) => {
  // const [tempSearch, setTempSearch] = useState('');



  return (
    <div className={s.blockSearch}>
      <input type="text" value={tempSearch} onChange={(e) => { setTempSearch(e.currentTarget.value) }} />

      <div className={s.cnp} onClick={() => fetchData(tempSearch)}>
        <img src={cnp} width="21px" alt='cnp-search' />
      </div>
    </div>
  )
}

export default Search