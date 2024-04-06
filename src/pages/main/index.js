import React from 'react';
import RecommendClothes from '../../layouts/recommendClothes/recommendClothes';

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
      <RecommendClothes info={info} />
    </>
  );
};

export default MainPage;
