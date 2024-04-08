import * as SC from "./magostyle.js";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const codiRecommend = [
    {
        id : 0,
        gender : '1',
        img : './images/man_codi01.png',
    },
    {
        id : 1,
        gender : '1',
        img : './images/man_codi02.png',
    },
    {
        id : 2,
        gender : '1',
        img : './images/man_codi03.png',
    },
    {
        id : 3,
        gender : '1',
        img : './images/man_codi04.png',
    },
];

const dummyImagesmall = [
    {
        id : 0,
        gender : 1,
        img : './images/man_outter01.png',
    },
    {
        id : 1,
        gender : 1,
        img : './images/man_outter02.png',
    },
    {
        id : 2,
        gender : 1,
        img : './images/man_outter03.png',
    },
    {
        id : 3,
        gender : 1,
        img : './images/man_top01.png',
    },
    {
        id : 4,
        gender : 1,
        img : './images/man_top02.png',
    },
    {
        id : 5,
        gender : 1,
        img : './images/man_top03.png',
    },
    {
        id : 6,
        gender : 1,
        img : './images/man_bottom01.png',
    },
    {
        id : 7,
        gender : 1,
        img : './images/man_bottom02.png',
    },
    {
        id : 8,
        gender : 1,
        img : './images/man_bottom03.png',
    },
]

const RecommendPage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        slidesPerRow: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
    };
    return (
    <SC.Base>
            <SC.Title>오늘의 추천 코디</SC.Title>
            <StyledSlider {...settings}>
                {codiRecommend.map((it)=>(
                    <SC.codiImgbox key={it.id}>
                        <SC.ImgSize src={it.img} alt="코디 사진"/>
                    </SC.codiImgbox>
                ))}
            </StyledSlider>
            <SC.Title>오늘의 추천 아이템</SC.Title>
            <SC.SliderSmall>{dummyImagesmall.map((it)=>(
                <SC.ImgBox key={it.id}>
                    <SC.ImgSize src={it.img}/>
                </SC.ImgBox>
            ))}
            </SC.SliderSmall>
    </SC.Base>
    )
}

export default RecommendPage;

const StyledSlider = styled(Slider)`
    .slick-list{
    }
    .slick-slide{
        margin-right : 10px;
    }
    .slick-track{
        display: flex;
        gap: 0.1rem;
    }
    overflow: hidden;
    width: 400px;
    height: 190px;
    margin-left : 16px;
`;
