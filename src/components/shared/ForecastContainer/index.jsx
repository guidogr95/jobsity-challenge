import { useEffect, useState } from 'react';
// utils
import { fetchForecast } from 'src/helpers/reminders';
import { forecastObj } from 'src/helpers/forecast';

export default function ForecastContainer ({ form }) {
  const { city, date } = form.values
  const [forecastInfo, setForecastInfo] = useState(null)
  useEffect(() => {
    async function effectFetchForecast () {
      const forecast = await fetchForecast({ woeid: city.value.woeid, date });
      setForecastInfo(forecast)
    }
    if (!city?.value?.woeid || !date) {
      return null;
    }
    effectFetchForecast();
  }, [city, date])

  const renderTitle = () => {
    if (!city?.value?.label || !date) {
      return 'Pick a city and a date to display the forecast.'
    }
    if (city?.value?.label && date && !forecastInfo) {
      return 'Forecast not available for specified date/city'
    }
    return (
      <>
      <strong>Forecast</strong>
      <br />
      {city.label}
      <br />
      {date}
      <br />
      {forecastInfo?.weather_state_name && forecastInfo?.weather_state_name}
      </>
    )
  }

  return (
    <div className="flex w-1/2 items-center" >
      <h3 className="mr-7" >
        {renderTitle()}
      </h3>
      {(forecastObj[forecastInfo?.weather_state_name]?.icon && city?.value?.label && date) &&
        <img className="max-h-16" alt="forecast" src={forecastObj[forecastInfo.weather_state_name].icon} />
      }
    </div>
  );
};