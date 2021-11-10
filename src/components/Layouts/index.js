import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => (props.direction ? props.direction : "row")};
    padding: ${props => (props.padding ? props.padding : "16px")};
    justify-content: ${props => (props.justify ? props.justify : "flex-start")};
`;

export const Wrapper = styled.div`
background-color:#010A43;
height:100vh;
`