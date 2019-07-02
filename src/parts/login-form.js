import React, { Component } from 'react';




class LoginPage extends Component {    
    
    constructor(props){
        super(props)   
        this.state={
            login: ""
        }
    }

    changeHandler = (event)=>{
    
        this.setState({
            [event.currentTarget.id]:event.currentTarget.value
        });        
    }         
    
    render() {
        return (
            <div>
                <p>Zaloguj się</p>
                <p>Login /mail</p>
                <input onChange={this.changeHandler}  id="login" value={this.state.login}></input>
                
                
            </div>
        );
    }
}

export default LoginPage;