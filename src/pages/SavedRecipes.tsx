
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Recipe, getRecipeById } from "@/lib/recipeData";

const SavedRecipes = () => {
  const { t } = useLanguage();
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    const recipes = savedIds.map((id: number) => getRecipeById(id)).filter(Boolean);
    setSavedRecipes(recipes);
  }, []);

  return (
    <div className="min-h-screen bg-tastebud-beige">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{t("savedRecipesTitle")}</h1>
        
        {savedRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium mb-4">{t("noSavedRecipes")}</h2>
            <Link to="/">
              <Button className="bg-tastebud-orange hover:bg-opacity-90">
                {t("startExploring")}
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default SavedRecipes;
