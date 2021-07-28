export enum FacilityType {
  HOSPITEL = "HOSPITEL",
  HOSPITAL = "HOSPITAL",
}

export enum Tag {
  G = "G",
  Y = "Y",
  R = "R",
}

export type LocationType = {
  id: number;
  code: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  maxCapacity: number;
  currentCapacity: number;
  additionalDetail?: string;
  hospital?: string;
  phoneNumber?: string;
  website?: string;
  googleMapsURL?: string;
  tags: Tag[];
  type: FacilityType;
  createdAt?: Date;
  updatedAt?: Date;
};

export enum MenuIcon {
  HOSPITEL = "hospitel",
  WHERE_TO_TEST = "test",
  SELF_ASSESSMENT = "assessment",
}

export const MOCK_DATA: LocationType[] = [
  {
    id: 1,
    code: "hos-pi-tal",
    name: "รพ.สนาม สถาบันบำราศนราดูร",
    address: "หมู่ที่ 4 ตําบล 38, ถ. ติวานนท์ อำเภอเมืองนนทบุรี นนทบุรี 11000",
    latitude: 13.8537638,
    longitude: 100.5227505,
    maxCapacity: 60,
    currentCapacity: 60,
    // additionalDetail?: string,
    // hospital?: string,
    phoneNumber: "02 951 1170",
    website: "bamras.ddc.moph.go.th",
    googleMapsURL: "",
    tags: [Tag.R, Tag.Y],
    type: FacilityType.HOSPITAL,
    // createdAt: ,
    // updatedAt:
  },
  {
    id: 2,
    code: "hos-pi-tel",
    name: "รร. สยาม แอ็ท สยาม",
    address:
      "ตรงข้าม National Stadium 865 ถนน พระรามที่ ๑ แขวง วังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330",
    latitude: 13.747628887719777,
    longitude: 100.52697219724479,
    maxCapacity: 300,
    currentCapacity: 300,
    // additionalDetail?: string,
    hospital: "รพ. ธนบุรี",
    phoneNumber: "02 217 3000",
    website: "https://www.facebook.com/siamatsiambangkok/",
    googleMapsURL: "",
    tags: [Tag.G, Tag.Y],
    type: FacilityType.HOSPITEL,
    // createdAt: ,
    // updatedAt:
  },
];
