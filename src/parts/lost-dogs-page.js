import React, {Component} from "react";
import LostDogs from "./lost-dogs";

class LostDogsPage extends Component {
    render() {
        return (
            <div className='dogs-page'>
                <h1>Patrzysz na bazę zaginionych psów</h1>
                <p>Nie ma tu psa którego znalazłeś?</p>
                <button className="look-in-base">Dodaj psa do bazy znalezionych</button>
                <LostDogs/>
            </div>
        );
    }
}

export default LostDogsPage;



