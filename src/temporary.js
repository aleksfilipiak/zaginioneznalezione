import React, { Component } from 'react';
import LoginPage from './login-form';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class LoginWithCookie extends Component {
    static propTypes ={
        cookies: instanceOf(Cookies).isRequired
    };
    constructor (props){
        super(props);
        const {cookies} = this.props;
        this.state={
            name: cookies.get('name') 
        };
    }

    saySomething = (something) => {
        console.log(something);
      }

      componentDidMount() {
        this.saySomething(this.state.name);
      }

    checkLogin(){
        
    }  

    handleNameChange(name){
        const {cookies} = this.props;

        cookies.set('name', name, {path: '/'});
        this.setState({name});
    }
    render() {
        const {name} = this.state;
        return (
            <div>
                <LoginPage name={name} onChange={this.handleNameChange.bind(this)}/>
                {this.state.name && <h1>Hello {this.state.name}!</h1>}
                <button type="submit" onClick={this.checkLogin}>Zaloguj</button>
            </div>
        );
    }
}

export default withCookies(LoginWithCookie);