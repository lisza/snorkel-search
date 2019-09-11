import React, { Fragment, useState } from 'react'

import data from '../data/sentences.json'
import SearchBar from './SearchBar'
import DataViewer from './DataViewer'


function SnorkelSearch() {
  // Using react hooks to set state (https://reactjs.org/docs/hooks-state.html)
  const [searchValue, setSearchValue] = useState("")
  // const [filteredData, setFilteredData] = useState(data)
  const [filteredData, setFilteredData] = useState(data)

  function handleChange(e) {
    const search = e.target.value
    setSearchValue(search)

    // const results = filterData(search)
    const results = annotateData(search)
    setFilteredData(results)
  }

  // function filterData(search) {
  //   search = search.toLowerCase(search)
  //   return data.filter(el => {
  //     return el.data.toLowerCase().includes(search)
  //   })
  // }

  function annotateData(search) {
    search = search.toLowerCase(search)
    return data.map(el => {
      if (el.data.toLowerCase().includes(search)) {
        el['match'] = true
      } else {
        el['match'] = false
      }
      return el
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