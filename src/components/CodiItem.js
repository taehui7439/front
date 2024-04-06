import * as SC from "./magostyle.js";

const Click = () => {
    alert('준비중입니다.');
}

const CodiItem = ({img}) => {
    return(
        <SC.Codicard onClick={Click}>
            <SC.ImgSize src={img}/>
        </SC.Codicard>
    )
}

export default CodiItem;