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
    },3000)
}

getSnapshotBeforeUpdate = (prevProps, prevState) => {
  document.getElementById("div1").innerHTML="Before update, the colour was "+ prevState.color;
  return null;
}

componentDidUpdate(prevProps, prevState){
    document.getElementById("div2").innerHTML="After update, the colour is "+ this.state.color;
}

render(){
    return(
        <>
            <h1>Color is {this.state.color}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </>
    )
}
}