import  React, {Component}  from 'react'
import Location from "./Location"
import WeatherData from "../DataApp/WeatherData"

class WeatherLocation extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
       return (
        <div> 
            <Location city={'Colombia - Medellin'}></Location>
            <WeatherData></WeatherData>
        </div>
       ) 
   }
}

export default WeatherLocation;