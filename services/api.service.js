import https from "https";
import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error(
      "Не задан ключ API, задайте его через команду -t [API_KEY]"
    );
  }
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  return data;

  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
  //   const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  //   url.searchParams.append("q", city);
  //   url.searchParams.append("appid", token);
  //   url.searchParams.append("lang", "ru");
  //   url.searchParams.append("units", "metric");

  //   https.get(url, (response) => {
  //     let res = "";
  //     response.on("data", (chunk) => {
  //       res += chunk;
  //     });
  //     response.on("end", () => {
  //       console.log(res);
  //     });
  //   });
};

export { getWeather };
