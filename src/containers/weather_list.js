import React, {Component} from 'react';
import {connect} from 'react-redux';
import chart from '../components/chart';
import GoogleMap from '../components/google_map';

  class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pres = cityData.list.map(weather => weather.main.pressure);
        const hum = cityData.list.map(weather => weather.main.humidity);
        //const lon = cityData.city.coord.lon;
        //const lat = cityData.city.coord.lat;
        //==
        const {lon,lat} = cityData.city.coord;

        return (      
            <tr key={name}>
                <td>{<GoogleMap lon={lon} lat={lat} />}</td>
                <td >{chart(temps,'red','K')}</td>
                <td >{chart(pres,'orange','hPa')}</td>
                <td>{chart(hum,'blue','%')}</td>      
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperture(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){ //==const weather = state.weather
    return {weather}; //=={weather:weather}
}
// = function mapStateToProps(state){
//   return {weather: state.Weather};   
//}

export default connect (mapStateToProps)(WeatherList);