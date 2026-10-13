import { render, screen } from '@testing-library/react';
import App from './App';

describe('Pruebas del Portafolio', () => {
  test('Debe renderizar la sección de Noticias correctamente', () => {
    render(<App />);
    // Busca específicamente el titulo de las noticias, que sabemos que es unico
    const tituloNoticias = screen.getByText(/Últimas Noticias/i);
    expect(tituloNoticias).toBeInTheDocument();
  });
});