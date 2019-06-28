import React, { Component } from 'react';

class LostDog extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3004/founded/${this.props.id}`)
        .then(response =>{
            if (response.ok)
                return response.json;
            else
                return throw new Error("Błąd sieci")
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LostDog;