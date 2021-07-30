import csv from "csv-parser";
import fs from "fs";
import arg from "arg";
import axios from "axios";
import pLimit from "p-limit";
import {
  forEach,
  isEmpty,
  isString,
  mapValues,
  trim,
  trimEnd,
  trimStart,
} from "lodash";

const args = arg({ "--csv-file": String });
if (!args["--csv-file"])
  throw new Error("missing required argument: --csv-file");

const API_URL =
  "https://cleversehack-api-dot-everyday-development.et.r.appspot.com";
const results: Input[] = [];

interface Input {
  name: string;
  maxCapacity: number;
  hospital: string;
  location: string;
  address: string;
  phoneNumber?: string;
  website?: string;
  G: boolean;
  Y: boolean;
  R: boolean;
}

interface Output {
  name: string;
  maxCapacity: number;
  currentCapacity: number;
  hospital: string;
  latitude: number;
  longitude: number;
  address: string;
  phoneNumber?: string;
  website?: string;
  type: "HOSPITEL" | "HOSPITAL";
  tags: string[];
}

function randomInt(inclusiveMin: number, exclusiveMax: number): number {
  const min = Math.ceil(inclusiveMin);
  const max = Math.floor(exclusiveMax);
  return Math.floor(Math.random() * (max - min) + min);
}

fs.createReadStream(args["--csv-file"]!)
  .pipe(csv())
  .on("data", (data) => !isEmpty(data.name) && results.push(data))
  .on("end", async () => {
    const _results = results.map((result) => {
      const _result = mapValues(result, (value) => {
        if (isString(value)) value = trim(value);
        return value;
      });

      return _result;
    });

    const out: Output[] = _results.map((result) => {
      const location = result.location as string;
      const [latitude, longitude] = trimEnd(trimStart(location, "("), ")")
        .split(",")
        .map((a) => Number(trim(a)));

      return {
        name: result.name as string,
        maxCapacity: Number(result.maxCapacity),
        currentCapacity: randomInt(0, Number(result.maxCapacity)),
        hospital: result.hospital as string,
        latitude,
        longitude,
        address: result.address as string,
        phoneNumber: result.phoneNumber as string,
        website: result.website as string,
        type: "HOSPITEL",
        tags: [
          result.R === "TRUE" && "R",
          result.Y === "TRUE" && "Y",
          result.G === "TRUE" && "G",
        ].filter((a) => a) as string[],
      };
    });

    const limit = pLimit(5);
    const requests = out.map((data) => {
      return limit(() => axios.post(`${API_URL}/hospitel`, data));
    });

    await Promise.all(requests);

    console.log(out);
  });
