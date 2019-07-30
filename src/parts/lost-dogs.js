import React from 'react';
import {Link} from 'react-router-dom';

export default class LostDogs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            sortedDogs: []
        };
        // this.baseUrl = "https://aleksfilipiak.github.io/zaginioneznalezione/dogs.json"
        this.baseUrl = "http://localhost:3008/dogs/"
    }
    componentDidMount(){
        this.loadDogs();
        console.log(this.props)
    }

    componentDidUpdate(){
        console.log(this.props)
        this.filterBase();
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

    filterBase(){ //param = arrOfConditions=this.props
        const dogsToFilter = [...this.state.data]
        const sortedDogs=dogsToFilter.sort(function(a,b){
            const dateA = new Date(a.time),
            dateB = new Date(b.time)
            return dateA-dateB
        })
        console.log(dogsToFilter)
        return sortedDogs
        // this.setState({
        //     sortedDogs:sortedDogs
        // })

        // console.log(this.state.sortedDogs)

    }
    render(){
        
        if (this.state.loading) return <h1>Ładuję dane</h1>
        const dogsToFilter = [...this.state.data]
        const sortedDogs=dogsToFilter.sort(function(a,b){
            const dateA = new Date(a.time),
            dateB = new Date(b.time)
            return dateB-dateA
        })
        
        console.log(sortedDogs)
      
        const dogs = sortedDogs.map((dog) => {

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
