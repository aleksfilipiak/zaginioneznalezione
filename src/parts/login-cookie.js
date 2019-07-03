import React, { Component } from 'react';
import Cookies from 'universal-cookie';

class LoginWithCookie extends Component {
    constructor (props){
        super(props);
        this.state={
            login: "",
            pass:'',
            cookieLogin:'',
            wrongPass: false,
            noSuchUser: false
        };
        this.baseUrl=`http://localhost:3005/logins`
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
            //checking is that login already in base
            const existingUserArr = this.state.data.filter((user)=>{
                return (user.login === `${this.state.login}`) 
            })
                  
            if(existingUserArr.length === 0)
                {this.setState({
                    noSuchUser:true
                })                
            }
            else {
            const existingUser = existingUserArr[0]
            this.setState({
                noSuchUser:false
            })
           
            //checikng is pass fits to username
            if (existingUser.pass !== `${this.state.pass}`){
                this.setState({
                    wrongPass:true
                })
            }else{    
                const cookies = new Cookies();       
                cookies.set('login', `${this.state.login}`, { path: '/' });
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
            cookieLogin:cookies.get('login', {path: '/'})
        });
      
    }
    render() {
                if(this.state.cookieLogin === undefined){
                    return (
                        <div>                            
                            <input onChange={this.changeHandler}  id="login" value={this.state.login} placeholder='Wpisz login lub email' required></input>
                            <input onChange={this.changeHandler}  id="pass" value={this.state.pass} type='password' placeholder='Wpisz hasło' required></input>
                            {this.state.noSuchUser && <p>Nie ma takiego użytkownika</p>}
                            {this.state.wrongPass && <p>Nieprawidłowe hasło</p>}
                            <button type="submit" onClick={this.checkLogin}>Zaloguj</button>
                        </div>)
                }
                 else{
                     return <p>Już jesteś zalogowany</p>
                 }
    }
}

export default LoginWithCookie;
