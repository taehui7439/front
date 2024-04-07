import { Colors } from '../../../tokens/Colors';
import styled from 'styled-components';

export const WeatherBarBox = styled.div`
  height 80px;
`;

export const WeatherBar = styled.div`
  background: ${Colors.line02};
  width: 6px;
  height: 50%;
  animation: 2s;
  border-radius: 9999px 9999px 0 0;
`;
