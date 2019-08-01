import React, { Component } from 'react';
import Cookies from 'universal-cookie';

class LoginWithCookie extends Component {
    constructor (props){
        super(props);
        this.state={
            login:'',
            email: "",
            pass:'',
            cookieLoginEmail:'',
            wrongPass: false,
            noSuchUser: false
        };
        // this.baseUrl=`https://aleksfilipiak.github.io/zaginioneznalezione/logins.json`
        this.baseUrl='http://localhost:3005/logins'
    }
    changeHandler = (event)=>{
        this.setState({
            [event.currentTarget.id]:event.currentTarget.value
        });
    } 

    checkLogin=()=>{
        fetch(this.baseUrl)
        .then(resp =>{
            if (resp.ok)
                return resp.json()
            else   
                throw new Error('Błąd zaciągania danych')
        }).then(data =>{
            this.setState({
                data
            })
            //checking is that email already in base
            const existingUserArr = this.state.data.filter((user)=>{
                return (user.email === `${this.state.email}`) 
            })
            
            //checking if user exist
            if(existingUserArr.length === 0 || this.state.email==='')
                {this.setState({
                    noSuchUser:true
                })                
            }
            else {
            const existingUser = existingUserArr[0]
            this.setState({
                noSuchUser:false,
                login:existingUser.login
            })
           
            //checikng is pass fits to username
            if (existingUser.pass !== `${this.state.pass}`){
                this.setState({
                    wrongPass:true
                })
            }else{    
                const cookies = new Cookies();       
                cookies.set('email', `${this.state.email}`, { path: '/' });
                cookies.set('login', `${this.state.login}`, {path:'/'})
                console.log(`hasło pasuje`)
                window.location.replace(document.referrer);
            }
        }
        }).catch(err=>{
            console.log(err)
        });

    }  
    componentDidMount(){
        const cookies = new Cookies();
        this.setState({
            cookieLoginEmail:cookies.get('email', {path: '/'}),
            cookieLogin:cookies.get('login', {path: '/'})
        });

        
      console.log(this.state.cookieLogin)
    }
    render() {
                if(this.state.cookieLoginEmail === undefined && this.state.cookieLogin === undefined){
                    return (
                        <div className="log-in">
                            <h1>zaloguj się</h1>                         
                            <input onChange={this.changeHandler}  id="email" value={this.state.email} placeholder='Wpisz email' type='email' required ></input>
                            <input onChange={this.changeHandler}  id="pass" value={this.state.pass} type='password' placeholder='Wpisz hasło' required></input>
                            {this.state.noSuchUser && <p className="errmsg" >Nie ma takiego użytkownika</p>}
                            {this.state.wrongPass && <p className="errmsg" >Nieprawidłowe hasło</p>}
                            <button id="log-in-btn" type="submit" onClick={this.checkLogin}>Zaloguj</button>
                        </div>)
                }
                 else{
                     return <p>Już jesteś zalogowany</p>
                 }
    }
}

export default LoginWithCookie;
