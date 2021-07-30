import { DateTime } from 'luxon';
import { useState } from 'react';
import { useInterval } from './useInterval';

export function useRelativeTime(timestamp: number) {
  const [relativeTime, setRelativeTime] = useState<string>(
    DateTime.fromMillis(timestamp).toRelative({ locale: 'th-TH' }) ?? '',
  );

  useInterval(() => {
    setRelativeTime(
      DateTime.fromMillis(timestamp).toRelative({ locale: 'th-TH' }) ?? '',
    );
  }, 5000);

  return { relativeTime };
}
