import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders Sign in With Google', async () => {
  render(<App />);
  const linkElement = await waitFor(() => screen.getByText(/Sign in With Google/i));
  expect(linkElement).toBeInTheDocument();
});
