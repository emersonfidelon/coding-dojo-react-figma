import { renderWithRouter } from "./testConfig";
import NewRequest from "../pages/NewRequest";
import { screen } from "@testing-library/react";

describe('NewRequest', () => {
    test('Precisa ter um botão voltar com 1 imagem a esquerda e o texto "Back"', () => {
        renderWithRouter(<NewRequest />);
        const button = screen.getByText('Back');
        expect(button).toBeInTheDocument();
        const image = screen.getByAltText('Back');
        expect(image).toBeInTheDocument();
    });

    test('O botão de voltar precisa ser um link', () => {
        renderWithRouter(<NewRequest />);
        const button = screen.getByText('Back');
        expect(button).toHaveAttribute('href', '/');
    })

    test('Precisa ter um título na página com o texto "New Request" centralizado', () => {
        renderWithRouter(<NewRequest />);
        const title = screen.getByText('New Request');
        expect(title).toBeInTheDocument();
        expect(title).toHaveStyle('text-align: center');
    })
})