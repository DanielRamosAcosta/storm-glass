import { expect } from "expect";
import { sandbox } from "mock_fetch";
import { StormGlass } from "../mod.ts";
import { weatherForPointResponse } from "./fixtures/weatherForPointResponse.ts";
import { weatherForPointResponseParamsError } from "./fixtures/weatherForPointResponseParamsError.ts";
import { weatherForPointResponseApiKeyError } from "./fixtures/weatherForPointResponseApiKeyError.ts";

Deno.test("weatherForPoint returns the data", async () => {
  const mockFetch = sandbox();
  mockFetch.mock(
    "GET@/v2/weather/point",
    () => new Response(JSON.stringify(weatherForPointResponse)),
  );
  const stormGlass = StormGlass({ client: mockFetch.fetch, apiKey: "" });

  const result = await stormGlass.weatherForPoint({
    point: {
      lat: 38.96609,
      lng: 26.06372,
    },
    params: [
      "waveHeight",
      "windSpeed",
      "humidity",
    ],
    sources: ["sg"],
  });

  expect(typeof result.hours[0].waveHeight.sg).toEqual("number");
});

Deno.test("weatherForPoint throws an error if no params provided", async () => {
  const mockFetch = sandbox();
  mockFetch.mock(
    "GET@/v2/weather/point",
    () => new Response(JSON.stringify(weatherForPointResponseParamsError)),
  );
  const stormGlass = StormGlass({ client: mockFetch.fetch, apiKey: "" });

  const error = await stormGlass.weatherForPoint({
    point: {
      lat: 38.96609,
      lng: 26.06372,
    },
    params: [],
    sources: ["sg"],
  }).catch((error) => error);

  await expect(error.message).toEqual(
    "The provided params are empty or not valid",
  );
});

Deno.test("weatherForPoint throws an error if no API key provided", async () => {
  const mockFetch = sandbox();
  mockFetch.mock(
    "GET@/v2/weather/point",
    () => new Response(JSON.stringify(weatherForPointResponseApiKeyError)),
  );
  const stormGlass = StormGlass({ client: mockFetch.fetch, apiKey: "" });

  const error = await stormGlass.weatherForPoint({
    point: {
      lat: 38.96609,
      lng: 26.06372,
    },
    params: [
      "waveHeight",
    ],
    sources: ["sg"],
  }).catch((error) => error);

  await expect(error.message).toEqual("API key is invalid");
});
