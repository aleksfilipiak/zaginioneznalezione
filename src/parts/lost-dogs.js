import React from 'react';
import {Link} from 'react-router-dom';

export default class LostDogs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        };
        this.baseUrl = "https://aleksfilipiak.github.io/zaginioneznalezione/founded.json"
    }
    componentDidMount(){
        this.loadDogs()
    }

    loadDogs(){
        fetch(this.baseUrl)
        .then(response =>{
            if(response.ok)
            {console.log(response)
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
            console.log(err);
            console.log("Błąd w przesyłaniu danych");
        })
    }   
    render(){

        if (this.state.loading) return <h1>Ładuję dane</h1>

        const founded = this.state.data.founded.map((dog) => {
            const photoIntoBckg = {
                backgroundImage: `url(${dog.info.photo})`
            }
            return(
                <li key={dog.id}>
                    <Link to={{pathname: `founded/dog/${dog.id}`}}>
                        <h3>{dog.info.name}</h3>
                        <div className="dog-photo" style={photoIntoBckg}></div>
                    </Link>
                </li>
            )
        });
        return (
        <ul className='dogs-list'>
            {founded}
        </ul>
        )
    }
}
