import  react from 'react';
class Messages extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "John"
        }
    }
    changeName = () => {
        this.setState({name: "Jane"});
    }   
    render(){

        return(
            <div>
                <h1>hi, {this.state.name}</h1>
                <button onClick={()=>this.changeName()}>change name</button>
            </div>
        )
    }}

export default Messages;