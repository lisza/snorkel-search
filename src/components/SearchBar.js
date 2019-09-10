import React from 'react'


function SearchBar(props) {
  return (
  	<div className='SearchBar'>
	    <input
	      id='search-bar'
	      type='text'
	      value={props.searchValue}
	      onChange={props.handleChange}
	    />
    </div>
  )
}

export default SearchBar