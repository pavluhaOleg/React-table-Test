import React, { useState, useEffect } from 'react';
import axios from 'axios';
import app from './App.module.css';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination'
import Table from '../Table/Table'

function App() {

  const [elem, setElem] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const [tempSearch, setTempSearch] = useState('');


  // событие сылки "id" -- "click" -- reverse

  const sortId = (elemId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?${elemId}`)
      .then(res => {
        setElem(res.data.reverse())
      })
  }

  // событие сылки "title", "body" -- "click" -- сортитовка по алфавиту

  const sortAlphabetically = (elemT) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?${elemT}`)
      .then(res => {
        const result = res.data.sort((a, b) => a.title > b.title ? 1 : -1);
        setElem(result)
      })
  }

  // событие input-search -- "click"

  const fetchData = (term) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?q=${term}`)
      .then(res => {
        setElem(res.data)
      })
  }

  // загрузка date при загрузке страницы.

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        setElem(res.data)
      })
  }, [])

  //  узнаём номер последней страницы
  const lastCountryIndex = curentPage * countriesPerPage

  // узнаём номер первой страницы
  const firstCountryIndex = lastCountryIndex - countriesPerPage


  const currentCountry = elem.slice(firstCountryIndex, lastCountryIndex)


  const paginate = pageNumber => setCurentPage(pageNumber)

  // пострантчный переход -- "Далее"
  const pageNext = () => setCurentPage(prev => prev + 1)

  // пострантчный переход -- "Назад"
  const pagePrev = () => setCurentPage(prev => prev - 1)


  return (
    <div className={app.wrapperProject}>
      <Search fetchData={fetchData} tempSearch={tempSearch} setTempSearch={setTempSearch} />
      <Navigation sortId={sortId} sortAlphabetically={sortAlphabetically} />
      <Table currentCountry={currentCountry} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={elem.length}
        pageNext={pageNext}
        paginate={paginate}
        pagePrev={pagePrev}
      />
    </div>
  );
}

export default App;
