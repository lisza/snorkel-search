import React, { Fragment } from 'react'

import data from '../data/sentences.json'
import SearchBar from './SearchBar'
import ResultList from './ResultList'


function SnorkelSearch() {
  const [searchValue, setSearchValue] = React.useState("")
  const [filteredData, setFilteredData] = React.useState(data)

  function handleChange(e) {
    const search = e.target.value
    setSearchValue(search)

    const results = filterData(search)
    setFilteredData(results)
  }

  function filterData(search) {
    return data.filter(el => {
      return el.data.includes(search)
    })
  }

  return (
    <Fragment>
      <SearchBar searchValue={searchValue} handleChange={handleChange} />

      <p>{searchValue}</p>

      <ResultList sentenceData={filteredData} />     
    </Fragment>
  )
}

export default SnorkelSearch