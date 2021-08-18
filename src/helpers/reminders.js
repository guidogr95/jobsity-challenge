// config
import { WEATHER_API_URL } from 'src/config/api';
// utils
import axios from 'axios';

export const fetchCities = async (city) => {
  if (city.length >= 3) {
     let cities = await axios.get(`${WEATHER_API_URL}/cities/${city}`)
     cities = cities?.data ? cities.data.map(city => { return { value: { woeid: city.woeid, label: city.title }, label: city.title } }) : [];
     return cities
  }
};

export const fetchForecast = async (options) => {
  const { woeid, date } = options;
  let forecast = await axios.post(`${WEATHER_API_URL}/forecast`, { woeid, date });
  forecast = forecast?.data || null;
  return forecast;
};