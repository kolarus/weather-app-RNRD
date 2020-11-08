import {WEATHER_API_KEY} from '@env';

export const getWeather = async (city: string, countryCode: string, units: string) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${WEATHER_API_KEY}&units=${units}`,
    );

    const responseData = await response.json();

    if (responseData.cod !== 401 && !responseData.message) {
      return responseData;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
