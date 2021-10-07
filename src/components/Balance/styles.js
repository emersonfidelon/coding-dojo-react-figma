import styled from 'styled-components';

const colors = {
  received:'#1DC7AC',
  failed:'#FE4A54',
  sent:'#FAAD39'
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px;
`;

export const Label = styled.div`
  font-size: 12px;
  color: white;
  margin-bottom:15px;
`;

export const CurrencyBalance = styled.div`
  font-weight: bold;
  font-size: ${props => props.size ? props.size : '16px'};
  color: ${props => colors[props.status] || '#fff'};
  display: flex;
  align-items: center;
  font-family: 'HelveticaNeueCyr', sans-serif;
`;