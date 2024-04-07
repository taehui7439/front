import React, { useState, useEffect } from 'react';
import RecommendClothes from '../../layouts/recommendClothes/recommendClothes';
import WeatherHour from '../../components/weatherHour/weatherHour';
import { WeatherApi } from '../../apis/weatherApi';

const MainPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await WeatherApi('get');
      setWeather(data?.response.body.items.item);
    };
    fetchData();
  }, []);

  console.log(weather);

  return (
    <>
      <WeatherHour />
      {weather && <RecommendClothes weather={weather} />}
    </>
  );
};

export default MainPage;
