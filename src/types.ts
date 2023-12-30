type Coordinates = {
  lon: number;
  lat: number;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type MainInfo = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

type Wind = {
  speed: number;
  deg: number;
};

type Clouds = {
  all: number;
};

type SysInfo = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

// Definir el tipo para el objeto completo
export type WeatherData = {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainInfo;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: SysInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};