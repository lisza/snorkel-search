import React, { Fragment, useState } from 'react'

import data from '../data/sentences.json'
import SearchBar from './SearchBar'
import DataViewer from './DataViewer'


function SnorkelSearch() {
  // Using react hooks to set state (https://reactjs.org/docs/hooks-state.html)
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  function handleChange(e) {
    const search = e.target.value
    setSearchValue(search)

    const results = filterData(search)
    setFilteredData(results)
  }

  function filterData(search) {
    search = search.toLowerCase(search)
    return data.filter(el => {
      return el.data.toLowerCase().includes(search)
    })
  }

  return (
    <Fragment>
      <SearchBar searchValue={searchValue} handleChange={handleChange} />
      <DataViewer sentenceData={filteredData} searchValue={searchValue} />     
    </Fragment>
  )
}

export default SnorkelSearch