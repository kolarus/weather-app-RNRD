import {WEATHER_API_KEY} from '@env';

export const getWeather = async (
  city: string = 'Kharkiv',
  countryCode: string = 'ua',
  units: string = 'metric',
) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${WEATHER_API_KEY}&units=${units}`,
    );

    return await response.json();
  } catch (e) {
    return null;
  }
};
