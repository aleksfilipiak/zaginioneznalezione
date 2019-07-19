import React, { Component } from 'react';

class AddPet extends Component {
    constructor(props){
        super(props)
        this.state={
            lost:true
        }
        
    }

   

    render() {
        const windowWidth = window.innerWidth;
        return (
            <div className='add-pet'>                
               <h1>Dodaj zwierzę</h1> 
               <form>
                   <div className='add-photo-holder '>
                        <div className='add-photo'></div>
                        <label for='add-photo'>Dodaj zdjęcie</label>
                        <input name='add-photo' id='add-photo' type='file' ></input><br/>
                    </div>
                    <div className='info-holder'>
                        <div className='add-place-and-time'>
                            {this.state.lost ? <label>Czas zagubienia:</label> : <label>Czas znalezienia:</label>}
                            <input name='date' type='datetime-local'></input><br/>
                            <label>Miejsce</label>
                            <input name='place' type='text'></input>
                        </div>
                        <div className='basic-info'>
                            <p>Podstawowe informacje o zwierzęciu:</p>
                                <label>Imię:
                                {windowWidth < 680 ? <br/> : undefined}
                                <input type='checkbox' name='name' value='unknown'/>Nie znam <span>lub</span>
                                {windowWidth < 680 ? <br/> : undefined}
                                <input type='text' name='name' placeholder='Wpisz imię'></input><br/>
                            </label>
                            <label>Wzrost:
                            {windowWidth < 680 ? <br/> : undefined}
                                <input type='radio' name='size'/>Do 30cm
                                {windowWidth < 680 ? <br/> : undefined}
                                <input type='radio' name='size' />Między 30cm a 70cm
                                {windowWidth < 680 ? <br/> : undefined}
                                <input type='radio' name='size' />Powyżej 70cm<br/>
                            </label>
                            <label>Płeć:
                            {windowWidth < 680 ? <br/> : undefined}
                                <input type='radio' name='gender' value='unknown'/>Nie znam
                                {windowWidth < 680 ? <br/> : undefined}
                                <input type='radio' name='gender' value='male'/>Samiec
                                {windowWidth < 680 ? <br/> : undefined}
                                <input type='radio' name='gender' value='female'/>Samica<br/>
                            </label>
                            <label>Dodatkowe informacje:
                                <textarea name='more-info' wrap='off' cols={30} rows={10} placeholder='Jak wyglądało zdarzenie, co zwierzę miało przy sobie, jak się zachowywało...'></textarea><br/>
                            </label>
                        </div>
                    </div>
                    <div className='contact-holder col-12'>
                      <label>Forma kontaktu</label>
                        <input type='checkbox' name='contact' value='phone'/>Telefon
                        <input type='checkbox' name='contact' value='e-mail'/>E-mail<br/>
                    </div>
                    <input name='submit' type='submit' value='Dodaj'></input>
               </form>
            </div>
        );
    }
}

export default AddPet;