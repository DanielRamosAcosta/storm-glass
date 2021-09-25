// deno-fmt-ignore-file
import { SGSources } from "./SGSources.ts";

// Extracted from https://docs.stormglass.io/#/sources?id=weather-attributes

export type SGWeatherAll                     = Pick<SGSources, "icon" | "noaa" | "meteo" | "dwd" | "meto" | "fcoo" | "fmi" | "yr" | "smhi" | "sg">;
export type SGWeatherAirTemperature          = Pick<SGSources,          "noaa" |           "dwd" |                                  "smhi" | "sg">;
export type SGWeatherPressure                = Pick<SGSources,          "noaa" |           "dwd" |                           "yr" | "smhi" | "sg">;
export type SGWeatherCloudCover              = Pick<SGSources,          "noaa" |           "dwd" |                                  "smhi" | "sg">;
export type SGWeatherCurrentDirection        = Pick<SGSources,                                     "meto" |                                  "sg">;
export type SGWeatherCurrentSpeed            = Pick<SGSources,                                     "meto" |                                  "sg">;
export type SGWeatherGust                    = Pick<SGSources,          "noaa" |           "dwd" |                                  "smhi" | "sg">;
export type SGWeatherHumidity                = Pick<SGSources,          "noaa" |           "dwd" |                                  "smhi" | "sg">;
export type SGWeatherIceCover                = Pick<SGSources,          "noaa" |                                                             "sg">;
export type SGWeatherPrecipitation           = Pick<SGSources,          "noaa" |           "dwd" |                                  "smhi" | "sg">;
export type SGWeatherSeaLevel                = Pick<SGSources,                                     "meto" |                                  "sg">;
export type SGWeatherSnowDepth               = Pick<SGSources,          "noaa" |                                                             "sg">;
export type SGWeatherSwellDirection          = Pick<SGSources, "icon" | "noaa" | "meteo" | "dwd" | "meto" |                                  "sg">;
export type SGWeatherSwellHeight             = Pick<SGSources, "icon" | "noaa" | "meteo" | "dwd" | "meto" |                                  "sg">;
export type SGWeatherSwellPeriod             = Pick<SGSources, "icon" | "noaa" | "meteo" | "dwd" | "meto" |                                  "sg">;
export type SGWeatherSecondarySwellDirection = Pick<SGSources,          "noaa" |                                                             "sg">;
export type SGWeatherSecondarySwellHeight    = Pick<SGSources,          "noaa" |                                                             "sg">;
export type SGWeatherSecondarySwellPeriod    = Pick<SGSources,          "noaa" |                                                             "sg">;
export type SGWeatherVisibility              = Pick<SGSources,          "noaa" |                                                    "smhi" | "sg">;
export type SGWeatherWaterTemperature        = Pick<SGSources,          "noaa" |                   "meto" |                                  "sg">;
export type SGWeatherWaveDirection           = Pick<SGSources, "icon" | "noaa" | "meteo" |         "meto" | "fcoo" | "fmi" | "yr" |          "sg">;
export type SGWeatherWaveHeight              = Pick<SGSources, "icon" | "noaa" | "meteo" | "dwd" | "meto" | "fcoo" | "fmi" | "yr" |          "sg">;
export type SGWeatherWavePeriod              = Pick<SGSources, "icon" | "noaa" | "meteo" |         "meto" | "fcoo" | "fmi" |                 "sg">;
export type SGWeatherWindWaveDirection       = Pick<SGSources, "icon" | "noaa" | "meteo" | "dwd" | "meto" |                                  "sg">;
export type SGWeatherWindWaveHeight          = Pick<SGSources, "icon" | "noaa" | "meteo" | "dwd" | "meto" |                                  "sg">;
export type SGWeatherWindWavePeriod          = Pick<SGSources, "icon" | "noaa" | "meteo" | "dwd" | "meto" |                                  "sg">;
export type SGWeatherWindDirection           = Pick<SGSources, "icon" | "noaa" |           "dwd" |                           "yr" | "smhi" | "sg">;
export type SGWeatherWindSpeed               = Pick<SGSources, "icon" | "noaa" |           "dwd" |                           "yr" | "smhi" | "sg">;