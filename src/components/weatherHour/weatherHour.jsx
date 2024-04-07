import * as SC from './styled';
import WeatherBar from './weatherBar/weatherBar';
import WeatherImage from './weatherImage/weatherImage';
import WeatherTemp from './weatherTemp/weatherTemp';

const WeatherHour = () => {
  //온도, 하늘, 시간 정보
  return (
    <SC.WeatherHour>
      <WeatherTemp>13</WeatherTemp>
      <WeatherBar info={20} />
      <WeatherImage />
    </SC.WeatherHour>
  );
};

export default WeatherHour;
