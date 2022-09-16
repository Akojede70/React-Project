import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Peter Bass"
      }
      console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate")
        return true
      }
  
      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
      }
  
      componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
      }

  render() {
    console.log("LifecycleB render")
    return <div>Lifecycle B</div> 
  }
}

export default LifeCycleB
