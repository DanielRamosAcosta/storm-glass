import {
  SGWeatherAirTemperature,
  SGWeatherAll,
  SGWeatherCloudCover,
  SGWeatherCurrentDirection,
  SGWeatherCurrentSpeed,
  SGWeatherGust,
  SGWeatherHumidity,
  SGWeatherIceCover,
  SGWeatherPrecipitation,
  SGWeatherPressure,
  SGWeatherSeaLevel,
  SGWeatherSecondarySwellDirection,
  SGWeatherSecondarySwellHeight,
  SGWeatherSecondarySwellPeriod,
  SGWeatherSnowDepth,
  SGWeatherSwellDirection,
  SGWeatherSwellHeight,
  SGWeatherSwellPeriod,
  SGWeatherVisibility,
  SGWeatherWaterTemperature,
  SGWeatherWaveDirection,
  SGWeatherWaveHeight,
  SGWeatherWavePeriod,
  SGWeatherWindDirection,
  SGWeatherWindSpeed,
  SGWeatherWindWaveDirection,
  SGWeatherWindWaveHeight,
  SGWeatherWindWavePeriod,
} from "./SGWeatherSources.ts";

type PickBoth<T, U> = Pick<T, U & keyof T>;

export type SGWeather<T extends keyof SGWeatherAll> = {
  /**
   * Timestamp in UTC
   */
  time: Date;
  /**
   * Air temperature in degrees celsius
   */
  airTemperature: PickBoth<SGWeatherAirTemperature, T>;
  /**
   * Air temperature at 80m above sea level in degrees celsius
   */
  airTemperature80m: PickBoth<SGWeatherAirTemperature, T>;
  /**
   * Air temperature at 100m above sea level in degrees celsius
   */
  airTemperature100m: PickBoth<SGWeatherAirTemperature, T>;
  /**
   * Air temperature at 1000hpa in degrees celsius
   */
  airTemperature1000hpa: PickBoth<SGWeatherAirTemperature, T>;
  /**
   * Air temperature at 800hpa in degrees celsius
   */
  airTemperature800hpa: PickBoth<SGWeatherAirTemperature, T>;
  /**
   * Air temperature at 500hpa in degrees celsius
   */
  airTemperature500hpa: PickBoth<SGWeatherAirTemperature, T>;
  /**
   * Air temperature at 200hpa in degrees celsius
   */
  airTemperature200hpa: PickBoth<SGWeatherAirTemperature, T>;
  /**
   * Air pressure in hPa
   */
  pressure: PickBoth<SGWeatherPressure, T>;
  /**
   * Total cloud coverage in percent
   */
  cloudCover: PickBoth<SGWeatherCloudCover, T>;
  /**
   * Direction of current. 0° indicates current coming from north
   */
  currentDirection: PickBoth<SGWeatherCurrentDirection, T>;
  /**
   * Speed of current in meters per second
   */
  currentSpeed: PickBoth<SGWeatherCurrentSpeed, T>;
  /**
   * Wind gust in meters per second
   */
  gust: PickBoth<SGWeatherGust, T>;
  /**
   * Relative humidity in percent
   */
  humidity: PickBoth<SGWeatherHumidity, T>;
  /**
   * Proportion, 0-1
   */
  iceCover: PickBoth<SGWeatherIceCover, T>;
  /**
   * Mean precipitation in kg/m²/h = mm/h
   */
  precipitation: PickBoth<SGWeatherPrecipitation, T>;
  /**
   * Depth of snow in meters
   */
  snowDepth: PickBoth<SGWeatherSnowDepth, T>;
  /**
   * Sea level relative to MSL
   */
  seaLevel: PickBoth<SGWeatherSeaLevel, T>;
  /**
   * Direction of swell waves. 0° indicates swell coming from north
   */
  swellDirection: PickBoth<SGWeatherSwellDirection, T>;
  /**
   * Height of swell waves in meters
   */
  swellHeight: PickBoth<SGWeatherSwellHeight, T>;
  /**
   * Period of swell waves in seconds
   */
  swellPeriod: PickBoth<SGWeatherSwellPeriod, T>;
  /**
   * Direction of secondary swell waves. 0° indicates swell coming from north
   */
  secondarySwellPeriod: PickBoth<SGWeatherSecondarySwellPeriod, T>;
  /**
   * Height of secondary swell waves in meters
   */
  secondarySwellDirection: PickBoth<SGWeatherSecondarySwellDirection, T>;
  /**
   * Period of secondary swell waves in seconds
   */
  secondarySwellHeight: PickBoth<SGWeatherSecondarySwellHeight, T>;
  /**
   * Horizontal visibility in km
   */
  visibility: PickBoth<SGWeatherVisibility, T>;
  /**
   * Water temperature in degrees celsius
   */
  waterTemperature: PickBoth<SGWeatherWaterTemperature, T>;
  /**
   * Direction of combined wind and swell waves. 0° indicates waves coming from north
   */
  waveDirection: PickBoth<SGWeatherWaveDirection, T>;
  /**
   * Significant Height of combined wind and swell waves in meters
   */
  waveHeight: PickBoth<SGWeatherWaveHeight, T>;
  /**
   * Period of combined wind and swell waves in seconds
   */
  wavePeriod: PickBoth<SGWeatherWavePeriod, T>;
  /**
   * Direction of wind waves. 0° indicates waves coming from north
   */
  windWaveDirection: PickBoth<SGWeatherWindWaveDirection, T>;
  /**
   * Height of wind waves in meters
   */
  windWaveHeight: PickBoth<SGWeatherWindWaveHeight, T>;
  /**
   * Period of wind waves in seconds
   */
  windWavePeriod: PickBoth<SGWeatherWindWavePeriod, T>;
  /**
   * Direction of wind at 10m above sea level. 0° indicates wind coming from north
   */
  windDirection: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 20m above sea level. 0° indicates wind coming from north
   */
  windDirection20m: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 30m above sea level. 0° indicates wind coming from north
   */
  windDirection30m: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 40m above sea level. 0° indicates wind coming from north
   */
  windDirection40m: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 50m above sea level. 0° indicates wind coming from north
   */
  windDirection50m: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 80m above sea level. 0° indicates wind coming from north
   */
  windDirection80m: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 100m above sea level. 0° indicates wind coming from north
   */
  windDirection100m: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 1000hpa. 0° indicates wind coming from north
   */
  windDirection1000hpa: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 800hpa. 0° indicates wind coming from north
   */
  windDirection800hpa: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 500hpa. 0° indicates wind coming from north
   */
  windDirection500hpa: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Direction of wind at 200hpa. 0° indicates wind coming from north
   */
  windDirection200hpa: PickBoth<SGWeatherWindDirection, T>;
  /**
   * Speed of wind at 10m above sea level in meters per second.
   */
  windSpeed: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 20m above sea level in meters per second.
   */
  windSpeed20m: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 30m above sea level in meters per second.
   */
  windSpeed30m: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 40m above sea level in meters per second.
   */
  windSpeed40m: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 50m above sea level in meters per second.
   */
  windSpeed50m: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 80m above sea level in meters per second.
   */
  windSpeed80m: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 100m above sea level in meters per second.
   */
  windSpeed100m: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 1000hpa in meters per second.
   */
  windSpeed1000hpa: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 800hpa in meters per second.
   */
  windSpeed800hpa: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 500hpa in meters per second.
   */
  windSpeed500hpa: PickBoth<SGWeatherWindSpeed, T>;
  /**
   * Speed of wind at 200hpa in meters per second.
   */
  windSpeed200hpa: PickBoth<SGWeatherWindSpeed, T>;
};
