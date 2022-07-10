import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';

const WeatherTag = () => {

  const [loading, setLoading] = React.useState(false);
  const [weatherData, setWeatherData] = React.useState(null);
  
  const getWeather = async () => {
    setLoading(true);
    let apikey = process.env.REACT_APP_APIKEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=San francisco&appid=${apikey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeatherData(data);
    setLoading(false);
  }

  React.useEffect(() => {
    getWeather();
  },[])

  return (<>
    {
      // loading ?
      // <FontAwesomeIcon icon={solid('rotate')} spin/> :
      weatherData && <div
        style={{
          width: "305px",
          height: "125px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 2px #1FAB89", //: type == 2 ? "solid 2px #6C476E" : "solid 2px #1FAB89",
          borderRadius: "10px",
          fontSize: "20px",
          color: "#1FAB89", //: type == 2 ? "#6C476E" : "#1FAB89",
          background: "#D7FBE8" //: type == 2 ? "#FFC7C7" : "#D7FBE8"
        }}
      >
          <h4>{weatherData?.name}</h4>
          <div>
            {
              weatherData?.main?.feels_like > 30 ?
              <>
                <FontAwesomeIcon icon={solid('sun')}/> &nbsp;
                {weatherData?.main?.temp} &nbsp;°C
              </> :
              weatherData?.main?.feels_like > 16 && weatherData?.main?.feels_like <= 30 ?
              <>
                <FontAwesomeIcon icon={solid('cloud')}/> &nbsp;
                {weatherData?.main?.temp} &nbsp;°C
              </> :
              <>
                <FontAwesomeIcon icon={solid('snowflake')}/> &nbsp;
                {weatherData?.main?.temp} &nbsp;°C
              </>
            }
          </div>
      </div>
    }
  </>)
}

export default WeatherTag;