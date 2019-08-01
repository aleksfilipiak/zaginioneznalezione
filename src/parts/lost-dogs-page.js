import React, {Component} from "react";
import LostDogs from "./lost-dogs";
import {Link} from 'react-router-dom';

class LostDogsPage extends Component {
    constructor(props){
        super(props)
        this.state={
            dateFilter:'',
            filterNow: false,
            dogName:'',
            dogSex: '',
            statusLost: false,
            statusFound:false
        }
    }
    handleInputChange =(event) =>{
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }    
    switchStatusFound=()=>{
        this.setState({
            statusFound: !this.state.statusFound
        })
    }
    switchStatusLost=()=>{
        this.setState({
            statusLost: !this.state.statusLost
        })
    }
    filterBase = (e) =>{
               
        this.setState({
            filterNow: !this.state.filterNow
        })
         e.preventDefault();

    }    
    render() {

        const location={
            pathname: 'dodaj',
            state: {from: this.props.location.pathname}
        }
        return (
            <div className='dogs-page'>
                {this.props.match.params === 'lost' ? <h1>Patrzysz na bazę zaginionych psów</h1> : <h1>Patrzysz na bazę znalezionych psów</h1>}
                <p>Filtruj</p>
                <form id='filterForm' onSubmit={this.filterBase}>
                    <label>Status:
                        <input type='checkbox' id='statusLost' name='status' value='lost' checked={this.state.statusLost} onChange={this.switchStatusLost}/>Zaginione
                        <input type='checkbox' id='statusFound' name='status' value='found' checked={this.state.statusFound} onChange={this.switchStatusFound}/>Znalezione
                    </label>
                    <label>Po dacie: 
                        <input type='datetime-local' onChange={this.handleInputChange} value={this.state.dateFilter} id='dateFilter'/>
                    </label>
                    <label>Po imieniu:
                        <input type='text' id='dogName' onChange={this.handleInputChange} placeholder='Imię'/>
                    </label>
                    <label>Po płci:
                        <select name='dogSex' id='dogSex' value={this.state.dogSex} onChange={this.handleInputChange}>
                            <option value='unknown'>Nie wiadomo</option>
                            <option value='female'>Samica</option>
                            <option value='male'>Samiec</option>
                        </select>
                    </label>
                    {this.state.filterNow ? <input type='submit' value='Resetuj filtry'/> : <input type='submit' value='Filtruj'/>}
                </form>
                <p>Nie ma tu psa którego znalazłeś? Dodaj go!</p>
                <button className="pop-btn" id='add-pet'><Link to={location}>Dodaj psa do bazy znalezionych</Link></button>
                <LostDogs 
                filterNow={this.state.filterNow} 
                filterConditions={[this.state.statusFound, this.state.statusLost, this.state.dateFilter, this.state.dogName, this.state.dogSex]}/>
            </div>
        );
    }
}

export default LostDogsPage;



