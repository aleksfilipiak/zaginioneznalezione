import React, {Component} from "react";
import LostDogs from "./lost-dogs";
import {Link} from 'react-router-dom';

class LostDogsPage extends Component {
    constructor(props){
        super(props)
        this.state={
            dateFilter:'',
            filterNow: false
        }
    }
    handleInputChange =(event) =>{
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }    

    filterBase = () =>{
        if (this.state.dateFilter !== ''){
        this.setState({
            filterNow: true
        })
    }
    }    
    render() {

        const location={
            pathname: 'dodaj',
            state: {from: this.props.location.pathname}
        }
        return (
            <div className='dogs-page'>
                <h1>Patrzysz na bazę zaginionych psów</h1>
                <p>Filtruj</p>
                <form>
                    <label>Po dacie: 
                        <input type='datetime-local' onChange={this.handleInputChange} value={this.state.dateFilter} id='dateFilter'/>
                    </label>
                    <label>
                        {/* <input type='submit' value="Filtruj" onSubmit={this.filterBase}  /> */}
                    </label>
                    <button onClick={this.filterBase}>Filtruj</button>
                </form>
                <p>Nie ma tu psa którego znalazłeś? Dodaj go!</p>
                <button className="pop-btn" id='add-pet'><Link to={location}>Dodaj psa do bazy znalezionych</Link></button>
                <LostDogs dateFilter={this.state.dateFilter} filterNow={this.state.filterNow}/>
            </div>
        );
    }
}

export default LostDogsPage;



