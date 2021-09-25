import { SGMeta } from "./SGMeta.ts";
import { SGWeather } from "./SGWeather.ts";
import { SGWeatherAll } from "./SGWeatherSources.ts";

type WeatherComponent<
  T extends keyof SGWeather<U>,
  U extends keyof SGWeatherAll,
> = Pick<SGWeather<U>, T | "time">;

export type SGWeatherResponse<
  T extends keyof SGWeather<U>,
  U extends keyof SGWeatherAll,
> = {
  hours: Array<WeatherComponent<T, U>>;
  meta: SGMeta<U, T>;
};
