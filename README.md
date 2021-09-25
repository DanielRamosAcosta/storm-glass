# Storm Glass Deno Client

Client library for Storm Glass Marine Weather.

High-resolution weather forecasts & historical data from the world’s most
trusted meteorological institutions in one single API

## Demo

```bash
STORM_GLASS_API_KEY='<your-api-key>' deno run \
  --allow-net=api.stormglass.io \
  --allow-env=STORM_GLASS_API_KEY \
  https://raw.githubusercontent.com/DanielRamosAcosta/storm-glass/main/example/get-weather.ts
```

## Usage

```js
import { StormGlass } from "https://raw.githubusercontent.com/DanielRamosAcosta/storm-glass/main/mod.ts";

const stormGlass = StormGlass({ apiKey: "<your-api-key>" });

const result = await stormGlass.weatherForPoint({
  point: {
    lat: 38.96609,
    lng: 26.06372,
  },
  params: [
    "waveHeight",
  ],
  sources: ["sg"],
});

console.log("waveHeight", result.hours[0].waveHeight.sg);
```
