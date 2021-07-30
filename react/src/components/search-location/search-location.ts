export enum SearchLocationMenu {
  MAP = "map",
  DETAIL_LIST = "info_list",
}

export enum SearchBarCheckBoxOption {
  AVAILABILITY = "availability",
  HOSPITEL = "hospitel",
  FIELD_HOSPITAL = "field_hospital",
  COMMUNITY_ISOLATION = "community_isolation",
}

export enum SearchBarSelectOption {
  DISTANCE = "distance",
  TYPE = "type",
  LOCATION = "location",
  AREA = "area",
}

export const SEARCH_LOCATION_MENU = {
  [SearchLocationMenu.MAP]: "แผนที่",
  [SearchLocationMenu.DETAIL_LIST]: "รายชื่อ",
};

export const SEARCH_BAR_CHECK_BOX_OPTION = {
  [SearchBarCheckBoxOption.AVAILABILITY]: "เตียงว่าง",
  [SearchBarCheckBoxOption.HOSPITEL]: "โฮสพิเทล",
  [SearchBarCheckBoxOption.FIELD_HOSPITAL]: "โรงพยาบาลสนาม",
  [SearchBarCheckBoxOption.COMMUNITY_ISOLATION]: "ศูนย์พักคอย",
};

export const SEARCH_BAR_SELECT_OPTION = {
  [SearchBarSelectOption.DISTANCE]: "ระยะห่าง",
  [SearchBarSelectOption.TYPE]: "ประเภท",
  [SearchBarSelectOption.LOCATION]: "สถานที่",
  [SearchBarSelectOption.AREA]: "บริเวณ",
};
