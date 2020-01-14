import React, { Component } from 'react'
import WeatherIcons from 'react-weathericons'

class WeatherTemperature extends Component {
    constructor(props){
        super(props)
        this.state = {
            temperature : props.temperature,
            weatherState : props.weatherState,
        }
    }

    render(){
        const {temperature,weatherState} = this.state
        return (
            <div>
               <WeatherIcons name="day-sunny" size="2x" />
               <span>{ `${temperature}°`}</span>
            </div>
        )
    }
}

export default WeatherTemperature;