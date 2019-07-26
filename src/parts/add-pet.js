import React, { Component } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

class AddPet extends Component {
    constructor(props){
        super(props)
        this.state={
            lostOrFound: '',
            owner: 'unknown',
            hasLocation: false,
            latlng:{
                lat: 52.405073,
                lng: 17.052509
            },  
            zoom: 13,
            time: '',
            nameVal: '',
            age: '',
            switchCheck: false,
            selectedSizeOption:'',
            extraInfo: '',
            selectedGenderOption: '',
            photo: ''
            
        }
        this.mapRef = React.createRef();
    }

    //EVENT HANDLERS

    handleClick = () => {
      const map = this.mapRef.current
      if (map != null) {
        map.leafletElement.locate()
      }
    }
  
    handleLocationFound = (e) => {
      this.setState({
        hasLocation: true,
        latlng: e.latlng
      })
    }
   
    handleInputChange =(event) =>{
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }

    handleRadioValue = changeEvent =>{
        this.setState({
            selectedGenderOption: changeEvent.target.value
          });   
    }

    handleRadioValue2 = changeEvent => {
        this.setState({
            selectedSizeOption: changeEvent.target.value
          });
    }

    switchCheckName =()=>{
        this.setState({
            switchCheck: !this.state.switchCheck
        })
    }

    componentDidUpdate(){
        const nameVal = document.getElementById('nameVal')
        if (this.state.switchCheck) {nameVal.disabled = true}
        else {nameVal.disabled = false}
    }

    insteadPhoto = () =>{
        const img = 'https://royalcanin.pl/blog/wp-content/uploads/2016/12/231W-2-950x680.jpeg'
        let photoMsg = prompt("Dodawanie własnych zdjęć jest na razie niemożliwe. Dodaj link do obrazka lub kliknij OK, żeby by wstawić wylosowany", img)
        if (photoMsg !== null){
            this.setState({
                photo:photoMsg
               })
        }
        
    }

   

    //ADDING PET OBJECT

    addPet = () =>{
        this.baseUrl = 'http://localhost:3004/founded'
        const example = {
            id: 0,
            lostOrFound: '',
            owner: this.state.owner,
            info:{            
            latlng:{
                lat: this.state.latlng.lat,
                lng: this.state.latlng.lng
            },
            time: this.state.time,
            name: this.state.switchCheck ? 'unknown' : this.state.nameVal,
            age: this.state.age,
            height: this.state.selectedSizeOption,
            sex: this.state.selectedGenderOption,
            extraInfo: this.state.extraInfo,
            email: this.state.email,
            phone: this.state.phone,
            photo: this.state.photo
            }
        }

        fetch(this.baseUrl,{
            method: 'POST',
            body: JSON.stringify(example),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok)
                return res.json();
            else
                throw new Error ('błąd POST');
        })
        .then(()=>console.log('post klika'))
        .catch(err => console.log(err));
    }

   
    //RENDER


    render() {
        const marker = this.state.hasLocation ? (
            <Marker position={this.state.latlng}>
              <Popup>Tu jesteś</Popup>
            </Marker>
          ) : null
        return (
            <div className='add-pet'>                
               <h1>Dodaj zwierzę</h1> 
               <form>
                   <div className='add-photo-holder '>
                        <div className='add-photo'></div>
                        <label htmlFor='add-photo'>Dodaj zdjęcie</label>
                        {/* <input name='add-photo' id='add-photo' type='file' ></input><br/> */}
                        <input name='add-photo' id='add-photo' type='text' onClick={this.insteadPhoto} ></input><br/>
                    </div>
                    <div className='info-holder'>
                        <div className='add-place-and-time'>
                            {this.state.lost ? <label>Czas zagubienia:</label> : <label>Czas znalezienia:</label>}
                            <input name='date' type='datetime-local' id='time' onChange={this.handleInputChange} value={this.state.time}></input><br/>
                            <label>Zanznacz miejsce na mapie:</label>
                            <div id='map'> 
                                <Map center={this.state.latlng} 
                                    length={4}
                                    onClick={this.handleClick}
                                    ref={this.mapRef}
                                    zoom={13}
                                    style={{height:190}}
                                    onLocationfound={(e) => this.handleLocationFound(e)}
                                    onClick={this.handleClick} >
                                    <TileLayer
                                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                    {marker}       
                                    <button className="leaflet-bottom leaflet-right"
                                    ></button>                             
                                </Map>

                            </div>

                        </div>
                        <div className='basic-info'>
                            <p>Podstawowe informacje o zwierzęciu:</p>
                                <label>Imię:
                                <input type='checkbox' checked={this.state.switchCheck} name='name' id='unknownName' value='unknown' onChange={this.switchCheckName}/>Nie znam <span>lub</span>
                                <input type='text' name='name' placeholder='Wpisz imię' id="nameVal" disabled={this.state.disabled} onChange={this.handleInputChange}></input><br/>
                            </label>
                            <label>Wiek:
                                <input type='text' name='age' id='age' onChange={this.handleInputChange}></input>
                            </label>
                            <label >Wzrost:
                                <input type='radio' name='size' value="small" checked={this.state.selectedSizeOption === 'small'} onChange={this.handleRadioValue2}/>Do 30cm
                                <input type='radio' name='size' value="middle" checked={this.state.selectedSizeOption === 'middle'} onChange={this.handleRadioValue2}/>Między 30cm a 70cm
                                <input type='radio' name='size' value="big" checked={this.state.selectedSizeOption === 'big'} onChange={this.handleRadioValue2}/>Powyżej 70cm<br/>
                            </label>
                            <label>Płeć:
                                <input type='radio' name='gender' value='unknown' onChange={this.handleRadioValue} checked={this.state.selectedGenderOption === 'unknown'}/>Nie znam
                                <input type='radio' name='gender' value='male' onChange={this.handleRadioValue} checked={this.state.selectedGenderOption === 'male'} />Samiec
                                <input type='radio' name='gender' value='female' onChange={this.handleRadioValue} checked={this.state.selectedGenderOption === 'female'} />Samica<br/>
                            </label>
                            <label>Dodatkowe informacje:
                                <textarea name='more-info' id="extraInfo" onChange={this.handleInputChange} wrap='on' cols={30} rows={10} placeholder='Jak wyglądało zdarzenie, co zwierzę miało przy sobie, jak się zachowywało...'></textarea><br/>
                            </label>
                        </div>
                    </div>
                    <div className='contact-holder col-12'>
                      <label>Forma kontaktu<br/>
                      Telefon<input type='text' name='contact' id='phone' placeholder='Tylko cyfry' onChange={this.handleInputChange}/>
                      E-mail<input type='text' name='contact' id='email' placeholder='Podaj e-mail' onChange={this.handleInputChange}/><br/>
                        </label>
                    </div>
                    <input name='submit' type='submit' value='Dodaj' onClick={this.addPet}></input>
               </form>
            </div>
        );
    }
}

export default AddPet;