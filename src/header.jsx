import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
        color:"blue"
    }
  }


componentDidMount(){
    setTimeout(()=>{
        this.setState({color:"green"})
    },2000)}

render(){
    return(
        <div>
            <h1>Fav Color is {this.state.color}</h1>
        </div>
    )
}
}