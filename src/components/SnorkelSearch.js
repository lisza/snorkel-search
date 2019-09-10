import React, { Fragment } from 'react'
import data from '../data/sentences.json'
import ResultList from './ResultList'


function SnorkelSearch() {
  const [searchValue, setSearchValue] = React.useState("")

  function handleChange(e) {
    const search = e.target.value
    setSearchValue(search)
  }

  return (
    <Fragment>
      <input
      id='searchTerm'
      type='text'
      value={searchValue}
      onChange={handleChange}
    />

    <p>{searchValue}</p>
    <ResultList sentenceData={data} />
      
    </Fragment>
  )
}

export default SnorkelSearch