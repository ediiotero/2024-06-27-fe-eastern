import React from 'react'

const PropSample = (props) => {
  return (
    <div>
        Props Page
        <p>{props.first}</p>
        <p>{props.last}</p>
    </div>
  )
}

export default PropSample