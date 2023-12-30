import type { WeatherData } from "../types";

export default function WeatherCard ({ weatherInfo }: {weatherInfo: WeatherData}) {

  return(
    <article className="[grid-area:weather] flex-1">
      <h1>El clima en: {weatherInfo?.name}, {weatherInfo?.sys.country}</h1>
    </article>
  )
}