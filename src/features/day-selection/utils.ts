import dayjs from 'dayjs';

export const secondsToShortWeekday = (seconds: number): string =>
  dayjs(seconds * 1000).format('ddd');
