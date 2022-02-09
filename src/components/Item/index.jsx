import {
    Container,
    ContentInfo,
    Avatar,
    Content,
    Name
} from './styles';

import { CurrencyBalance } from '../Balance/styles';
import { Badge } from '../Badge';

export const Item = ({ avatar, userName, status, balance, indexColor }) => {
    return (
        <Container indexColor={indexColor} data-testId="transaction-item">
            <ContentInfo>
                <Avatar src={avatar} />                
                <Content>
                    <Name>{userName}</Name>
                    <Badge status={status}></Badge>
                </Content>
            </ContentInfo>
            <CurrencyBalance status={status} >R$ {balance}</CurrencyBalance>
        </Container>
    )
}