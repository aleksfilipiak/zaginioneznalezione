import React, { Component } from 'react';
import Cookies from 'universal-cookie';

class LoginWithCookie extends Component {
    constructor (props){
        super(props);
        this.state={
            login: ""
        };
    }
    changeHandler = (event)=>{
        this.setState({
            [event.currentTarget.id]:event.currentTarget.value
        });        
    } 

    checkLogin=()=>{
        const cookies = new Cookies();       
        cookies.set('login', `${this.state.login}`, { path: '/' });
        console.log(cookies.get('login'));
    }  

    render() {
        return (
            <div>
                 <input onChange={this.changeHandler}  id="login" value={this.state.login}></input>              
                <button type="submit" onClick={this.checkLogin}>Zaloguj</button>
            </div>
        );
    }
}

export default LoginWithCookie;
