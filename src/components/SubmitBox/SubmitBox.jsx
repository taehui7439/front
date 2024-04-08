import { styled } from "styled-components"
import { Colors } from "../../tokens/Colors";

export const Button = styled.button`
  cursor: pointer;
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

export const SubmitBox = ({children, onClick}) => {
    return <Button onClick={onClick}>{children}</Button>
}