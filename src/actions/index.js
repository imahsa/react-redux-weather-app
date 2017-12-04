import axios from 'axios';
const API_KEY = "4a09143250dfd6c725ddb0135883b520";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// We then will import it to our reducers
//so we don't have to change strings in both file every time we need
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, AU`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
