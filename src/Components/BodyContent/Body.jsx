import React from 'react'
import './Body.css';

function Body(props) {
  return (
    <div className="bodydiv">
      {props.children}
    </div>
  )
}

export default Body
