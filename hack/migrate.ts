import csv from "csv-parser";
import fs from "fs";
const results = [];

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

fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
  });
