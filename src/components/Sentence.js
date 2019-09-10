import React, { Fragment } from 'react'


function Sentence(props) {
	return (
	  <Fragment>
	    <li>{props.data}</li>
	  </Fragment>
	)
}

export default Sentence