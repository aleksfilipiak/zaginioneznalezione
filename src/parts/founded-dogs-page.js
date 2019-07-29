import React, {Component} from "react";
import FoundedDogs from "./founded-dogs";
import {Link} from 'react-router-dom'

class FoundedDogsPage extends Component {

    
    render() {

        const location={
            pathname: 'dodaj',
            state: {from: this.props.location.pathname}
        }
        return (
            <div className='dogs-page'>
                <h1>Patrzysz na bazę znalezionych psów</h1>
                <p>Nie ma tu psa który zaginął? Dodaj go!</p>
                <button className="pop-btn" id='add-pet'><Link to={location}>Dodaj psa do bazy zaginionych</Link></button>
                <FoundedDogs/>
            </div>
        );
    }
}

export default FoundedDogsPage;

