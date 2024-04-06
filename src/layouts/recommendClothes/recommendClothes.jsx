import TextStrong from "../../components/text/textStrong.jsx";
import TextP from '../../components/text/textP.jsx';
import CardItem from "../../components/card/cardItem";
import BoxAccessory from "../../components/box/boxAccessory.jsx";
import { CLOTHES_IMAGE } from "../../utils/constant.js";
import * as SC from "./styled";

const RecommendClothes = ({ info }) => {
  return (
    <SC.CardList>
      <TextStrong>오늘의 추천 룩</TextStrong>
      <TextP>{'더보기 >'}</TextP>
      <SC.Clothes>
        {info.날씨 === '여름' ? null
        : (  
          <>  
            <CardItem src={CLOTHES_IMAGE[info.성별].OUTER} alt="외투 이미지" info={info} item="OUTER" />
            <SC.Line />
          </>
        )}
        <CardItem src={CLOTHES_IMAGE[info.성별].TOP} alt="상의 이미지" info={info} item="TOP" />
        <SC.Line />
        <CardItem src={CLOTHES_IMAGE[info.성별].BOTTOM} alt="하의 이미지" info={info} item="BOTTOM" />
      </SC.Clothes>
      <TextStrong>오늘의 날씨 팁</TextStrong>
        <SC.Tip>
        {info.강수 &&
            <SC.Accessory>
              <CardItem src={CLOTHES_IMAGE[info.성별].UMBRELLA} info={info} alt="우산 이미지" />
              <BoxAccessory item="UMBRELLA" info={info} />
            </SC.Accessory>
          }
          {info.미세먼지 &&
            <SC.Accessory>
              <CardItem src={CLOTHES_IMAGE[info.성별].MASK} info={info} alt="마스크 이미지" />
              <BoxAccessory item="MASK" info={info} />
            </SC.Accessory>
          }
        </SC.Tip>
    </SC.CardList>
  );
};

export default RecommendClothes;
