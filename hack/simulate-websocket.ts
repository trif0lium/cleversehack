import axios from "axios";

const API_URL =
  "https://cleversehack-api-dot-everyday-development.et.r.appspot.com";

(async () => {
  const { data: hospitels } = await axios.get<{
    code: string;
    maxCapacity: number;
    currentCapacity: number;
  }>(`${API_URL}/hospitels`);
})();
