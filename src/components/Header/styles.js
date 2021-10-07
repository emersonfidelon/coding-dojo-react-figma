import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    color:white;
    padding: 15px;
`;

export const WelcomeMessage = styled.span`
    font-size:20px; 
`;

export const AddMoney = styled.button`
    display:flex;
    justify-content:left;
    padding: 6px 8px;
    border: 1px solid #FF3B30;
    color: #fff;
    border-radius: 8px;
    background-color: #FF3B30;
  `;

export const MenuContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`;

export const Menu = styled.img`
    height: 48px;
    margin-right: 16px;
`;
