import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    color: #ccc;
    justify-content: space-between;
    padding: 16px;
    &:nth-child(even) { background-color: #192259; }
    &:nth-child(odd) { background-color: #10194E; }
`;

export const Avatar = styled.img`
    width: ${props => props.width || 48}px;
    height: ${props => props.height || 48}px;
    border-radius: 50%;
    border: ${props => props.ring ? 'solid 25px #192259' : 'none'};
`;

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    padding-left: 16px;
    background-color:transparent;
`;

export const Name = styled.p`
   font-family: 'HelveticaNeueCyr', sans-serif;
    margin-bottom: 12px;
    color: #858EC5;
    font-weight: bold;
`;

export const ContentInfo = styled.div`
    display: flex;
`;
