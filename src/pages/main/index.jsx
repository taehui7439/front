import React, { useState, useEffect } from 'react';
import RecommendClothes from '../../layouts/recommendClothes/recommendClothes';
import WeatherTime from '../../layouts/weatherTime/weatherTime';
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

  return (
    <>
      {weather && <WeatherTime weather={weather} />}
      {weather && <RecommendClothes weather={weather} />}

    </>
  );
};

export default MainPage;
