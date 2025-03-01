import React from 'react'
import './Body.css';

function Body(props) {
  return (
    <div className="bodydiv">
     <p> Body Content </p>
      {props.children}
    </div>
  )
}

export default Body
