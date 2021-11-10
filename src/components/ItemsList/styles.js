import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    padding-top:16px;
`;

export const Detail = styled.span`
    width: 64px;
    height: 7px;
    background: #4E589F;
    border-radius: 10px;
    margin-bottom: 16px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderList = styled.div`
    background: #10194E;
    border-radius: 40px 40px 0px 0px;
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    align-items: center;
    padding: 25px 15px;
    color: white;
`;

export const HeaderListTitle = styled.span`
    font-size: 16px;
`;

export const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    >label {
        color: #4E589F;
        font-size: 14px;
    }
`;

export const SortSelect = styled.select`
    max-width: fit-content;
    height: 30px;
    margin-left: 9px;
    border-radius: 4px;
    border: none;
    background-color: transparent;
    color: #DDD9D9;
    &::after {
        content: '▼';
        font-size: 14px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: white;
    }
`;

