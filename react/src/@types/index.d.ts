interface Hospitel {
  code: string;
  tags: Array<"G" | "Y" | "R">;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  maxCapacity: number;
  currentCapacity: number;
  additionalDetail?: string;
  hospital: string;
  phoneNumber?: string;
  website?: string;
  googleMapsURL?: string;
  type: "HOSPITEL" | "HOSPITAL";
  updatedAt: string;
}
