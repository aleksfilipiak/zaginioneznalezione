import React from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cookieLogin: ''
        }
    }
    componentDidMount(){        
        const cookies = new Cookies();
        this.setState({
            cookieLogin:cookies.get('login')
        })
        
    }
    render(){                
        return (
        <div className="home">
            <h1>Zaginione - znalezione Poznań</h1>
            {this.state.cookieLogin !== undefined && <h2>Witaj {this.state.cookieLogin}</h2>}
            <p>Zgubiłaś swoje lub znalazłaś cudze zwierzę? Zamieść ogłoszenie w aplikacji skupiającej ogłoszenia tylko zaginionych/znalezionych zwierząt</p>
            <p>Obecnie aplikacja ogranicza się do terenu powiatu Poznańskiego i do gatunku psa. Sprawdź możliwości tej aplikacji, napisz do nas, jak Ci się ona podoba i pomóż nam rozwinąć ją na cały kraj i wszystkie zwierzęta </p>
            <p>Kliknij:</p>
            <div className='main-btns-holder'>
                <button><Link to='/lost'>Zgubiłam zwierzę</Link></button>
                <button>Znalazłam zwierzę</button>
            </div>
        </div>)
    }
}

