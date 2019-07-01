import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state={
            login: "",
            pass: "",
            nick: ""
        }
    }
    
    changeHandler = (event) =>{
        this.setState({
            [event.currentTarget.id]:event.currentTarget.value
        })
    } 

    render() {
        return (
            <div>
                <p>Zaloguj się</p>
                <p>Login/mail</p><input onChange={this.changeHandler} id="login" value={this.state.login}></input>
                <p>Hasło</p><input onChange={this.changeHandler} id="pass" value={this.state.pass}></input>
                <p>Nick</p><input onChange={this.changeHandler} id="nick" value={this.state.nick}></input>
                <button type="submit">Zaloguj</button>
            </div>
        );
    }
}

export default LoginPage;