import React from 'react'
import {Item} from './../Item'
import {Container, HeaderList, Detail, HeaderListTitle, Row, SelectContainer, SortSelect} from './styles'

const ItemsList = ({transactions}) =>{

  return(
    <Container>
      <HeaderList>
        <Detail />
        <Row>
          <HeaderListTitle>All Transactions</HeaderListTitle>
          <SelectContainer>
            <label>Sort by:</label>
            <SortSelect>
              <option value="recent">Recent</option>
              <option value="old">Old</option>
            </SortSelect>
          </SelectContainer>
        </Row>
      </HeaderList>
      {transactions.map(({ avatar, userName, status, balance }, key) => (
        <Item
          key={key}
          avatar={avatar}
          userName={userName}
          status={status}
          balance={balance}
        />
      ))}
  </Container>
  )
}

export default ItemsList