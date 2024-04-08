import React, { useState, useEffect } from 'react';
import RecommendClothes from '../../layouts/recommendClothes/recommendClothes';
import Weather from '../../components/weather/weather';
//import WeatherTime from '../../layouts/weatherTime/weatherTime';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import axios from 'axios';

const MainPage = () => {
  const [weather, setWeather] = useState(null);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('weather-infomation', {
          keyword: '서울시',
        });
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(weather);

  return (
    <>
      <Weather isModal={isModal} setIsModal={setIsModal} />
      {/*weather && <WeatherTime weather={weather} />*/}
      {weather && <RecommendClothes weather={weather} />}
      <BottomSheet isModal={isModal} setIsModal={setIsModal}></BottomSheet>
    </>
  );
};

export default MainPage;
