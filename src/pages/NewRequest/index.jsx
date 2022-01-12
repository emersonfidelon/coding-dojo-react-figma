import { 
    Container,
    AvatarWrapper,
    Name
} from './styles';
import { Wrapper } from '../../components/Layouts';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { Balance } from '../../components/Balance';
import {Button, ButtonOutline} from '../../components/Buttons';
import { Avatar } from '../../components/Item/styles';

function NewRequest() {
    return (
        <Wrapper>
            <Container >
                <HeaderNavigation title=" New Request" />
                <AvatarWrapper>
                    <Avatar ring src="https://randomuser.me/api/portraits/men/23.jpg" width="100" height="100"></Avatar>
                </AvatarWrapper>
                <Name>Adeleke Ramon</Name>
                <Balance />
                <div>
                    <Button>Send money</Button>
                    <ButtonOutline full color="#464E8A">Don't send</ButtonOutline>
                </div>
            </Container>
        </Wrapper>
    );
}

export default NewRequest;