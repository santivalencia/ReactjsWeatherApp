import React, { Component } from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import { CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY, } from '../../constants/weathers'

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
                     weatherState={CLOUDY} 
                 />
                <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
            </div>
        )
    }
}

export default WeatherData;