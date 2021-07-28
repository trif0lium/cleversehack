export class Coordinate {
  latitude: number;
  longitude: number;
}

export class GetHospitelDTO {
  from: Coordinate;
  radius: number;
}

export class CreateHospitelDTO {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  maxCapacity: number;
  currentCapacity: number;
  hospital?: string;
  phoneNumber?: string;
  website?: string;
  googleMapsURL?: string;
  tags?: string[];
}
