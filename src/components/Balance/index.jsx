import { Label, CurrencyBalance } from './styles';
import { Container } from '../Layouts'

export const Balance = ({ balance }) => {
    return (
        <Container direction="column">
           <Label>Your current balance is</Label>
           <CurrencyBalance>R$ {balance}</CurrencyBalance>
        </Container>
    )
}