import React from 'react'
import Sentence from './Sentence'


function DataViewer(props) {
  return (
  	<div className='DataViewer'>
	    <ul>
	      {props.sentenceData.map(item => {
	        return <Sentence
	        	key={item.id}
	        	data={item.data}
	        	search={props.searchValue}
	        />
	      })}
	    </ul>
    </div>
  )
}

export default DataViewer
