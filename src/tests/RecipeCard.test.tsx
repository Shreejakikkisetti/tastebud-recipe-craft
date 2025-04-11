
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeCard from '@/components/RecipeCard';
import { Recipe } from '@/lib/recipeData';
import { LanguageProvider } from '@/context/LanguageContext';

// Mock recipe data for testing
const mockRecipe: Recipe = {
  id: 1,
  title: "Test Recipe",
  image: "https://example.com/image.jpg",
  prepTime: 10,
  cookTime: 20,
  servings: 4,
  ingredients: ["Ingredient 1", "Ingredient 2"],
  instructions: ["Step 1", "Step 2"],
  tags: ["test", "recipe"]
};

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </LanguageProvider>
  );
};

describe('RecipeCard Component', () => {
  test('renders recipe title correctly', () => {
    renderWithProviders(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
  });

  test('renders total cook time correctly', () => {
    renderWithProviders(<RecipeCard recipe={mockRecipe} />);
    // Total time should be prep time (10) + cook time (20) = 30 minutes
    expect(screen.getByText(/30/)).toBeInTheDocument();
  });

  test('has correct link to recipe detail page', () => {
    renderWithProviders(<RecipeCard recipe={mockRecipe} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/recipe/1');
  });

  test('displays the recipe image with correct alt text', () => {
    renderWithProviders(<RecipeCard recipe={mockRecipe} />);
    const imageElement = screen.getByAltText('Test Recipe');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
