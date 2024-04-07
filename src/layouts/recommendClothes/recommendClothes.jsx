import TextStrong from '../../components/text/textStrong.jsx';
import TextLink from '../../components/text/textLink.jsx';
import CardItem from '../../components/card/cardItem';
import BoxAccessory from '../../components/box/boxAccessory.jsx';
import { CLOTHES_IMAGE } from '../../utils/constant.js';
import * as SC from './styled';

const RecommendClothes = ({ weather }) => {
  const weatherCurrent = [...weather].filter((item, index) => {
    return index % 6 === 0;
  });

  let season;

  if (weatherCurrent?.[4].fcstValue >= 22) {
    season = '여름';
  } else if (weatherCurrent?.[4].fcstValue >= 16) {
    season = '봄';
  } else if (weatherCurrent?.[4].fcstValue >= 11) {
    season = '가을';
  } else {
    season = '겨울';
  }

  const info = {
    성별: '남성',
    나이: '10대',
    체질: '평균',
    날씨: season,
    온도: weatherCurrent[4].fcstValue,
    강수: weatherCurrent[2].fcstValue,
    미세먼지: true,
  };

  return (
    <SC.CardList>
      <SC.Recommend>
        <TextStrong>오늘의 추천 룩</TextStrong>
        <TextLink to="/recommend">{'더보기 >'}</TextLink>
      </SC.Recommend>
      <SC.Clothes>
        {info.날씨 === '여름' ? null : (
          <>
            <CardItem
              src={CLOTHES_IMAGE[info.성별].OUTER}
              alt="외투 이미지"
              info={info}
              item="OUTER"
            />
            <SC.Line />
          </>
        )}
        <CardItem
          src={CLOTHES_IMAGE[info.성별].TOP}
          alt="상의 이미지"
          info={info}
          item="TOP"
        />
        <SC.Line />
        <CardItem
          src={CLOTHES_IMAGE[info.성별].BOTTOM}
          alt="하의 이미지"
          info={info}
          item="BOTTOM"
        />
      </SC.Clothes>
      <TextStrong>오늘의 날씨 팁</TextStrong>
      <SC.Tip>
        {info.강수 !== '강수없음' && (
          <SC.Accessory>
            <CardItem
              src={CLOTHES_IMAGE[info.성별].UMBRELLA}
              info={info}
              alt="우산 이미지"
            />
            <BoxAccessory item="UMBRELLA" info={info} />
          </SC.Accessory>
        )}
        {info.미세먼지 && (
          <SC.Accessory>
            <CardItem
              src={CLOTHES_IMAGE[info.성별].MASK}
              info={info}
              alt="마스크 이미지"
            />
            <BoxAccessory item="MASK" info={info} />
          </SC.Accessory>
        )}
      </SC.Tip>
    </SC.CardList>
  );
};

export default RecommendClothes;
