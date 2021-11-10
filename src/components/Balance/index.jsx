import { Label, CurrencyBalance } from './styles';
import { Container } from '../Layouts'

export const Balance = () => {
    return (
        <Container direction="column">
           <Label>Your current balance is</Label>
           <CurrencyBalance>R$ 200.000,00</CurrencyBalance>
        </Container>
    )
}