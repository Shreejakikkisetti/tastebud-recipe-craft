
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import { Recipe, findRecipesByIngredients, mockRecipes } from "@/lib/recipeData";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import RecipeCard from "@/components/RecipeCard";

const Index = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (ingredients: string[]) => {
    const results = findRecipesByIngredients(ingredients);
    setSearchResults(results);
    setHasSearched(true);
    
    if (results.length === 0) {
      toast({
        title: "No recipes found",
        description: "Try different ingredients or combinations",
      });
    }
  };

  const featuredRecipes = mockRecipes.slice(0, 3);

  return (
    <div className="min-h-screen bg-tastebud-beige">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            {t("welcomeToTastebud")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("tagline")}
          </p>
          
          <div className="mt-8 mb-12">
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        {hasSearched ? (
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-6">
              {searchResults.length > 0 
                ? `Found ${searchResults.length} recipes` 
                : "No recipes found with those ingredients"}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        ) : (
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-6">{t("featuredRecipes")}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;
