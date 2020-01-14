import React, {Component} from 'react'

class Location extends Component {
    constructor(props){
        super(props)
        
        this.state = {
        city : props.city,
        }
    }

    render(){
        const {city} = this.state; 
        return (
            <div>
                <h1>{city}</h1>
            </div>
        )
    }
}

export default Location;