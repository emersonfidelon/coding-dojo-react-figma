import styled from 'styled-components';

export const Button = styled.button`
    width: ${props => props.full ? '100%' : 'initial'};
    border: 1px solid ${props=> props.bg || '#FF2E63'};
    padding: 16px 20px;
    border-radius: 10px;
    font-style: normal;
    font-weight: 550;
    font-size: 16px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${props=> props.bg || '#FF2E63'};
    color: ${props=> props.color || 'white'};
`;

export const ButtonOutline = styled(Button)`
    border-color: ${props=> props.color || '#FF2E63'};
    background: transparent;
    color: ${props=> props.color || '#FF2E63'};
`;