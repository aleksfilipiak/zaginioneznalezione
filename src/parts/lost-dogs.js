import React from 'react';
import {Link} from 'react-router-dom';

export default class LostDogs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        };
        this.baseUrl = "http://localhost:3004/founded/"
    }
    componentDidMount(){
        this.loadDogs()
    }

    loadDogs(){
        fetch(this.baseUrl)
        .then(response =>{
            if(response.ok)
                return response.json();
            else
                throw new Error ('Błąd sieci');
        }).then(data =>{
            this.setState({
                loading:false,
                data
            })
        }).catch(err =>{
            console.log("Błąd w przesyłaniu danych");
        })
    }   
    render(){

        if (this.state.loading) return <h1>Ładuję dane</h1>

        const founded = this.state.data.map((dog) => {
            return(
                <li key={dog.id}>
                    <Link to={{pathname: `founded/dog/${dog.id}`}}><h3>{dog.info.name}</h3></Link>
                </li>
            )
        });
        return (
        <ul>
            {founded}
        </ul>
        )
    }
}
