import { AddMoney, Container, WelcomeMessage } from './styles';

export const Header = () => {
    return (
        <Container>  
            <h3>Menu</h3>
            <WelcomeMessage>Hello Sandra,</WelcomeMessage>
            <AddMoney>Add money</AddMoney>
        </Container>
    )
}
