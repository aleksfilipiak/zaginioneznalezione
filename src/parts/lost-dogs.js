import React from 'react';
import {Link} from 'react-router-dom';

export default class LostDogs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            filteredDogs: []

        };
        // this.baseUrl = "https://aleksfilipiak.github.io/zaginioneznalezione/dogs.json"
        this.baseUrl = "http://localhost:3008/dogs/"
    }
    componentDidMount(){
        this.loadDogs();
    }

    componentDidUpdate(){
        console.log(this.props)
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
        const dogsToSort = [...this.state.data]
        const sortedDogs=dogsToSort.sort(function(a,b){
            const dateA = new Date(a.time),
            dateB = new Date(b.time)
            return dateB-dateA
        })
        
        console.log(sortedDogs)
        
        const conditionLost = document.getElementById('statusLost').value
        const conditionFound = document.getElementById('statusFound').value
        const filteredDogs = sortedDogs.filter(dog => {
            if(this.props.filterNow && this.props.filterConditions[3] !=='')
            {console.log(dog.name[1])
             return dog.name === this.props.filterConditions[3].toLowerCase();}
            // return dog.name.includes(this.props.filterConditions[3].toLowerCase())
            if (this.props.filterNow && this.props.filterConditions[4] !== '') 
            return dog.sex === this.props.filterConditions[4]
            if (this.props.filterNow && this.props.filterConditions[0])
            return dog.status === conditionLost
            if (this.props.filterNow && this.props.filterConditions[1])
            return dog.status === conditionFound
            if (this.props.filterNow && this.props.filterConditions[2] !== '')
            return new Date(dog.time) >= new Date(this.props.filterConditions[2])
             else return dog.name
         })

         console.log(filteredDogs)
                
        const dogs = filteredDogs.map((dog) => {

            const photoIntoBckg = {
                backgroundImage: `url(${dog.photo})`
            }

            return(
                <li key={dog.id}>
                    <Link to={{pathname: `dogs-base/dog/${dog.id}`}}>
                        {dog.name === 'unknown' ? <h3>Pies nr {dog.id}</h3> : <h3>{dog.name}</h3>}
                        <p>Zaginęło: {new Date(dog.time).toLocaleString()}</p>
                        <div className="dog-photo" style={photoIntoBckg}></div>
                    </Link>
                </li>
            )

        });

        return (
        <ul className='dogs-list'>
            {dogs}
        </ul>
        )
    }
}
