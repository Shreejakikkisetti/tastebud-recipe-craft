
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Clock } from "lucide-react";
import { Recipe } from "@/lib/recipeData";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { t } = useLanguage();
  const { id, title, image, prepTime, cookTime } = recipe;

  return (
    <Link to={`/recipe/${id}`}>
      <div className="recipe-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{prepTime + cookTime} {t("minutes")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
