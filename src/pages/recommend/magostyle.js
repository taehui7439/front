import styled from "styled-components";
import {Fonts} from '../../tokens/Fonts';

export const Base = styled.div`
    max-width: 390px;
    background-color: aliceblue;
    overflow:hidden;
`
export const Top = styled.div`  
    position: relative;
    height: 50px;
`
export const BtnBack = styled.div`
    position: absolute;
    top : 50%;
    transform: translate(0,-50%);
    background-image: url(images/btn_back.png);
    width: 18px;
    height: 18px;
    background-position: center;
    text-indent: -9999px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    margin: 0 16px;
`
export const HeaderTitle = styled.div`
    position: absolute;
    top : 15px;
    left: 50%;
    transform: translate(-50%, 0);
    ${Fonts['font-semi-18']};
`
export const codiImgbox = styled.div`
    width : 142px;
    height : 190px;
`
export const ImgSize = styled.img`
    width: 100%;
    height: auto;
`
export const Title = styled.div`
    fonst-size : 18px;
    font-weight : 600;
    margin : 0 16px 15px 16px;
    padding-top : 10px;
`
export const SlickSlider = styled.div`
    height : 192px;
`
export const SliderSmall =styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    margin: 0 16px;
`
export const ImgBox = styled.div`
    border-radius: 10px;
    overflow: hidden;
`