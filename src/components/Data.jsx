import { useContext, useEffect, useState } from "react";
import { API_KEY } from "../CONSTANTS";
import { getBackground } from "../logic/getBackground";
import { Link } from "react-router-dom";
import "../styles/data.css";
import { Context } from "../context/Context";

export const Data = () => {
  const [infoApi, setInfoApi] = useState(false);
  const { loader, setLoader, location } = useContext(Context);

  console.log(infoApi);

  useEffect(() => {
    let REAL_TIME_API = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${API_KEY}`;
    if (location !== false) {
      try {
        setLoader(true);
        fetch(REAL_TIME_API)
          .then((response) => response.json())
          .then((info) => setInfoApi(info))
          .then(() => setLoader(false));
      } catch {
        console.error("Error");
      }
    }
  }, [location]);

  return (
    <section className="full_container">
      <Link to="/forecast" className="linkPage">
        Go to Forecast
      </Link>

      {loader && <h2>cargando...</h2>}

      {infoApi.data && (
        <div
          className="card_location"
          style={{
            backgroundImage: `url("${getBackground(
              infoApi.data.values.temperature
            )}")`,
          }}
        >
          <h1 className="title_location">{infoApi.location.name}</h1>
          <h2 className="temperature">{`${infoApi.data.values.temperature}°`}</h2>
          <ul className="location_information">
            <li className="information">{`Humidity: ${infoApi.data.values.humidity}%`}</li>
            <li className="information">{`Visibility: ${infoApi.data.values.visibility}Km`}</li>
            <li className="information">{`Precipitation probability: ${infoApi.data.values.precipitationProbability}%`}</li>
            <li className="information">{`Wind speed: ${infoApi.data.values.windSpeed}Km/h`}</li>
          </ul>
        </div>
      )}

      {
        infoApi.message&&(
          <h2 className="messageError">{infoApi.message}</h2>
        )
      }
      
    </section>
  );
};
