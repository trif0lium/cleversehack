import axios from "axios";
import { random, sampleSize } from "lodash";
import pLimit from "p-limit";

const API_URL =
  "https://cleversehack-api-dot-everyday-development.et.r.appspot.com";

(async () => {
  const { data: hospitels } = await axios.get<
    {
      code: string;
      maxCapacity: number;
      currentCapacity: number;
    }[]
  >(`${API_URL}/hospitel`);

  while (true) {
    const samples = sampleSize(
      hospitels,
      random(Number(1), Number(0.5 * hospitels.length))
    );

    const limit = pLimit(5);
    const requests = samples.map((s) =>
      limit(async () => {
        try {
          await axios.patch(`${API_URL}/hospitel/${s.code}`, {
            direction: ["INC", "DEC"][random(0, 1, false)],
            n: random(1, 5, false),
          });
        } catch (_) {}
      })
    );
    await Promise.all(requests);
  }
})();
