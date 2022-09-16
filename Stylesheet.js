import React from 'react'
import "./myStyle.css"

function Stylesheet(props) {
    let className = props.primary ? "primary": ""
  return (
    <div>
       <div className={className}>Stylesheets</div> 
    </div>
  )
}

export default Stylesheet
