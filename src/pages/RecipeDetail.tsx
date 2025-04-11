
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import { Clock, User, Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { getRecipeById, getSubstitutions } from "@/lib/recipeData";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [savedRecipes, setSavedRecipes] = useState<number[]>(() => {
    const saved = localStorage.getItem("savedRecipes");
    return saved ? JSON.parse(saved) : [];
  });
  
  const recipeId = parseInt(id || "0");
  const recipe = getRecipeById(recipeId);
  
  const isSaved = savedRecipes.includes(recipeId);
  
  useEffect(() => {
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes]);
  
  const toggleSave = () => {
    if (isSaved) {
      setSavedRecipes(savedRecipes.filter(id => id !== recipeId));
      toast({
        title: t("recipeUnsaved"),
      });
    } else {
      setSavedRecipes([...savedRecipes, recipeId]);
      toast({
        title: t("recipeSaved"),
      });
    }
  };
  
  if (!recipe) {
    return (
      <div className="min-h-screen bg-tastebud-beige">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe not found</h1>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-tastebud-beige">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 sm:h-80 md:h-96 overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{t("prepTime")}: {recipe.prepTime} {t("minutes")}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{t("cookTime")}: {recipe.cookTime} {t("minutes")}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{t("servings")}: {recipe.servings}</span>
              </div>
            </div>
            
            <Button 
              onClick={toggleSave}
              variant={isSaved ? "outline" : "default"}
              className={isSaved ? "border-tastebud-orange text-tastebud-orange" : "bg-tastebud-orange hover:bg-opacity-90"}
            >
              {isSaved ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  {t("unsaveRecipe")}
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  {t("saveRecipe")}
                </>
              )}
            </Button>
            
            <Tabs defaultValue="ingredients" className="mt-8">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="ingredients">{t("ingredients")}</TabsTrigger>
                <TabsTrigger value="instructions">{t("instructions")}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ingredients">
                <div className="space-y-6">
                  <ul className="space-y-3 large-text">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-tastebud-green text-white mr-3 mt-1 flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </span>
                        <div>
                          <span>{ingredient}</span>
                          
                          {getSubstitutions(ingredient).length > 0 && (
                            <div className="mt-1 mb-3">
                              <p className="text-sm text-gray-500 font-medium">{t("substitutions")}:</p>
                              <ul className="list-disc pl-5 text-sm text-gray-600">
                                {getSubstitutions(ingredient).map((sub, i) => (
                                  <li key={i}>{sub}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="instructions">
                <ol className="list-decimal pl-5 recipe-instructions large-text">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;
