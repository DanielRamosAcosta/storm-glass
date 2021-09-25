import { SGWeather } from "./SGWeather.ts";
import { SGWeatherAll } from "./SGWeatherSources.ts";

export type SGMeta<
  T extends keyof SGWeatherAll,
  U extends keyof SGWeather<T>,
> = {
  cost: number;
  dailyQuota: number;
  end: Date;
  lat: number;
  lng: number;
  params: U[];
  requestCount: number;
  start: Date;
};
