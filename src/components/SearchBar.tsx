
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (ingredients: string[]) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { t } = useLanguage();
  const [ingredientInput, setIngredientInput] = useState("");

  const handleSearch = () => {
    if (!ingredientInput.trim()) return;
    
    const ingredients = ingredientInput
      .split(",")
      .map(i => i.trim())
      .filter(Boolean);
    
    if (ingredients.length > 0) {
      onSearch(ingredients);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-tastebud-orange focus:border-transparent pr-12"
            placeholder={t("searchPlaceholder")}
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <Button 
          onClick={handleSearch}
          className="bg-tastebud-orange hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-lg text-lg h-auto"
        >
          {t("searchButton")}
        </Button>
      </div>
      {ingredientInput.trim() === "" && (
        <p className="text-gray-500 mt-2 text-center">{t("noIngredientsMessage")}</p>
      )}
    </div>
  );
};

export default SearchBar;
