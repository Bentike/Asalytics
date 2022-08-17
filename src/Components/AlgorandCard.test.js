import { render, screen } from '@testing-library/react';
import AlgorandCard from './AlgorandCard';

test('renders Algorand icon image ', () => {
    render(<AlgorandCard/>);
    const img = screen.getByAltText(/algorand icon/i)
    expect(img).toBeInTheDocument();
});

test('renders Algorand name ', () => {
    render(<AlgorandCard/>);
    const name = screen.getByTitle(/algo/i)
    expect(name).toBeInTheDocument();
});

test('renders Algorand status available/unavailable ', () => {
  render(<AlgorandCard/>);
  const status = screen.getByTitle(/status/i)
  expect(status).toBeInTheDocument();
});
