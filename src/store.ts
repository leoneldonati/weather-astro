import { create } from "zustand";
import { getWeatherBy } from "./services/api";
import type { WeatherData } from "./types";

interface Store {
  weatherInfo?: WeatherData
  selectCity: (citySelected: string ) => void
}

export const useStore = create<Store>((set) => ({
  weatherInfo: undefined,
  selectCity: async (citySelected) => {
    const weatherInfo = await getWeatherBy(citySelected)
    set({ weatherInfo })
  }
}))