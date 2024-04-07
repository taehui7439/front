import React from 'react';
import RecommendClothes from '../../layouts/recommendClothes/recommendClothes';
import Weather from '../../components/weather/weather';

const MainPage = () => {
  const info = {
    성별: '남성',
    나이: '10대',
    체질: '평균',
    날씨: '봄',
    강수: false,
    미세먼지: true,
  };

  return (
    <>
      <Weather />
      <RecommendClothes info={info} />
    </>
  );
};

export default MainPage;
