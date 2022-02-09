import { screen } from "@testing-library/react";
import { renderWithRouter } from "./testConfig";
import Home from "../pages/Home";
import { Balance } from "../components/Balance";
import { Header } from '../components/Header';

describe('Home', () => {
    test('Precisa ter um botão com o texto "Request money"', () => {
        renderWithRouter(<Home />);
        const button = screen.getByText('Request money');
        expect(button).toBeInTheDocument();
    })

    test('Precisa ter um botão com o texto "Send money"', () => {
        renderWithRouter(<Home />);
        const button = screen.getByText('Send money');
        expect(button).toBeInTheDocument();
    })

    test('Precisa ter um botão para adicionar dinheiro com o texto "Add money"', () => {
        renderWithRouter(<Home />);
        const button = screen.getByText('Add money');
        expect(button).toBeInTheDocument();
    })

    test("O botão com texto 'Request money' precisar ter fundo na cor '#FF2E63' e texto na cor '#fff'", () => {
        renderWithRouter(<Home />);
        const item = screen.getByText('Request money');
        expect(item).toHaveStyle('background-color: #FF2E63');
        expect(item).toHaveStyle('color: #fff');
    })

    test('Precisa conter o texto "All Transactions"', () => {
        renderWithRouter(<Home />);
        const text = screen.getByText('All Transactions');
        expect(text).toBeInTheDocument();
    })

    test('Precisar conter o texto "Sort by:"', () => {
        renderWithRouter(<Home />)
        const text = screen.getByText('Sort by:')
        expect(text).toBeInTheDocument();
    })

    test('Precisa conter "select" com os "options" Recent e Old', () => {
        renderWithRouter(<Home />);
        const options = screen.getAllByRole('option')
        expect(options).toHaveLength(2);
        expect(options[0]).toHaveTextContent('Recent');       
        expect(options[1]).toHaveTextContent('Old');
    })
    test('Precisa conter titulo descritivo "Your current balance is"', () => {
        renderWithRouter(<Home />);
        const title = screen.getByText('Your current balance is');
        expect(title).toBeInTheDocument();
    })
    test('O componente de exebição de saldo altual, deve conter o valor que foi passado como propiedade', () => {
        renderWithRouter(<Balance balance={200} />);
        const balance = screen.getByText('R$ 200');
        expect(balance).toBeInTheDocument();
    })

    test('O componente de exibição de saldo atual, deve conter o simbolo de reais mesmo que não tenha um valor', () => {
        renderWithRouter(<Balance balance='' />);
        const balance = screen.getByText('R$');
        expect(balance).toBeInTheDocument();
    })

    test('Deve existir um botão de menu no "Header"', () => {
        renderWithRouter(<Header />)
        const menuButton = screen.getByTestId('menu-icon')
        expect(menuButton).toBeInTheDocument()
    })

    test('Deve conter uma lista zebrada com as cores #192259 e #10194E', () => {
        renderWithRouter(<Home />)
        const list = screen.getAllByTestId('transaction-item');
        expect(list[0]).toHaveStyle('background-color: #192259');
        expect(list[1]).toHaveStyle('background-color: #10194E');
        expect(list[2]).toHaveStyle('background-color: #192259');
    })
})
