import ReactDOM from 'react-dom';
import Filter from "./Filter"
import * as SC from "./styled"


const BottomSheet = ({isModal, setIsModal}) => {
  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(
    <>
        <Filter isModal={isModal}/>
        <SC.Main isModal={isModal}>
            <SC.Header onClick={() => setIsModal(!isModal)}>
                <SC.Title>주간날씨</SC.Title>
                <SC.CloseButton>X</SC.CloseButton>
            </SC.Header>
            <SC.Section>
                <SC.Category>
                    <SC.CategoryText>날짜</SC.CategoryText>
                    <SC.CategoryText>오전</SC.CategoryText>
                    <SC.CategoryText>오후</SC.CategoryText>
                    <SC.CategoryText>최저/최고기온</SC.CategoryText>
                </SC.Category>
                <SC.Line/>
                <SC.DayList>
                    <SC.DayWeather>
                        <SC.DayBox>
                            <SC.Day>일</SC.Day>
                            <SC.Date>4.07</SC.Date>
                        </SC.DayBox>
                        <SC.Morning>0%</SC.Morning>
                        <SC.AfterNoon>0%</SC.AfterNoon>
                        <SC.TempBox>
                            <SC.Lowest>최저8</SC.Lowest>
                            <SC.Highest>최고24</SC.Highest>
                        </SC.TempBox>
                    </SC.DayWeather>
                </SC.DayList>
            </SC.Section>
        </SC.Main>
    </>
    ,
    modalRoot
  );
};

export default BottomSheet;