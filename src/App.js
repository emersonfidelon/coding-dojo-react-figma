import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Container, Wrapper } from './components/Layouts';
import { Button, ButtonOutline } from './components/Buttons'
import { Item } from './components/Item'

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

function App() {
  return (
    <Wrapper>
      <Header />
      <Balance size="50px" />
      <Container justify="space-between">
        <Button>Request money</Button>
        <ButtonOutline color="grey">Send money</ButtonOutline>
      </Container>

      <Container direction="column" padding="16px 0">

        {transactions.map(({ avatar, userName, status, balance }, key) => (
          <Item
            key={key}
            avatar={avatar}
            userName={userName}
            status={status}
            balance={balance}
          />
        ))}
      </Container>
    </Wrapper>);
}

export default App;
