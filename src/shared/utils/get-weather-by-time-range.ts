import {WeatherByTime} from 'src/shared/api/weather/types';

const DEFAULT_ITEMS_QUANTITY = 8;

const getWeatherItemsByTimeRange = (
  timRange: {from: number; to: number},
  weatherItems: Array<WeatherByTime>,
) => {
  const weatherItemsInRange = weatherItems.filter((weatherItem) => {
    return weatherItem.dt >= timRange.from && weatherItem.dt <= timRange.to;
  });
  if (weatherItemsInRange.length === DEFAULT_ITEMS_QUANTITY) {
    return weatherItemsInRange;
  } else if (weatherItemsInRange.length === 0) {
    return weatherItems.slice(0, DEFAULT_ITEMS_QUANTITY);
  } else {
    const indexOfLastItemInRange = weatherItems.findIndex((weatherItem) => {
      return weatherItemsInRange[weatherItemsInRange.length - 1].dt === weatherItem.dt;
    });
    const numberOfItemsToAdd = DEFAULT_ITEMS_QUANTITY - weatherItemsInRange.length;
    const itemsToAdd = weatherItems.slice(
      indexOfLastItemInRange + 1,
      indexOfLastItemInRange + numberOfItemsToAdd,
    );

    return [...weatherItemsInRange, ...itemsToAdd];
  }
};

export default getWeatherItemsByTimeRange;
