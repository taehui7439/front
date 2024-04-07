import * as SC from './styled';
import WeatherBar from './weatherBar/weatherBar';
import WeatherImage from './weatherImage/weatherImage';
import WeatherTemp from './weatherTemp/weatherTemp';

const WeatherHour = ({ info }) => {
  //온도, 하늘, 시간 정보 props로 해야됨
  //console.log(item);
  return (
    <SC.WeatherHour>
      <WeatherTemp>{info}</WeatherTemp>
      <WeatherBar info={info} />
      <WeatherImage />
    </SC.WeatherHour>
  );
};

export default WeatherHour;
