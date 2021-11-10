import React from 'react';

import { Container, Icon, Status } from './styles';
import failed from '../../assets/failed.png'
import received from '../../assets/received.png'
import sent from '../../assets/sent.png'

export const Badge = ({ status }) => {

  const statusIcons = {
    received,
    failed,
    sent
  };

  const colors = {
    received:'#1DC7AC',
    failed:'#FE4A54',
    sent:'#FAAD39'
  }

  return (
    <Container color={colors[status]}>
        <Icon src={statusIcons[status]}></Icon>
        <Status>{status}</Status>
    </Container>
  );
}
