import csv from "csv-parser";
import fs from "fs";
import arg from "arg";
import { forEach, isEmpty, isString, trim } from "lodash";

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

fs.createReadStream(args["--csv-file"]!)
  .pipe(csv())
  .on("data", (data) => !isEmpty(data.name) && results.push(data))
  .on("end", () => {
    const _results = results.map((result) => {
      const _result = forEach(result, (value, _) => {
        if (isString(value)) value = trim(value);
      });

      return _result;
    });
    console.log(_results);
  });
