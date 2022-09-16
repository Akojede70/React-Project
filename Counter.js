import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

  increment() {
    // this.setState({
    //     count: this.state.count + 1
    // },
    // () => {
    //     //for the console, pass as a second parameter to the set state method and it is a call back function 
    //     console.log("callback value", this.state.count) 
    // }
    // )
    this.setState(prevState => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count) 
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }


  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
       
      </div>
    )
  }
}

export default Counter
