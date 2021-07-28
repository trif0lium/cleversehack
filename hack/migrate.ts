import csv from "csv-parser";
import fs from "fs";
import arg from "arg";
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
  .on("end", () => {
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
        name: result.name,
        maxCapacity: Number(result.maxCapacity),
        currentCapacity: randomInt(0, Number(result.maxCapacity)),
        hospital: result.hospital,
        latitude,
        longitude,
        address: result.address,
        phoneNumber: result.phoneNumber,
        website: result.website,
        tags: [
          result.R === "TRUE" && "R",
          result.Y === "TRUE" && "Y",
          result.G === "TRUE" && "G",
        ],
      };
    });
    console.log(_results);
  });
