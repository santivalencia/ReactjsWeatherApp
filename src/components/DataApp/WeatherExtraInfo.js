import React, {Component} from 'react'

class WeatherExtraInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            humidity : props.humidity,
            wind :  props.wind
        }
    }

    render(){
        const { humidity, wind} = this.state
        return (
            <div>
                <span>{`${humidity} % -`} </span>
                <span>{`${wind} viento`}</span>
            </div>
        )
    }
}

export default WeatherExtraInfo;