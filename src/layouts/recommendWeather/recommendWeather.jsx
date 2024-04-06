import TextStrong from "../../components/text/textStrong.jsx";
import CardItem from "../../components/card/cardItem";
import { CLOTHES_IMAGE } from "../../utils/constant.js";
import * as SC from "./styled";

const RecommendWeather = () => {
  return (
    <SC.CardList>
      <TextStrong>오늘의 추천 룩</TextStrong>
      <SC.Clothes>
        <CardItem
          src={CLOTHES_IMAGE.OUTER}
          alt="외투 이미지"
          description="OUTER"
        />
        <CardItem src={CLOTHES_IMAGE.TOP} alt="상의 이미지" description="TOP" />
        <CardItem
          src={CLOTHES_IMAGE.BOTTOM}
          alt="하의 이미지"
          description="BOTTOM"
        />
      </SC.Clothes>
      <TextStrong>오늘의 추천 아이템</TextStrong>
      <SC.Accessory>
        <CardItem src={CLOTHES_IMAGE.MASK} alt="마스크 이미지" />
      </SC.Accessory>
    </SC.CardList>
  );
};

export default RecommendWeather;
