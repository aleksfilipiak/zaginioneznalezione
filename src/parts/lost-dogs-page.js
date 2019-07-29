import React, {Component} from "react";
import LostDogs from "./lost-dogs";
import {Link} from 'react-router-dom';

class LostDogsPage extends Component {

    

    render() {

        const location={
            pathname: 'dodaj',
            state: {from: this.props.location.pathname}
        }
        return (
            <div className='dogs-page'>
                <h1>Patrzysz na bazę zaginionych psów</h1>
                <p>Nie ma tu psa którego znalazłeś? Dodaj go!</p>
                <button className="pop-btn" id='add-pet'><Link to={location}>Dodaj psa do bazy znalezionych</Link></button>
                <LostDogs/>
            </div>
        );
    }
}

export default LostDogsPage;



