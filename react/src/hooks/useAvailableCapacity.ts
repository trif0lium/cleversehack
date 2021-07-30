import { useMemo } from 'react';

export function useAvailableCapacity(
  currentCapacity: number,
  maxCapacity: number,
) {
  const availableCapacity = useMemo(
    () => maxCapacity - currentCapacity,
    [currentCapacity, maxCapacity],
  );

  const availableCapacityPercent = useMemo(
    () => (availableCapacity * 100) / maxCapacity,
    [availableCapacity],
  );

  return { availableCapacity, availableCapacityPercent };
}
