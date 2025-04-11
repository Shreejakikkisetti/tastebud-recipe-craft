
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </LanguageProvider>
  );
};

describe('Navbar Component', () => {
  test('renders TasteBud logo', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('TasteBud')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithProviders(<Navbar />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const savedRecipesLink = screen.getByRole('link', { name: /saved recipes/i });
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(savedRecipesLink).toHaveAttribute('href', '/saved');
  });

  test('contains language switcher component', () => {
    renderWithProviders(<Navbar />);
    // Look for the Globe icon which is part of the LanguageSwitcher
    const languageSwitcherIcon = document.querySelector('[data-lucide="Globe"]');
    expect(languageSwitcherIcon).toBeInTheDocument();
  });
});
