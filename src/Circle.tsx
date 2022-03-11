import styled from "styled-components";
import { useState } from "react";


interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width:100px;
    height:100px;
    background-color: ${props => props.bgColor};
    border: 3px solid ${props => props.borderColor}
`;


interface CircleProps{
    bgColor: string;
    borderColor?: string;
}

function Circle({bgColor,borderColor}:CircleProps) {
    const [counter, setCounter] = useState<number|string>(1);
    //ts가 알아서 useState의 default 값으로 타입을 추론해준다.
    //<>와 |를 이용해 타입을 지정해줄 수 있다.
    //하지만 보통 setState로 타입을 변경하는일은 드물기에 잘 쓰이진않는다.
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>
    )
}

export default Circle;