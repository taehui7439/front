import React, { useState, useEffect } from 'react';
import RecommendClothes from '../../layouts/recommendClothes/recommendClothes';
import Weather from '../../components/weather/weather';
//import WeatherTime from '../../layouts/weatherTime/weatherTime';
import { WeatherApi } from '../../apis/weatherApi';

const MainPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await WeatherApi();
      setWeather(data);
      //setWeather(data?.response.body.items.item);
    };
    fetchData();
  }, []);

  console.log(weather);

  return (
    <>
      <Weather />
      {/*weather && <WeatherTime weather={weather} />*/}
      {weather && <RecommendClothes weather={weather} />}
    </>
  );
};

export default MainPage;
