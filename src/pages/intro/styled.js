import { styled } from 'styled-components';
import { Colors } from '../../tokens/Colors';
import { Fonts } from '../../tokens/Fonts';
import { Space } from '../../tokens/Space';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: ${Space.regularX};
`;

export const Section = styled.section`
  width: 100vw;
  padding: ${Space.bigY};
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.h1`
  font-size: ${Fonts['font-semi-20'].fontSize};
  font-family: ${Fonts['font-semi-20'].fontFamily};
  line-height: ${Fonts['font-semi-20'].lineHeight};
`;

export const Article = styled.article`
  display: flex;
  gap: 20px;
`;

export const CheckBox = styled.button`
  width: 106px;
  height: 90px;
  background-color: ${({ isClick }) =>
    isClick ? Colors['main02-10'] : Colors.line01};
  border: 1px solid ${Colors.line03};
  border-radius: 6px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SubmitBox = styled.button`
  background-color: ${Colors.line01};
  border: none;
  width: 358px;
  height: 59px;
  border-radius: 6px;
  color: white;
`;

export const ContentText = styled.span`
  font-family: ${Fonts['font-semi-16'].fontFamily};
  font-size: ${Fonts['font-semi-16'].fontSize};
  font-weight: ${Fonts['font-semi-16'].fontWeight};
  line-height: ${Fonts['font-semi-16'].lineHeight};
`;
