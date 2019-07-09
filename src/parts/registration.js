import React, { Component } from 'react';

class Registration extends Component {
    constructor(props){
        super(props)
        this.state={
            newLogin: '',
            newEmail: '',
            newPass: ''
        }
    }

    submitHandler =(e)=>{
        e.preventDefault();
        this.baseUrl=`https://aleksfilipiak.github.io/zaginioneznalezione/logins.json`
        const newUser ={
            login:this.state.newLogin,
            email:this.state.newEmail,
            pass:this.state.newEmail
        };
        fetch(this.baseUrl,{
            method: 'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>{
            if (response.ok)
                return response.json();
            else   
                throw new Error('błąd przesyłania użytkownika');
        })
        .then(()=>console.log(`POST klika się`))
        .catch(err => console.log(err));
    }

    changeHandler = (e)=>{
        this.setState({
            [e.currentTarget.id]:e.currentTarget.value
        })        
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} noValidate className='register-form'>
                <h1>Zarejestruj się</h1>         
                <p>Jeżeli chcesz dodać znalezione lub zaginione zwierzę, musisz mieć konto</p>                
                <input id='newLogin' value={this.state.newLogin} onChange={this.changeHandler} placeholder="Login" type="text" required></input>
                <input id='newEmail' value={this.state.newEmail} onChange={this.changeHandler} placeholder="Email" type="email" required></input>
                <input id='newPass' value={this.state.newPass} onChange={this.changeHandler} placeholder="Hasło" type="password" required></input>
                
                <button type='submit'  id='sign-up-btn' >Załóż konto</button>
            </form>
        );
    }
}

export default Registration;