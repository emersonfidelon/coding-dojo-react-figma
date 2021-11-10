import { Header } from '../../components/Header';
import { Balance } from '../../components/Balance';
import { Container, Wrapper } from '../../components/Layouts';
import { Button, ButtonOutline } from '../../components/Buttons'
import ItemsList from '../../components/ItemsList';

const transactions = [
  {
    avatar:"https://randomuser.me/api/portraits/men/26.jpg",
    userName:"Xablau Beedoo",
    status:"failed",
    balance:"500,00"
  },
  {
    avatar:"https://randomuser.me/api/portraits/men/23.jpg",
    userName:"Xablau Beedoo",
    status:"sent",
    balance:"900,00"
  },
  {
    avatar:"https://randomuser.me/api/portraits/men/22.jpg",
    userName:"Xablau Beedoo",
    status:"received",
    balance:"1.230,00"
  },
  {
    avatar:"https://randomuser.me/api/portraits/men/26.jpg",
    userName:"Xablau Beedoo",
    status:"failed",
    balance:"1.500,00"
  }
]

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Balance size="50px" />
      <Container justify="space-between">
        <Button>Request money</Button>
        <ButtonOutline color="grey">Send money</ButtonOutline>
      </Container>
      <ItemsList {...{transactions}}></ItemsList>

    </Wrapper>);
}