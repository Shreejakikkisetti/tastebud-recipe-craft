
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Utensils } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold text-tastebud-orange"
        >
          <Utensils className="h-6 w-6" />
          <span>TasteBud</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-gray-600">
          <Link to="/" className="text-lg hover:text-tastebud-orange transition-colors">
            {t('home')}
          </Link>
          <Link to="/saved" className="text-lg hover:text-tastebud-orange transition-colors">
            {t('savedRecipes')}
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
