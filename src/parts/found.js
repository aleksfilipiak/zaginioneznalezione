import React from "react";
import {Link} from 'react-router-dom';

export default class Found extends React.Component{

    render(){
        return (
            <div className="what-to-do-info">
                <div className="first-step">
                    <h1>Zrób zdjęcie</h1>
                    <p>Rozejrzyj się po okolicy</p>
                    <p>Zapytaj kogoś, czy widział tego psa wcześniej.</p>
                </div>
                <div className="first-step extra-padding">
                    <h1>Sprawdź bazę</h1>
                    <p>Być może już ktoś dodał do niej tego psa. Sprawdź za pomocą mapy czy ten pies wcześniej był w zaginionych</p>
                    <button className='pop-btn'><Link to="/baza-zaginionych">Szukaj wśród zaginionych</Link></button>
                </div>
            </div>
        )
    }
}