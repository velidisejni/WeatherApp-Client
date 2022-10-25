import { ITemperature } from "./Itemperature";
import { IWeather } from "./Iweather";

export interface IDailyForcast {
  clouds: {all: number};
  dt: number;
  dt_txt: string;
  main: ITemperature;
  pop: number;
  sys: {pod: string};
  visibility: number;
  weather: IWeather[];
  wind: {speed: number, deg: number, gust: 1.91};
}
