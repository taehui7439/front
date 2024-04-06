import * as SC from "./styled";

const CardItem = ({ src, alt, description = "" }) => {
  return (
    <SC.Card>
      <SC.Item src={src} alt={alt} />
      {description && <SC.Description>{description}</SC.Description>}
    </SC.Card>
  );
};

export default CardItem;
