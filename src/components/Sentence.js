import React, { Fragment } from 'react'


function Sentence(props) {
	const { data, search, highlight } = props

	// const highlightSearchInSentence = () => {
 //    // find index of search within sentence
 //    const index = data.toLowerCase().indexOf(search.toLowerCase())
 //    const length = search.length

 //    // wrap search in span with highlight class
 //    return <li>
 //      {data.slice(0, index)}
 //      <span className='highlight'>{data.slice(index, index + length)}</span>
 //      {data.slice(index + length)}
 //    </li>
 //  }


	return (
	  <Fragment>
	    {
        // search ? highlightSearchInSentence() : <li>{data}</li>
        <li className={`${search && highlight ? 'highlight' : ''}`}>{data}</li>
      }
	  </Fragment>
	)
}

export default Sentence