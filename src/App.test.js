import { render } from '@testing-library/react';
import App from './App';

// Test to check if App component renders without crashing
test('renders without crashing', () => {
  render(<App />);
});
