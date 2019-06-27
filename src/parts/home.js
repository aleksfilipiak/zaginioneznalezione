import React from 'react';
//import {Link} from 'react-router-dom'

export default class Home extends React.Component{

    
    render(){
        return (
        <div>
            <h1>Zaginione znalezione Poznań</h1>
            <p>Zgubiłaś swoje lub znalazłaś cudze zwierzę? Zamieść ogłoszenie w aplikacji skupiającej ogłoszenia tylko zaginionych/znalezionych zwierząt</p>
            <p>Obecnie aplikacja ogranicza się do terenu powiatu Poznańskiego i do gatunku psa. Sprawdź możliwości tej aplikacji, napisz do nas, jak Ci się ona podoba i pomóż nam rozwinąć ją na cały kraj i wszystkie zwierzęta </p>
            <p>Kliknij:</p>
            <button>Zgubiłam zwierzę</button>
            <button>Znalazłam zwierzę</button>
        </div>)
    }
}

