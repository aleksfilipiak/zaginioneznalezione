import React, {Component} from "react";
import LostDogs from "./lost-dogs";

class LostDogsPage extends Component {
    render() {
        return (
            <div className='lost-dogs-page'>
                <h1>Patrzysz na bazę znalezionych psów</h1>
                <LostDogs/>
            </div>
        );
    }
}

export default LostDogsPage;



