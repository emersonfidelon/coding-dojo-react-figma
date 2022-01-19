import styled from 'styled-components';
import { Link } from 'react-router-dom';
const buttonWidth = '60px';
export const Container = styled.div`
    color:#d7c9c9;
    width: 100%;
    display:flex;
`;

export const Title = styled.div`
width: 100%;
padding-right:${buttonWidth/2};
text-align:center;
`;

export const Content =styled.div`
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

export const ReturnButtonContainer = styled(Link)`
    display: flex;
    align-items: center;
    width: ${buttonWidth};
    color: #D7C9C9;
    justify-content:space-between;
`;

export const RightContent = styled.div`
    width: ${buttonWidth};
`;

export const ReturnButton = styled.img`
    
`;


