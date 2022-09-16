import React, { Component } from 'react'

class UserGreeting extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      isLoggedIn: true
   }
 }

  render() {
    // SHORT CIRCUIT OPERATOR

    return this.state.isLoggedIn && <div>Welcome Femi</div>

      // TERNARY CONDITIONAL OPERATOR
    // return this.state.isLoggedIn ? (
    //     <div>Welcome Peter Bass!</div>
    // ) : (
    //     <div>Welcome Guest</div>
    // )

    // ELEMENT VARIABLES
    // let message
    // if (this.state.isLoggedIn){
    //     message = <div>welcome Peter</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
   
    
    // IF ELSE
    // if (this.state.isLoggedIn) {
    //     return <div>welcome Vishwas</div>
    // }else {
    //    return <div>welcome Guest</div>
    // }
    // return (
    //   <div>
        
    //   </div>
    // )
  }
}

export default UserGreeting
