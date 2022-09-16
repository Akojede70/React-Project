import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Peter Bass"
      }
      console.log("LifecycleA constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(){
      console.log("LifecycleA shouldComponentUpdate")
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("LifecycleA getSnapshotBeforeUpdate")
    }

    componentDidUpdate(){
      console.log("LifecycleA componentDidUpdate ")
    }

  render() {
    console.log("LifecycleA render")
    return( 
      <div>
         <div> Lifecycle A </div> 
           <LifecycleB />
    </div>
    )
  }
}

export default LifecycleA
