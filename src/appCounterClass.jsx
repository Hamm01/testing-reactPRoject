import React from 'react'

export default class Appcounter extends React.Component {
constructor(props){
    super(props)

    this.state = {
      counter : 0
    }
}
render(){
    const counterCount = () =>{
        this.setState(currentState => {
          return {
           counter : currentState.counter + 1
        }
        })
      }
    return <div className="container" onClick={counterCount}>{this.state.counter}</div>
}
 
}
