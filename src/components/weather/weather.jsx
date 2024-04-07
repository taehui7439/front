import React from 'react';
import * as SC from './weatherStyle';

const Weather = () => {
  return (
    <SC.WeatherContainer>
      <SC.WeatherGraphic>
        <img src="cloudy.png" alt="구름 많음" />
      </SC.WeatherGraphic>
    </SC.WeatherContainer>
  );
};

export default Weather;
