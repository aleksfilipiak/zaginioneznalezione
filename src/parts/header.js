import React from 'react';



class MenuBtns extends React.Component{
    render(){
    const menuBtnsNames = ['Znalezione', 'Zaginione', 'Zaloguj', 'Zarejestruj', 'Skontaktuj'];

    const menuBtns = menuBtnsNames.map((menuBtn,i) =>{
        return <button key={i}>{menuBtn}</button>
    })

    return menuBtns;
    }
}


export default class Header extends React.Component{ //should return logo picture, menu buttons, searchbar and toggling bar on mobile device
    render(){
        return <MenuBtns/>
    }
}