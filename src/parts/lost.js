import React from "react";
import {Link} from 'react-router-dom';

export default class Lost extends React.Component{

    render(){
        return (
            <div>
                <p>Zgubiłaś/eś swojego psa? Po pierwsze: zgłoś się do okolicznych schronisk. Bardzo często osoby, które znajdą udomowione zwierzę zabierają je właśnie do najbliższego schroniska</p>
                <p>W okolicy Poznania działają 2 schroniska</p>
                <p>Ulica Bukowska Poznań</p>
                <p>Skałowo obok Kostrzyna</p>
                <p>Nikt nie zawiózł tam Twojego psa? Rozejrzyj się po naszej bazie znalezionych psów. Szukaj zgłoszonych od daty zaginięcia Twojego psa</p>
                <button><Link to="/baza-znalezionych">Szukaj wśród znalezionych</Link></button>
            </div>
        )
    }
}