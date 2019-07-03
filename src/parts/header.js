import React from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';


class MenuBtns extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cookieLogin:''            
        }
    }

    componentDidMount(){        
        const cookies = new Cookies();
        this.setState({
            cookieLogin:cookies.get('login',{path: '/'})
        })
        
    }

    logOut = ()=>{
        const cookies = new Cookies();
        cookies.remove('login', {path: '/'})
        this.setState({
            cookieLogin:''
        })
        window.location.reload();

    }
    render(){
    // const menuBtnsNames = ['Znalezione', 'Zaginione', 'Skontaktuj'];
    // const menuBtns = menuBtnsNames.map((menuBtn,i) =>{
    //     return <button key={i}>{menuBtn}</button>
    // })
    
        if (this.state.cookieLogin === undefined){
            return(
            <div>
                <Link to='/registration'>Zarejestruj</Link>
                <Link to="/login">Zaloguj</Link>
            </div>
            )
        }
        else{
           return ( <div><p>Zalogowano {this.state.cookieLogin}</p><button onClick={this.logOut}>Wyloguj</button></div>)
        }
    }
}


export default class Header extends React.Component{ //should return logo picture, menu buttons, searchbar and toggling bar on mobile device
    render(){
        return <MenuBtns/>
    }
}