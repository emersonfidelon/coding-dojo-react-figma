import { screen } from "@testing-library/react";
import { renderWithRouter } from "./testConfig";
import Home from "../pages/Home";

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
})