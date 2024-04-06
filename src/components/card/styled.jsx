import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #7d5cff;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
`;

export const Item = styled.p`
  background: rgba(125, 92, 255, 0.1);
  padding: 6px 0;
  border-radius: 9999px;
  color: #7d5cff;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
`;

export const Clothes = styled.p`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Type = styled.p`
  color: #0c0c0c;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
`;
