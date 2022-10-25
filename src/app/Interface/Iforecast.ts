import { Icity } from "./Icity";
import { IDailyForcast } from "./Idailyforecast";

export interface IForcast {
  city: Icity;
  cnt: number;
  cod: string;
  list: IDailyForcast[];
  message: number | string;
}
