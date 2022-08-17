import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders logo component', () => {
    render(<Header/>);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders button component', () => {
    render(<Header/>);
    const btn = screen.getByTestId('btn');
    expect(btn).toBeInTheDocument();
  });