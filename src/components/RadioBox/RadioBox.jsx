import React from "react"
import { styled } from "styled-components"
import { Colors } from "../../tokens/Colors"
import { Fonts } from "../../tokens/Fonts";

const Container = styled.section`
    background-color: ${Colors.BG};
    padding: 20px 16px;
    display: flex;
    flex-direction: ${({column}) => column ? "column" : "row"};
    gap: ${({column}) => column ? "10px" : "20px"};
`;


const CustomRadio = styled.input`
    display: none;
    + label::before {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${Colors.line03};
        background-color: ${({ isChecked }) => (isChecked ? Colors.main02 : "white")};
        margin-right: 10px;
    }
    
    &:checked + label::before {
        background-color: ${Colors.main02};
    }
`;

// const InnerCircle = styled.div`
//     position: absolute;
//     top: 0;
//     left: 10%;
//     transform: translate(-50%, -50%);
//     width: 8px;
//     height: 8px;
//     border-radius: 50%;
//     background-color: black;
// `;


const ItemBox = styled.div`
    position: relative;
`

const Label = styled.label`
    font-size: ${Fonts["font-medium-14"].fontSize};
    font-weight: ${Fonts["font-medium-14"].fontWeight};
    line-height: ${Fonts["font-medium-14"].lineHeight};
    font-family: ${Fonts["font-medium-14"].fontFamily};
`


const RadioBox = ({list, category, column}) => {
    return(
        <Container column={column}>
             {list ? list.map((item, idx) => (
                <ItemBox key={idx}> 
                        <CustomRadio 
                            id={item} 
                            type="radio"
                            name={category} 
                            value={item} 
                        />
                        <Label htmlFor={item}>
                            {item}
                            {/* <InnerCircle/> */}
                        </Label>
                </ItemBox>
            ))
            : null
        }
        </Container>
    )
}

export default RadioBox