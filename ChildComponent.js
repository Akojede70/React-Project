import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler ("child")}>Greet Parent</button>
      {/* the child is a parameter pass */}
    </div>
  )
}

export default ChildComponent
