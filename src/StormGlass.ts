import { createWeatherForPoint } from "./methods/weatherForPoint.ts";
import { StormGlassOptions } from "./StormGlassOptions.ts";

export const StormGlass = (options: StormGlassOptions) => ({
  weatherForPoint: createWeatherForPoint(options),
});
