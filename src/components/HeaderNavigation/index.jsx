import {
    Container, 
    Title,
    Content,
    ReturnButton,
    ReturnButtonContainer,
} from './styles';

import backIcon from '../../assets/arrow-left.png'

export const HeaderNavigation = ({ title }) => {
    return (
        <Container>
            <Content>
                <ReturnButtonContainer>
                    <ReturnButton src={backIcon} />
                    Back
                </ReturnButtonContainer>
                <Title>{title}</Title>
                <div />
            </Content>
        </Container>
    )
}