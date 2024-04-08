import { styled } from 'styled-components';

export const Main = styled.main`
  max-width: 390px;
  position: absolute;
  top: ${({ isModal }) => (isModal ? '0' : '100%')};
  left: 50%;
  transform: translate(-50%);
  border-radius: 10px;
  background-color: white;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  right: 5%;
`;

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const Section = styled.section`
  width: 100%;
`;

export const Category = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const CategoryText = styled.span``;

export const DayList = styled.ul``;

export const DayWeather = styled.li``;

export const DayBox = styled.article``;

export const Day = styled.span``;

export const Date = styled.span``;

export const TimeBox = styled.article``;

export const Morning = styled.div``;

export const AfterNoon = styled.div``;

export const TempBox = styled.article``;

export const Lowest = styled.span``;

export const Highest = styled.span``;
