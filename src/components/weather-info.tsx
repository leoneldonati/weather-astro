import { useStore } from "../store";
import WeatherCard from "./weather-card";


function Error({ error }: any) {
  return (
    <article className="[grid-area:weather] flex-1">
      <h1>{error.message}</h1>

      <span>{error.cod}</span>
    </article>
  );
}

export default function WeatherInfo() {
  const weatherInfo = useStore((state) => state.weatherInfo);

 if (weatherInfo && weatherInfo.cod >= 400) return <Error error={weatherInfo}/>

 return <WeatherCard weatherInfo={weatherInfo!} />
}
