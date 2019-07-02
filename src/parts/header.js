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
            cookieLogin:cookies.get('login')
        })
     
    }

    render(){
    const menuBtnsNames = ['Znalezione', 'Zaginione', 'Skontaktuj'];
    
    
    const menuBtns = menuBtnsNames.map((menuBtn,i) =>{
        return <button key={i}>{menuBtn}</button>
    })

    const registerBtn = <Link to='/registration'>Zarejestruj</Link>
    const loginBtn = <Link to="/login">Zaloguj</Link>
    

    return (<div>
        {menuBtns}
        {this.state.cookieLogin === undefined ? <div>{registerBtn}{loginBtn}</div> : <p>Zalogowano {this.state.cookieLogin}</p>}
       
        </div>
        )

    
    }
}


export default class Header extends React.Component{ //should return logo picture, menu buttons, searchbar and toggling bar on mobile device
    render(){
        return <MenuBtns/>
    }
}