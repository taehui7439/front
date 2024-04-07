import * as SC from './styled';
import { WEATHER_IMAGE } from '../../../utils/constant';

const WeatherImage = () => {
  return (
    <SC.WeatherImage
      src={WEATHER_IMAGE['맑음']['낮']}
      alt={`${'맑음'}${'낮'} 이미지`}
      width={30}
      height={30}
    />
  );
};

export default WeatherImage;
