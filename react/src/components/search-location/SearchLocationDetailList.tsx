import React, { useState } from "react";
import { DetailList } from "../styles/DetailListStyles";
import {
  FacilityType,
  LocationType,
  MyLocationType,
  MOCK_DATA,
  TAG_COLOR_MAPPER,
} from "../const";
import { SearchLocationCard } from "./SearchLocationCard";

export const SearchLocationDetailList = () => {
  return (
    <DetailList>
      <div className="location-detail-list pt-5 md:grid md:grid-cols-2 lg:grid-cols-3 px-5">
        {/* {MOCK_DATA.map((location) => (
          <SearchLocationCard selectedLocation={location} />
        ))} */}
        {MOCK_DATA.filter((val) => {})}
      </div>
    </DetailList>
  );
};
