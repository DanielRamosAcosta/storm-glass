import { StormGlass } from "https://raw.githubusercontent.com/DanielRamosAcosta/storm-glass/main/mod.ts";

const apiKey = Deno.env.get("STORM_GLASS_API_KEY");

if (!apiKey) {
  throw new Error("STORM_GLASS_API_KEY env variables is required");
}

const stormGlass = StormGlass({ apiKey });

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

console.log("waveHeight", result.hours[0].waveHeight.sg);
console.log("windSpeed", result.hours[0].windSpeed.sg);
console.log("humidity", result.hours[0].humidity.sg);
