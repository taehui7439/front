import TextP from "../text/textP";
import { ACCESSORY_TEXT } from "../../utils/constant";
import * as SC from "./styled";

const BoxAccessory = ({ item, info }) => {
  return (
    <SC.Box>
      <TextP>{ACCESSORY_TEXT[item].제목}</TextP>
      <TextP>{ACCESSORY_TEXT[item].나이[info.나이]}</TextP>
      <TextP>{ACCESSORY_TEXT[item].체질[info.체질]}</TextP>
    </SC.Box>
  );
};

export default BoxAccessory;
