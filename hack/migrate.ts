import csv from "csv-parser";
import fs from "fs";
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

fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
  });
