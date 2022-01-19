import {
    Container, 
    Title,
    Content,
    ReturnButton,
    ReturnButtonContainer,
    RightContent
} from './styles';

import backIcon from '../../assets/arrow-left.png'

export const HeaderNavigation = ({ title }) => {
    return (
        <Container>
            <Content>
                <ReturnButtonContainer to="/">
                    <ReturnButton alt='Back' src={backIcon} />
                    Back
                </ReturnButtonContainer>
                <Title>{title}</Title>
                <RightContent />
            </Content>
        </Container>
    )
}