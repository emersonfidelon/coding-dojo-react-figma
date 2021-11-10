import { AddMoney, Container, WelcomeMessage, MenuContainer, Menu } from './styles';
import menuIcon from './menu-item.png';

export const Header = () => {
    return (
        <Container>  
            <MenuContainer>
                <Menu src={menuIcon}></Menu>
                <WelcomeMessage>Hello Sandra,</WelcomeMessage>
            </MenuContainer>
            <AddMoney>Add money</AddMoney>
        </Container>
    )
}
