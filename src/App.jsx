import React from 'react'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name: " ",
    }
    this.inputref = React.createRef()
  }
 componentDidMount(){
  this.inputref.current.focus()
}
  render(){
   return(
     <>
     <label >Name:
       <input type="text"
       ref={this.inputref} defaultValue={this.state.name} onChange={e => this.setState({name: this.setState(e.target.value)})}/>
     </label>
     </>
    )
  }
}

export default App