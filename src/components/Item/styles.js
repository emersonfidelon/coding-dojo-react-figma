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
    width: 48px;
    height: 48px;
    border-radius: 50%;
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
