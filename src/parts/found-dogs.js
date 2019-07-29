import React from 'react';
import {Link} from 'react-router-dom';

export default class FoundDogs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        };
        // this.baseUrl = "https://aleksfilipiak.github.io/zaginioneznalezione/dogs.json"
        this.baseUrl = "http://localhost:3008/dogs/"
    }
    componentDidMount(){
        this.loadDogs()
    }

    loadDogs(){
        fetch(this.baseUrl)
        .then(response =>{
            if(response.ok)
            {
                return response.json();
            }
                
            else
                throw new Error ('Błąd sieci');
        }).then(data =>{
            this.setState({
                loading:false,
                data
            })
        }).catch(err =>{
            console.log(err)
            console.log("Błąd w przesyłaniu danych");
        })
    }   
    render(){

        if (this.state.loading) return <h1>Ładuję dane</h1>

        // const found = this.state.data.found.map((dog) => {
            const found = this.state.data.map((dog) => {
            const photoIntoBckg = {
                backgroundImage: `url(${dog.photo})`
            }
            return(
                <li key={dog.id}>
                    <Link to={{pathname: `dogs-base/dog/${dog.id}`}}>
                        <h3>{dog.name}</h3>
                        <div className="dog-photo" style={photoIntoBckg}></div>
                    </Link>
                </li>
            )
        });
        return (
        <ul className='dogs-list'>
            {found}
        </ul>
        )
    }
}
