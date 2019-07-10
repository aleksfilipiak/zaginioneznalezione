import React, {Component} from "react";
import LostDogs from "./lost-dogs";
import {Link} from 'react-router-dom';

class LostDogsPage extends Component {

    

    render() {
        return (
            <div className='dogs-page'>
                <h1>Patrzysz na bazę zaginionych psów</h1>
                <p>Nie ma tu psa którego znalazłeś?</p>
                <button className="pop-btn" id='add-pet'><Link to='dodaj'>Dodaj psa do bazy zaginionych</Link></button>
                <LostDogs/>
            </div>
        );
    }
}

export default LostDogsPage;



