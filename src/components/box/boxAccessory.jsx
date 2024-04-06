import TextP from "../text/textP";
import { ACCESSORY_TEXT } from "../../utils/constant";
import * as SC from "./styled";

const BoxAccessory = ({ item }) => {
  return (
    <SC.Box>
      <TextP>{ACCESSORY_TEXT[item].first}</TextP>
      <TextP>{ACCESSORY_TEXT[item].second}</TextP>
    </SC.Box>
  );
};

export default BoxAccessory;
