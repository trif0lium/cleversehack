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
  >(`${API_URL}/hospitels`);

  const samples = sampleSize(
    hospitels,
    random(Number(0.25 * hospitels.length), Number(0.75 * hospitels.length))
  );

  const limit = pLimit(5);
  const requests = samples.map((s) =>
    limit(async () => {
      try {
        await axios.patch(`${API_URL}/hospitels/${s.code}`, {
          direction: ["INC", "DEC"][random(0, 1, false)],
          n: 1,
        });
      } catch (_) {}
    })
  );
  await Promise.all(requests);
})();
