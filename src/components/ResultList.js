import React from 'react'
import ResultItem from './ResultItem'

function ResultList(props) {
  return (
    <ul>
      {props.sentenceData.map(item => {
        return <ResultItem
        	key={item.id}
        	data={item.data}
        	search={props.searchValue}
        />
      })}
    </ul>
  )
}

export default ResultList
