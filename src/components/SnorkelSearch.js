import React, { Fragment } from 'react'

import data from '../data/sentences.json'
import SearchBar from './SearchBar'
import DataViewer from './DataViewer'


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
    search = search.toLowerCase(search)
    return data.filter(el => {
      return el.data.toLowerCase().includes(search)
    })
  }

  return (
    <Fragment>
      <SearchBar searchValue={searchValue} handleChange={handleChange} />
      <DataViewer sentenceData={filteredData} />     
    </Fragment>
  )
}

export default SnorkelSearch