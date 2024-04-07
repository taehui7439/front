import { Colors } from '../../tokens/Colors';
import { styled } from 'styled-components';
import { Fonts } from '../../tokens/Fonts';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
`;

export const SubmitBox = styled.button`
  background-color: ${Colors.line01};
  border: none;
  width: 358px;
  height: 59px;
  border-radius: 6px;
  color: white;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${Colors.main02};
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: ${Fonts['font-semi-16'].fontSize};
  font-family: ${Fonts['font-semi-16'].fontFamily};
  font-weight: ${Fonts['font-semi-16'].fontWeight};
  line-height: ${Fonts['font-semi-16'].lineHeight};
`;
