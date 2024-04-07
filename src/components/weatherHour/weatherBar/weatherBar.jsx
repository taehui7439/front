import * as SC from './styled';
const WeatherBar = ({ info }) => {
  //온도 평균을 계산한 뒤에 적용하면 될듯 ??
  return (
    <SC.WeatherBarBox>
      <SC.WeatherBar temp={info} />
    </SC.WeatherBarBox>
  );
};

export default WeatherBar;
