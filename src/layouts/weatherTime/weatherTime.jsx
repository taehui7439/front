import WeatherHour from '../../components/weatherHour/weatherHour';
import * as SC from './styled';

const WeatherTime = ({ weather }) => {
  //테스트 중 ...
  const weatherCurrent = [...weather].filter((item, index) => {
    return index % 10 === 0;
  });

  console.log(weatherCurrent);

  return (
    <SC.WeatherTime>
      {weatherCurrent.map((item, index) => (
        <WeatherHour key={index} info={item.fcstValue} />
      ))}
    </SC.WeatherTime>
  );
};

export default WeatherTime;
