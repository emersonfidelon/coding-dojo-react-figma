import { Container } from './styles';
import { Wrapper } from '../../components/Layouts';
import { HeaderNavigation } from '../../components/HeaderNavigation';

function NewRequest() {
    return (
        <Wrapper>
            <Container >
                <HeaderNavigation title =" New Request" />

            </Container>
        </Wrapper>
    );
}

export default NewRequest;