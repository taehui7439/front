import axiosInstance from './axiosInstance';

export const WeatherApi = async (type) => {
  try {
    const response = await axiosInstance[type]();
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
