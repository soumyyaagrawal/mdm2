import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
        color:"blue"
    }
  }


static getDerivedStateFromProps(props, state) {
    return {color:props.color}
}

render(){
    return(
        <div>
            <h1>Color is {this.state.color}</h1>
        </div>
    )
}
}