import React, {Component} from "react";
import FoundedDogs from "./founded-dogs";

class FoundedDogsPage extends Component {
    render() {
        return (
            <div className='dogs-page'>
                <h1>Patrzysz na bazę znalezionych psów</h1>
                <FoundedDogs/>
            </div>
        );
    }
}

export default FoundedDogsPage;

