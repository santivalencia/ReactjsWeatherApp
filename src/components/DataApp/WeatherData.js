import React, { Component } from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

class WeatherData extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <WeatherTemperature
                     temperature={20} 
                     weatherState={''} 
                 />
                <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
            </div>
        )
    }
}

export default WeatherData;