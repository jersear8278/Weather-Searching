import axios from 'axios';

const API_KEY = '6ab4268382a25de080512b45c8a79f44';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//`http://api.openweathermap.org/data/2.5/forecast&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return{
        type: FETCH_WEATHER,
        payload: request

    };
}
