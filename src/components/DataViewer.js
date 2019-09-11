import React from 'react'
import Sentence from './Sentence'


function DataViewer(props) {
	console.log(props.sentenceData)

  return (
  	<div className='DataViewer'>
	    <ul>
	      {props.sentenceData.map(item => {
	        return <Sentence
	        	key={item.id}
	        	data={item.data}
	        	highlight={item.match}
	        	search={props.searchValue}
	        />
	      })}
	    </ul>
    </div>
  )
}

export default DataViewer
