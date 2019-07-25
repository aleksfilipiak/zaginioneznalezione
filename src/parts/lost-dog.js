import React, { Component } from 'react';

class LostDog extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true
        }
        this.baseUrl="http://localhost:3004/founded"
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


    render() {
        if (this.state.loading) return <h1>Ładuję dane</h1>
        const photoIntoBckg = {
            backgroundImage: `url(${this.state.data.photo})`
        }
        return (
            <div className="show-pet">
            <ul> 
                <li style={photoIntoBckg} className='pet-photo'></li>               
               <li>Nr zwierzęcia: {this.props.match.params.id}</li>
               <li>Imię {this.state.data.name}</li>
               <li>Wiek {this.state.data.age}</li>                
            </ul>
            </div>
        );
    }
}

export default LostDog;