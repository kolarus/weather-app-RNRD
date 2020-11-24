import {WEATHER_API_KEY, WEATHER_API_URL} from '@env';

export const getWeather = async (city: string, countryCode: string, units: string) => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/forecast?q=${city},${countryCode}&appid=${WEATHER_API_KEY}&units=${units}`,
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
