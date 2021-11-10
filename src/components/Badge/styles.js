import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props=>props.color};
    display:flex;
    border-radius:15px;
    justify-content:flex-start;
    max-width: fit-content;
    padding:6px 8px;
`;

export const Icon = styled.img`
    width:16px;
    margin-right:5px;
`;
export const Status = styled.div`
    background-color: transparent;
`;