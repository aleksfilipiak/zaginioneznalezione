import React from "react";
import {Link} from 'react-router-dom';

export default class Lost extends React.Component{

    render(){
        return (
            <div className="what-to-do-info">
                <div className="first-step">
                    <h1>Sprawdź schroniska</h1>
                    <p>Zgubiłaś/eś swojego psa? Po pierwsze: zgłoś się do okolicznych schronisk. Bardzo często osoby, które znajdują udomowione zwierzę, zabierają je właśnie do najbliższego schroniska</p>
                    <p>W okolicy Poznania działają 2 schroniska</p>
                    <p>Ulica Bukowska Poznań</p>
                    <p>Skałowo obok Kostrzyna</p>
                </div>
                <div className="first-step extra-padding">
                    <h1>Sprawdź bazę</h1>
                    <p>Nikt nie zawiózł tam Twojego psa? Rozejrzyj się po naszej bazie znalezionych psów. Szukaj zgłoszonych od daty zaginięcia Twojego psa</p>
                    <button className='pop-btn'><Link to="/baza-znalezionych">Szukaj wśród znalezionych</Link></button>
                </div>
            </div>
        )
    }
}