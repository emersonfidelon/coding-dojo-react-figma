import { AddMoney, Container, WelcomeMessage, MenuContainer, Menu } from './styles';
import menuIcon from './menu-item.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Container data-testid="header">  
            <MenuContainer>
                <Menu data-testid="menu-icon" src={menuIcon} />
                <WelcomeMessage>Hello Sandra,</WelcomeMessage>
            </MenuContainer>
            <Link to="/new">
                <AddMoney>Add money</AddMoney>
            </Link>
        </Container>
    )
}
