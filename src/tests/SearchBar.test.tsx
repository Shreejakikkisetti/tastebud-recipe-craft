
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import SearchBar from '@/components/SearchBar';
import { LanguageProvider } from '@/context/LanguageContext';

describe('SearchBar Component', () => {
  test('renders search input and button', () => {
    const mockOnSearch = vi.fn();
    render(
      <LanguageProvider>
        <SearchBar onSearch={mockOnSearch} />
      </LanguageProvider>
    );
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls onSearch with correct ingredients when button is clicked', () => {
    const mockOnSearch = vi.fn();
    render(
      <LanguageProvider>
        <SearchBar onSearch={mockOnSearch} />
      </LanguageProvider>
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'tomato, onion, garlic' } });
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnSearch).toHaveBeenCalledWith(['tomato', 'onion', 'garlic']);
  });

  test('calls onSearch when enter key is pressed', () => {
    const mockOnSearch = vi.fn();
    render(
      <LanguageProvider>
        <SearchBar onSearch={mockOnSearch} />
      </LanguageProvider>
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'chicken, rice' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(mockOnSearch).toHaveBeenCalledWith(['chicken', 'rice']);
  });

  test('does not call onSearch when input is empty', () => {
    const mockOnSearch = vi.fn();
    render(
      <LanguageProvider>
        <SearchBar onSearch={mockOnSearch} />
      </LanguageProvider>
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
