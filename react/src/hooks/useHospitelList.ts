import { useMemo, useState } from 'react';
import { dataStore } from '../store/dataStore';
import { isEmpty, orderBy } from 'lodash';
import { usePosition } from 'use-position';
import { getDistance } from 'geolib';
import { searchStore } from '../store/searchStore';

export function useHospitelList() {
  const { latitude, longitude, error } = usePosition(true);

  const _hospitelList = useMemo(() => dataStore.hospitelList, [
    dataStore.hospitelList,
  ]);

  const filters = useMemo(() => searchStore.filters, []);
  const search = useMemo(() => searchStore.search, []);
  const sort = useMemo(() => searchStore.sort, []);

  const hospitelList = useMemo(() => {
    let list = _hospitelList.map((h) => {
      if (latitude && longitude) {
        h.relativeDistance = getDistance(
          { latitude: Number(latitude), longitude: Number(longitude) },
          { latitude: h.latitude, longitude: h.longitude },
        );
      } else {
        h.relativeDistance = undefined;
      }
      return h;
    });

    if (filters.length > 0) {
      if (filters.includes('ONLY_HOSPITEL')) {
        list = list.filter((l) => l.type === 'HOSPITEL');
      }

      if (filters.includes('ONLY_HOSPITAL')) {
        list = list.filter((l) => l.type === 'HOSPITAL');
      }

      if (filters.includes('ONLY_AVAILABLE')) {
        list = list.filter((l) => l.currentCapacity < l.maxCapacity);
      }
    }

    if (!isEmpty(search)) {
      list = list.filter((l) => l.name.includes(search));
      return list;
    }

    if (sort) {
      return orderBy(list, [sort.field], [sort.direction]);
    }

    return list;
  }, [_hospitelList, search, filters, sort, latitude, longitude]);

  return {
    hospitelList,
  };
}
