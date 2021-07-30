import { DateTime } from 'luxon';
import { useState, useEffect } from 'react';
import { useInterval } from './useInterval';

export function useRelativeTime(timestamp: number) {
  const [relativeTime, setRelativeTime] = useState<string>(
    DateTime.fromMillis(timestamp).toRelative({ locale: 'th-TH' }) ?? '',
  );

  useEffect(() => {
    setRelativeTime(
      DateTime.fromMillis(timestamp).toRelative({ locale: 'th-TH' }) ?? '',
    );
  }, [timestamp]);

  useInterval(() => {
    setRelativeTime(
      DateTime.fromMillis(timestamp).toRelative({ locale: 'th-TH' }) ?? '',
    );
  }, 5000);

  return { relativeTime };
}
