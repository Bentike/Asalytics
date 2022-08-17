import { render, screen } from '@testing-library/react';
import App from './App';

test('renders List of Algorand Standard Assets on ASAlytics', () => {
  render(<App />);
  const headerText = screen.getByText(/List of Algorand Standard Assets on ASAlytics/i);
  expect(headerText).toBeInTheDocument();
});

test('renders header component', () => {
  render(<App />);
  const headerComponent = screen.getByTestId('header');
  expect(headerComponent).toBeInTheDocument();
});

test('renders algorand component', () => {
  render(<App />);
  const algorandComponent = screen.getByTestId('algorand');
  expect(algorandComponent).toBeInTheDocument();
});
