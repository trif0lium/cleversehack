import { useMemo, useState } from "react";
import { dataStore } from "../store/dataStore";
import { isEmpty, orderBy, sortBy } from "lodash";
import { usePosition } from "use-position";
import { getDistance } from "geolib";

export function useHospitelList() {
  const { latitude, longitude, error } = usePosition(true);

  const _hospitelList = useMemo(() => dataStore.hospitelList, [
    dataStore.hospitelList,
  ]);

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState<
    Array<"ONLY_AVAILABLE" | "ONLY_HOSPITEL" | "ONLY_HOSPITAL">
  >([]);

  const [sort, setSort] = useState<{
    field: string;
    direction: "ASC" | "DESC";
  } | null>(null);

  const hospitelList = useMemo(() => {
    let list = _hospitelList;

    if (filters.length > 0) {
      if (filters.includes("ONLY_HOSPITEL")) {
        list = list.filter((l) => l.type === "HOSPITEL");
      }

      if (filters.includes("ONLY_HOSPITAL")) {
        list = list.filter((l) => l.type === "HOSPITAL");
      }

      if (filters.includes("ONLY_AVAILABLE")) {
        list = list.filter((l) => l.currentCapacity < l.maxCapacity);
      }
    }

    if (!isEmpty(search)) {
      list = list.filter((l) => l.name.includes(search));
      return list;
    }

    if (sort) {
      const direction = sort.direction === "ASC" ? "asc" : "desc";
      return orderBy(list, [sort.field], [direction]);
    }

    return list;
  }, [_hospitelList, search, filters, sort]);

  return {
    hospitelList,
    search,
    setSearch,
    filters,
    setFilters,
    sort,
    setSort,
  };
}
