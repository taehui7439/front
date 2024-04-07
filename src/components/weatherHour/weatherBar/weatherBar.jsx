import * as SC from './styled';
const WeatherBar = ({ info }) => {
  //온도 평균을 계산한 뒤에 적용하면 될듯 ??
  console.log(info);
  return (
    <SC.WeatherBarBox>
      <div></div>
      <SC.WeatherBar temp={0} />
    </SC.WeatherBarBox>
  );
};

export default WeatherBar;
