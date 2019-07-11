import React, { Component } from 'react';

class AddPet extends Component {
    constructor(props){
        super(props)
        this.state={
            lost:true
        }
        
    }
    render() {
        return (
            <div className='add-pet'>                
               <h1>Dodaj zwierzę</h1> 
               <form>
                   <div className='add-photo-holder '>
                        <label>Dodaj zdjęcie</label>
                        <div id='add-photo'></div>
                        <input name='add-photo' type='file' ></input><br/>
                    </div>
                    <div className='info-holder'>
                        <div className='add-place-and-time'>
                            {this.state.lost ? <label>Czas zagubienia:</label> : <label>Czas znalezienia:</label>}
                            <input name='date' type='datetime-local'></input><br/>
                            <label>Miejsce</label>
                            <input name='place' type='text'></input><br/>
                        </div>
                        <div className='basic-info'>
                            <label>Podstawowe informacje o zwierzęciu:</label><br/>
                            <label>Imię:</label>
                            <input type='checkbox' name='name' value='unknown'/>Nie znam <span>lub</span>
                            <input type='text' name='name' placeholder='Wpisz imię'></input><br/>
                            <label>Wzrost:</label>
                            <input type='radio' name='size'/>Do 30cm
                            <input type='radio' name='size' />Między 30cm a 70cm
                            <input type='radio' name='size' />Powyżej 70cm<br/>
                            <label>Płeć:</label>
                            <input type='radio' name='gender' value='unknown'/>Nie znam
                            <input type='radio' name='gender' value='male'/>Samiec
                            <input type='radio' name='gender' value='female'/>Samica<br/>
                            <label>Dodatkowe informacje</label><br/>
                            <textarea name='more-info' placeholder='Jak wyglądało zdarzenie, co zwierzę miało przy sobie, jak się zachowywało...'></textarea><br/>
                        </div>
                    </div>
                    <div className='contact-holder col-12'>
                      <label>Forma kontaktu</label>
                        <input type='checkbox' name='contact' value='phone'/>Telefon
                        <input type='checkbox' name='contact' value='e-mail'/>E-mail<br/>
                       <input name='submit' type='submit' value='Dodaj'></input>
                    </div>
               </form>
            </div>
        );
    }
}

export default AddPet;