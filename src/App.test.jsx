import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/theme';

describe('App', () => {
  it('renders ChefGPT heading', () => {
    render(
      <MemoryRouter>
        <ThemeProvider value={{ isDarkMode: false, toggleDarkMode: () => {} }}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );
    
    expect(screen.getByText("Meet ChefGPT 👋")).toBeInTheDocument();
  });
});