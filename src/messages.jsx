import  react from 'react';
class Messages extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "John",
            counter:0
        }
    }
    changeName = () => {
        this.setState({name: "Jane"});
    }

    counter = () => {
        this.setState({counter: this.state.counter + 1});
    }
    render(){

        return(
            <div>
                <h1>hi, {this.state.name}</h1>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={()=>this.counter()}>Increment Counter</button>
                <button onClick={()=>this.changeName()}>change name</button>
            </div>
        )
    }}

export default Messages;