import React from 'react'


function SearchBar(props) {
  return (
    <input
      id='searchBar'
      type='text'
      value={props.searchValue}
      onChange={props.handleChange}
    />
  )
}

export default SearchBar