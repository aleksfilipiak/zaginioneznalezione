import React, { Component } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

class LostDog extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true,
        }
        this.baseUrl=`http://localhost:3004/founded`
    }
    componentDidMount(){       
        this.loadDog(); 
    }
    
    loadDog() {
        const id = this.props.match.params.id
        fetch(`${this.baseUrl}/${id}`)
        .then(response =>{
            if (response.ok)
                return response.json();
            else
                throw new Error("Błąd sieci");
        }).then(data=>{
            this.setState({
                loading: false,
                data
            });                                
        }).catch(err => {
            console.log("Błąd ładowania danych")
        });
    }
    
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.location !== this.props.location){
    //         this.setState({
    //             prevPath:this.props.location
    //         })
    //         console.log(this.state.prevPath)
    //     }
    // }

    rescued(){
       

      console.log('uratowane')

    }


    render() {
        
        if (this.state.loading) return <h1>Ładuję dane</h1>
        const photoIntoBckg = {
            backgroundImage: `url(${this.state.data.photo})`
        }
        return (
            <div className="show-pet">
            <ul> 
                <li>Nr zwierzęcia: {this.props.match.params.id}</li>
                <li>Imię: {this.state.data.name}</li>
                <li style={photoIntoBckg} className='pet-photo'></li>
                <li><p>Znaleziono/zaginęło: { new Date(this.state.data.time).toLocaleString()}</p>
                <div id='pet-map'> 
                    <Map center={this.state.data.latlng} 
                        length={4}
                        zoom={13}
                        style={{height:300}}
                    >
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={this.state.data.latlng}>
                            <Popup>Tu jesteś</Popup>
                        </Marker>      
                    </Map>
                </div>
                </li>
                <li>Wiek: {this.state.data.age}</li>
                <li>Wielkość: {this.state.data.height}</li>
                <li>Dodatkowe informacje: {this.state.data.extraInfo}</li>
                <li>Kontakt przez telefon: {this.state.data.phone}</li>
                <li>Kontakt przez mail: {this.state.data.email}</li>
                <button  onClick={this.rescued}>Pies wrócił do właściciela</button>
            </ul>
            </div>
        );
    }
}

export default LostDog;