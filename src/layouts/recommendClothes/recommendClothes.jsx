import TextStrong from "../../components/text/textStrong.jsx";
import CardItem from "../../components/card/cardItem";
import BoxAccessory from "../../components/box/boxAccessory.jsx";
import { CLOTHES_IMAGE } from "../../utils/constant.js";
import * as SC from "./styled";

const RecommendClothes = ({ temp }) => {
  return (
    <SC.CardList>
      <TextStrong>오늘의 추천 룩</TextStrong>
      <SC.Clothes>
        <CardItem src={CLOTHES_IMAGE.OUTER} alt="외투 이미지" temp={temp} item="OUTER" />
        <SC.Line />
        <CardItem src={CLOTHES_IMAGE.TOP} alt="상의 이미지" item="TOP" />
        <SC.Line />
        <CardItem src={CLOTHES_IMAGE.BOTTOM} alt="하의 이미지" item="BOTTOM" />
      </SC.Clothes>
      <TextStrong>오늘의 날씨 팁</TextStrong>
      <SC.Accessory>
        <CardItem src={CLOTHES_IMAGE.MASK} alt="마스크 이미지" />
        <BoxAccessory item="MASK" />
      </SC.Accessory>
    </SC.CardList>
  );
};

export default RecommendClothes;
