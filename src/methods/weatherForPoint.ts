import {
  hasErrors,
  SGApiKeyError,
  SGError,
  SGErrors,
  SGParamsNotValidError,
} from "../api-models/SGErrors.ts";
import { SGWeather } from "../api-models/SGWeather.ts";
import { SGWeatherResponse } from "../api-models/SGWeatherResponse.ts";
import { SGWeatherAll } from "../api-models/SGWeatherSources.ts";
import { Point } from "../models/Point.ts";
import { StormGlassOptions } from "../StormGlassOptions.ts";

type WeatherForPointArgs<T, U> = {
  point: Point;
  /**
   * List of the parameters you want to retrieve
   * @example ["swellHeight", "waveHeight"]
   */
  params: Array<U>;
  /**
   * Timestamp in UTC for first forecast hour - UNIX format or URL encoded ISO format.
   * Default: Today at 00.00
   */
  start?: Date;
  /**
   * Timestamp in UTC for first forecast hour - UNIX format or URL encoded ISO format.
   * Default: all
   */
  end?: Date;
  /**
   * Specify a single source or a comma separated list of sources.
   * @example ["noaa"]
   * @example  ["dwd", "noaa"]
   */
  sources?: Array<T>;
};

export const createWeatherForPoint = (
  { client = fetch, apiKey }: StormGlassOptions,
) =>
  async <
    T extends keyof SGWeather<U>,
    U extends keyof SGWeatherAll = keyof SGWeatherAll,
  >(
    {
      point,
      params,
      start,
      end,
      sources,
    }: WeatherForPointArgs<U, T>,
  ) => {
    const url = "https://api.stormglass.io/v2/weather/point";
    const searchParams = new URLSearchParams({
      lat: point.lat.toString(),
      lng: point.lng.toString(),
      params: params.join(","),
      ...(start ? { start: start.toISOString() } : {}),
      ...(end ? { end: end.toISOString() } : {}),
      ...(sources ? { sources: sources.join(",") } : {}),
    });

    const response = await client(url + "?" + searchParams, {
      headers: {
        Authorization: apiKey,
      },
    });

    const data: SGWeatherResponse<T, U> | SGErrors = await response.json();

    if (hasErrors(data)) {
      if (SGParamsNotValidError.is(data)) throw new SGParamsNotValidError(data);
      if (SGApiKeyError.is(data)) throw new SGApiKeyError(data);

      throw new SGError(data);
    }

    return data;
  };
