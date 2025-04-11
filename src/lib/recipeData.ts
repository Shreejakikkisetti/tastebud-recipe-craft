
export interface Recipe {
  id: number;
  title: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    ingredients: [
      "12 oz pasta",
      "4 cloves garlic, minced",
      "2 tbsp butter",
      "1 cup heavy cream",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Fresh parsley, chopped"
    ],
    instructions: [
      "Cook pasta according to package instructions until al dente.",
      "While pasta is cooking, melt butter in a large pan over medium heat.",
      "Add minced garlic and sauté until fragrant, about 1 minute.",
      "Pour in the heavy cream and simmer for 5 minutes until it starts to thicken.",
      "Stir in parmesan cheese until melted and smooth.",
      "Drain pasta and add it to the sauce, tossing to coat evenly.",
      "Season with salt and pepper to taste.",
      "Serve garnished with fresh parsley."
    ],
    tags: ["pasta", "vegetarian", "dinner", "quick"]
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    ingredients: [
      "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
      "2 tbsp vegetable oil",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "3 tbsp soy sauce",
      "1 tbsp honey",
      "1 tsp sesame oil",
      "2 cups cooked rice"
    ],
    instructions: [
      "Prepare all vegetables by washing and cutting them into bite-sized pieces.",
      "Heat vegetable oil in a large wok or pan over high heat.",
      "Add garlic and ginger, stir for 30 seconds until fragrant.",
      "Add vegetables and stir-fry for 4-5 minutes until they begin to soften but still retain some crunch.",
      "In a small bowl, mix soy sauce, honey, and sesame oil.",
      "Pour sauce over vegetables and toss to coat evenly.",
      "Cook for another 1-2 minutes until sauce is slightly thickened.",
      "Serve hot over cooked rice."
    ],
    tags: ["vegetarian", "healthy", "quick", "asian"]
  },
  {
    id: 3,
    title: "Classic Pancakes",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80",
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 tsp baking powder",
      "1 tsp salt",
      "1 tbsp white sugar",
      "1 1/4 cups milk",
      "1 egg",
      "3 tbsp butter, melted",
      "Maple syrup for serving"
    ],
    instructions: [
      "In a large bowl, sift together flour, baking powder, salt, and sugar.",
      "Make a well in the center and pour in milk, egg, and melted butter.",
      "Mix until smooth and no lumps remain.",
      "Heat a lightly oiled griddle or frying pan over medium-high heat.",
      "Pour approximately 1/4 cup of batter onto the griddle for each pancake.",
      "Cook until bubbles form on the surface, then flip and cook until browned on the other side.",
      "Serve hot with maple syrup and butter if desired."
    ],
    tags: ["breakfast", "vegetarian", "quick", "family"]
  },
  {
    id: 4,
    title: "Simple Garden Salad",
    image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    ingredients: [
      "4 cups mixed salad greens",
      "1 cucumber, sliced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, thinly sliced",
      "1/4 cup olive oil",
      "2 tbsp balsamic vinegar",
      "1 tsp honey",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Wash and dry all produce thoroughly.",
      "In a large salad bowl, combine greens, cucumber, cherry tomatoes, and red onion.",
      "In a small bowl, whisk together olive oil, balsamic vinegar, honey, salt, and pepper.",
      "Pour dressing over salad just before serving and toss to coat evenly.",
      "Serve immediately as a side dish or add protein of choice to make it a main course."
    ],
    tags: ["salad", "healthy", "vegetarian", "quick", "no-cook"]
  },
  {
    id: 5,
    title: "Homemade Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80",
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "1 tsp salt",
      "1 tsp sugar",
      "2 1/4 tsp active dry yeast",
      "1 cup warm water",
      "2 tbsp olive oil",
      "1/2 cup pizza sauce",
      "2 cups shredded mozzarella cheese",
      "Toppings of your choice (pepperoni, bell peppers, mushrooms, etc.)"
    ],
    instructions: [
      "In a large bowl, combine flour, salt, sugar, and yeast.",
      "Add warm water and olive oil, mix until a soft dough forms.",
      "Knead dough on a floured surface for about 5 minutes until smooth and elastic.",
      "Place in a greased bowl, cover, and let rise for 30 minutes in a warm place.",
      "Preheat oven to 450°F (230°C).",
      "Roll dough out on a floured surface to your desired thickness.",
      "Transfer to a pizza pan or baking sheet.",
      "Spread pizza sauce over dough, leaving a small border around the edges.",
      "Sprinkle with cheese and add your favorite toppings.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Let cool slightly before slicing and serving."
    ],
    tags: ["dinner", "family", "customizable"]
  },
  {
    id: 6,
    title: "Berry Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1526424382096-74a93e105682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    ingredients: [
      "1 frozen banana",
      "1 cup frozen mixed berries",
      "1/2 cup Greek yogurt",
      "1/4 cup almond milk",
      "1 tbsp honey",
      "Toppings: sliced fresh fruit, granola, chia seeds, coconut flakes"
    ],
    instructions: [
      "In a blender, combine frozen banana, mixed berries, Greek yogurt, almond milk, and honey.",
      "Blend until smooth and creamy, adding more almond milk if needed to reach desired consistency.",
      "Pour into a bowl.",
      "Top with fresh fruit, granola, chia seeds, and coconut flakes.",
      "Serve immediately and enjoy with a spoon."
    ],
    tags: ["breakfast", "healthy", "vegetarian", "quick", "no-cook"]
  }
];

export const findRecipesByIngredients = (ingredients: string[]): Recipe[] => {
  if (!ingredients.length) return [];
  
  const normalizedIngredients = ingredients.map(i => i.toLowerCase().trim());
  
  return mockRecipes.filter(recipe => {
    const recipeIngredients = recipe.ingredients.map(i => i.toLowerCase());
    return normalizedIngredients.some(ingredient => 
      recipeIngredients.some(recipeIngredient => recipeIngredient.includes(ingredient))
    );
  });
};

export const getRecipeById = (id: number): Recipe | undefined => {
  return mockRecipes.find(recipe => recipe.id === id);
};

export const getSubstitutions = (ingredient: string): string[] => {
  const substitutions: Record<string, string[]> = {
    "butter": ["olive oil", "coconut oil", "applesauce", "Greek yogurt"],
    "milk": ["almond milk", "soy milk", "oat milk", "coconut milk"],
    "eggs": ["applesauce", "mashed banana", "flaxseed mixed with water"],
    "flour": ["almond flour", "coconut flour", "oat flour", "gluten-free flour blend"],
    "sugar": ["honey", "maple syrup", "coconut sugar", "stevia"],
    "sour cream": ["Greek yogurt", "coconut cream", "cottage cheese"],
    "heavy cream": ["coconut cream", "evaporated milk"],
    "breadcrumbs": ["crushed crackers", "rolled oats", "crushed cornflakes"],
    "rice": ["quinoa", "cauliflower rice", "bulgur", "couscous"],
    "pasta": ["zucchini noodles", "spaghetti squash", "rice noodles"]
  };
  
  // Look for matches in the substitution dictionary
  for (const [key, substitutes] of Object.entries(substitutions)) {
    if (ingredient.toLowerCase().includes(key.toLowerCase())) {
      return substitutes;
    }
  }
  
  return [];
};
