import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #ff6347;
`;

const Message = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 20px;
`;

const NotFound = () => {
  return (
    <ErrorContainer>
      <Title>404 - 페이지를 찾을 수 없습니다.</Title>
      <Message>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</Message>
      <Link to="/home">홈으로 이동하기</Link>
    </ErrorContainer>
  );
};

export default NotFound;
