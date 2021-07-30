import axios from "axios";
import { sampleSize } from "lodash";

const API_URL =
  "https://cleversehack-api-dot-everyday-development.et.r.appspot.com";

function randomInt(inclusiveMin: number, exclusiveMax: number): number {
  const min = Math.ceil(inclusiveMin);
  const max = Math.floor(exclusiveMax);
  return Math.floor(Math.random() * (max - min) + min);
}

(async () => {
  const { data: hospitels } = await axios.get<
    {
      code: string;
      maxCapacity: number;
      currentCapacity: number;
    }[]
  >(`${API_URL}/hospitels`);

  const samples = sampleSize(hospitels, randomInt(1, 6));
})();
