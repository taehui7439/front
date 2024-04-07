import React ,{useState}from 'react';
import CheckIcon from './CheckIcon';
import * as SC from "./styled"

const IntroPage = () => {
    const [gender, setGender] = useState({male: false, feMale: false})

    const genderHandler = (key) => {
        setGender(!gender[key])
    }


    return (
        <SC.Main>
            <SC.Section>
                <SC.Title>성별을 알려주세요</SC.Title>
                <SC.Article>
                    <SC.CheckBox onClick={() => genderHandler("male")} isClick={gender["male"]}>
                        <CheckIcon></CheckIcon>
                        <img src="/images/남성.png" alt="남성" />
                        <SC.ContentText>남성</SC.ContentText>
                    </SC.CheckBox>
                    <SC.CheckBox onClick={() => genderHandler("male")} isClick={gender["male"]}>
                        <CheckIcon></CheckIcon>
                        <img src="/images/여성.png" alt="여성" />
                        <SC.ContentText>여성</SC.ContentText>
                    </SC.CheckBox>
                </SC.Article>
            </SC.Section>
            <SC.Section>
                <SC.Title>나이를 설정해주세요</SC.Title>
                <SC.Article>
                    <SC.CheckBox>
                        <CheckIcon></CheckIcon>
                        <SC.ContentText>10대</SC.ContentText>
                    </SC.CheckBox>
                    <SC.CheckBox>
                        <CheckIcon></CheckIcon>
                        <SC.ContentText>20대-30대</SC.ContentText>
                    </SC.CheckBox>
                    <SC.CheckBox>
                        <CheckIcon></CheckIcon>
                        <SC.ContentText>40대 이상</SC.ContentText>
                    </SC.CheckBox>
                </SC.Article>
            </SC.Section>
            <SC.Section>
                <SC.Title>체질을 설정해주세요</SC.Title>
                <SC.Article>
                    <SC.CheckBox>
                        <CheckIcon></CheckIcon>
                        <SC.ContentText>더위를<br></br>많이타요</SC.ContentText>
                    </SC.CheckBox>
                    <SC.CheckBox>
                        <CheckIcon></CheckIcon>
                        <SC.ContentText>평균</SC.ContentText>
                    </SC.CheckBox>
                    <SC.CheckBox>
                        <CheckIcon></CheckIcon>
                        <SC.ContentText>추위를<br></br>많이타요</SC.ContentText>
                    </SC.CheckBox>
                </SC.Article>
            </SC.Section>
            <SC.SubmitBox>완료</SC.SubmitBox>
        </SC.Main>
    )
};

export default IntroPage;
