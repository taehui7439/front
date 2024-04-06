import * as SC from "./magostyle.js";
import styled from "styled-components";
import CodiItem from "./CodiItem.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dummyImge = [
    {
        id : 0,
        img : './images/codi_top.png',
    },
    {
        id : 1,
        img : './images/codi_top.png',
    },
    {
        id : 2,
        img : './images/codi_top.png',
    },
    {
        id : 3,
        img : './images/codi_top.png',
    },
    {
        id : 4,
        img : './images/codi_top.png',
    },
];

const dummyImagesmall = [
    {
        id : 0,
        img : './images/codi_bottom.png',
    },
    {
        id : 1,
        img : './images/codi_bottom.png',
    },
    {
        id : 2,
        img : './images/codi_bottom.png',
    },
    {
        id : 3,
        img : './images/codi_bottom.png',
    },
    {
        id : 4,
        img : './images/codi_bottom.png',
    },
    {
        id : 5,
        img : './images/codi_bottom.png',
    },
    {
        id : 6,
        img : './images/codi_bottom.png',
    },
    {
        id : 7,
        img : './images/codi_bottom.png',
    },
    {
        id : 8,
        img : './images/codi_bottom.png',
    },
    {
        id : 9,
        img : './images/codi_bottom.png',
    },
]
const backClick = () => {
    alert('준비되지 않았어요');
}

const Codinator = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable:false,
        variableWidth: true,
        focusOnSelect: true
    };
    return (
    <SC.Base>
        <SC.Top>
            <SC.BtnBack onClick={backClick}>뒤로가기</SC.BtnBack>
            <SC.HeaderTitle>추천 코디</SC.HeaderTitle>
        </SC.Top>
            <SC.Title>오늘의 추천 코디</SC.Title>
            <StyledSlider {...settings}>
                {dummyImge.map((it)=>(
                    <CodiItem key={it.id} {...it} />
                ))}
            </StyledSlider>
            <SC.Title>오늘의 추천 아이템</SC.Title>
            <SC.SliderSmall>{dummyImagesmall.map((it)=>(
                <SC.ImgBox>
                    <SC.ImgSize src = {it.img}/>
                </SC.ImgBox>
            ))}
            </SC.SliderSmall>
    </SC.Base>
    )
}

export default Codinator;


const StyledSlider = styled(Slider)`
    .slick-list{
        height : 192px;
        margin-left : 16px;
    }
`;
