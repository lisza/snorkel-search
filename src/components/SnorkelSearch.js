import React, { Fragment } from 'react';

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
      
    </Fragment>
  )
}

export default SnorkelSearch;