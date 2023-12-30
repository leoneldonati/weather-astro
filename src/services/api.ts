import type { WeatherData } from "../types";

type CacheCity = [] | WeatherData[]

let cache: CacheCity = []

console.log(cache);
export function getWeatherBy (city: string):Promise<WeatherData> | WeatherData {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.PUBLIC_KEY}`

  const cachedCity = cache.find(cityCached => cityCached?.name?.toLowerCase() === city?.toLowerCase())

  if (cachedCity) return cachedCity


  return fetch(url)
    .then(res => res.json())
    .then(data => {
      cache = [...cache, data]

      return data
    })
    .catch(err => err)
}