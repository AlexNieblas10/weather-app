import { API_KEY } from "../CONSTANTS";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { getBackground } from "../logic/getBackground";
import { cleanTime } from "../logic/cleanTime";
import "../styles/forecast.css";

export const Forecast = () => {
  const [infoApiForecast, setInfoApiForecast] = useState(false);
  const { loader, setLoader, location } = useContext(Context);

  console.log(infoApiForecast);

  useEffect(() => {
    let Forecast_API = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${API_KEY}`;
    if (location !== false) {
      try {
        setLoader(true);
        fetch(Forecast_API)
          .then((response) => response.json())
          .then((info) => setInfoApiForecast(info))
          .then(() => setLoader(false));
      } catch {
        console.error("Error");
      }
    }
  }, [location]);

  return (
    <section className="full_container_forecast">
      <Link to="/" className="linkPage">
        Go to real time
      </Link>

      {loader && <h2>cargando...</h2>}

      {infoApiForecast.timelines && (
        <article className="cards_container_forecast">
          {infoApiForecast.timelines.daily.map((item) => {
            return (
              <div
                className="card_location_forecast"
                key={item.time}
                style={{
                  backgroundImage: `url("${getBackground(
                    item.values.temperatureAvg
                  )}")`,
                }}
              >
                <h1 className="title_location_forecast">
                  {infoApiForecast.location.name}
                </h1>
                <div>
                  <h2 className="time_forecast">{cleanTime(item.time)}</h2>
                  <h2 className="temperature_forecast">{`${item.values.temperatureAvg}°`}</h2>
                </div>
                <ul className="location_information_forecast">
                  <li className="information_forecast">{`Humidity: ${item.values.humidityAvg}%`}</li>
                  <li className="information_forecast">{`Visibility: ${item.values.visibilityAvg}Km`}</li>
                  <li className="information_forecast">{`Precipitation probability: ${item.values.precipitationProbabilityAvg}%`}</li>
                  <li className="information_forecast">{`Wind speed: ${item.values.windSpeedAvg}Km/h`}</li>
                </ul>
              </div>
            );
          })}
        </article>
      )}

      {infoApiForecast.message && <h2 className="messageError">{infoApiForecast.message}</h2>}
    </section>
  );
};
