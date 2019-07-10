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
                    <label>Dodaj zdjęcie</label>
                    <input name='add-photo' type='file' ></input>
                    {this.state.lost ? <label>Czas zagubienia:</label> : <label>Czas znalezienia:</label>}
                    <input name='date' type='datetime-local'></input>
                    <label>Miejsce</label>
                    <input name='place'></input>
                    <label>Podstawowe informacje o zwierzęciu:</label>
                    <label>Imię:</label>
                    <input type='checkbox' name='name' value='Nie znam'></input>
                    <input type='text' name='name' placeholder='Wpisz imię'></input>
                    <label>Wzrost:</label>
                    <input type='radio' name='size'/><p>Do 30cm</p>
                    <input type='radio' name='size' /><p>Między 30cm a 70cm</p>
                    <input type='radio' name='size' /><p>Powyżej 70cm</p>
                    <label>Płeć:</label>
                    <input type='radio' name='gender' value='unknown'/><p>Nie znam</p>
                    <input type='radio' name='gender' value='male'/><p>Samiec</p>
                    <input type='radio' name='gender' value='female'/><p>Samica</p>
                    <label>Dodatkowe informacje</label>
                    <textarea name='more-info' placeholder='Jak wyglądało zdarzenie, co zwierzę miało przy sobie, jak się zachowywało...'></textarea>
                    <label>Forma kontaktu</label>
                    <input type='checkbox' name='contact' value='phone'/>Telefon
                    <input type='checkbox' name='contact' value='e-mail'/>E-mail
                    <input name='submit' type='submit' value='Dodaj'></input>
               </form>
            </div>
        );
    }
}

export default AddPet;