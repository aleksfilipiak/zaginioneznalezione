import React from 'react';

import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';


class MenuBtns extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cookieLoginEmail:'',
            cookieLogin:''            
        }
    }

    componentDidMount(){        
        const cookies = new Cookies();
        this.setState({
            cookieLoginEmail:cookies.get('email',{path: '/'}),
            cookieLogin:cookies.get('login',{path:`/`})
        })
        
    }

    logOut = ()=>{
        const cookies = new Cookies();
        cookies.remove('email', {path: '/'})
        cookies.remove('login', {path: '/'})
        this.setState({
            cookieLoginEmail:'',
            cookieLogin:''
        })
        window.location.reload();

    }
    render(){
        if (this.state.cookieLoginEmail === undefined){
            return(
            <div className='sign-btns'>
                <Link to='/'>Główna</Link>                
                <Link to='/registration'>Zarejestruj</Link>
                <Link to="/login">Zaloguj</Link>
            </div>
            )
        }
        else{
           return ( <div className='signed-msg'><p>Zalogowano: {this.state.cookieLogin}</p><button onClick={this.logOut}>Wyloguj</button></div>)
        }
    }
}


export default class Header extends React.Component{ //should return logo picture, menu buttons, searchbar and toggling bar on mobile device
    render(){
        return(
        <div className="header">
            <MenuBtns/>
            </div>
            )
    }
}