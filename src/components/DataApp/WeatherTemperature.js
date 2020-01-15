import React, { Component } from 'react'
import WeatherIcons from 'react-weathericons'
import { CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY, } from '../../constants/weathers' 

class WeatherTemperature extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            temperature : props.temperature,
            weatherState : props.weatherState,
            icons : {
                [CLOUD]: "cloud",
                [CLOUDY]: "cloudy", 
                [SUN]: "day-sunny",
                [RAIN]: "rain",
                [SNOW]: "snow",
                [WINDY]: "windy"
            }
        }
    }

    getWeatherIcons = weatherState =>{
        const icon = this.state.icons[weatherState];
        if(icon)
          return <WeatherIcons name={icon} size="2x" />
        else
          return <WeatherIcons name="day-sunny" size="2x" />
    }


    render(){
        const {temperature,weatherState} = this.state

        return (
            <div>
                {
                 this.getWeatherIcons(weatherState)
                }
               <span>{ ` ${temperature}°`}</span>
            </div>
        )
    }
}

export default WeatherTemperature;