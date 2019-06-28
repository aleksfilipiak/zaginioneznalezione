import React, {Component} from "react";
import LostDogs from "./lost-dogs";

class LostDogsPage extends Component {
    render() {
        return (
            <div>
                <p>Patrzysz na bazę znalezionych psów</p>
                <LostDogs/>
            </div>
        );
    }
}

export default LostDogsPage;



