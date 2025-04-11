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
  },
  {
    id: 7,
    title: "Spicy Black Bean Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      "2 cans (15 oz each) black beans, drained and rinsed",
      "1 tbsp olive oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tbsp chili powder",
      "1 tsp cumin",
      "1/2 tsp paprika",
      "1/4 tsp cayenne pepper (optional, for extra heat)",
      "Salt and pepper to taste",
      "8 small corn or flour tortillas",
      "Toppings: avocado, diced tomatoes, shredded lettuce, cheese, sour cream, lime wedges"
    ],
    instructions: [
      "Heat olive oil in a large pan over medium heat.",
      "Add diced onion and cook for 3-4 minutes until softened.",
      "Add garlic and cook for 30 seconds until fragrant.",
      "Add black beans, chili powder, cumin, paprika, cayenne pepper, salt, and pepper. Stir well.",
      "Cook for 5-7 minutes, stirring occasionally. Mash some of the beans with the back of a spoon for a creamier texture.",
      "Warm tortillas in a dry pan or microwave.",
      "Spoon the black bean mixture onto the tortillas.",
      "Add your favorite toppings and serve with lime wedges on the side."
    ],
    tags: ["vegetarian", "vegan", "mexican", "quick", "dinner"]
  },
  {
    id: 8,
    title: "One-Pot Lemon Garlic Chicken Pasta",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "12 oz fettuccine or linguine pasta",
      "1 lb boneless, skinless chicken breasts, cut into bite-sized pieces",
      "2 tbsp olive oil",
      "4 cloves garlic, minced",
      "1/2 tsp red pepper flakes (optional)",
      "2 cups chicken broth",
      "1 cup water",
      "Zest and juice of 1 lemon",
      "1/2 cup heavy cream",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Fresh parsley, chopped, for garnish"
    ],
    instructions: [
      "Heat olive oil in a large pot or deep skillet over medium-high heat.",
      "Season chicken pieces with salt and pepper, then add to the pot. Cook for 4-5 minutes until golden on the outside.",
      "Add minced garlic and red pepper flakes, and cook for 30 seconds until fragrant.",
      "Add chicken broth, water, lemon zest, and pasta to the pot. Stir to combine.",
      "Bring to a boil, then reduce heat to medium-low and cover. Simmer for about 10 minutes, stirring occasionally, until pasta is al dente and most of the liquid is absorbed.",
      "Stir in lemon juice, heavy cream, and parmesan cheese. Cook for another 2-3 minutes until the sauce thickens slightly.",
      "Taste and adjust seasoning as needed.",
      "Garnish with fresh parsley before serving."
    ],
    tags: ["pasta", "chicken", "dinner", "one-pot"]
  },
  {
    id: 9,
    title: "Mediterranean Chickpea Salad",
    image: "https://images.unsplash.com/photo-1511357840105-748c95f0a7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    ingredients: [
      "2 cans (15 oz each) chickpeas, drained and rinsed",
      "1 English cucumber, diced",
      "1 pint cherry tomatoes, halved",
      "1 red bell pepper, diced",
      "1/2 red onion, finely diced",
      "1/2 cup kalamata olives, pitted and halved",
      "4 oz feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "For the dressing:",
      "1/4 cup extra virgin olive oil",
      "2 tbsp lemon juice",
      "1 tbsp red wine vinegar",
      "1 clove garlic, minced",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine chickpeas, cucumber, cherry tomatoes, red bell pepper, red onion, olives, feta cheese, and parsley.",
      "In a small bowl, whisk together olive oil, lemon juice, red wine vinegar, minced garlic, oregano, salt, and pepper.",
      "Pour the dressing over the salad ingredients and toss gently to combine.",
      "Let the salad sit for at least 10 minutes before serving to allow the flavors to meld.",
      "Serve chilled or at room temperature."
    ],
    tags: ["salad", "vegetarian", "mediterranean", "healthy", "no-cook"]
  },
  {
    id: 10,
    title: "Apple Cinnamon Overnight Oats",
    image: "https://images.unsplash.com/photo-1502529496674-93426f82e1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    ingredients: [
      "1 cup rolled oats",
      "1 cup milk (dairy or plant-based)",
      "1/4 cup Greek yogurt",
      "1 apple, diced",
      "2 tbsp maple syrup or honey",
      "1 tbsp chia seeds",
      "1/2 tsp ground cinnamon",
      "1/4 tsp ground nutmeg",
      "Pinch of salt",
      "Toppings: chopped walnuts, additional diced apple, drizzle of honey"
    ],
    instructions: [
      "In a medium bowl, combine rolled oats, milk, Greek yogurt, chia seeds, maple syrup, cinnamon, nutmeg, and salt. Stir well.",
      "Fold in the diced apple, reserving some for topping if desired.",
      "Divide the mixture between two jars or containers with lids.",
      "Cover and refrigerate overnight or for at least 4 hours.",
      "Before serving, stir the oats and add additional milk if a thinner consistency is desired.",
      "Top with chopped walnuts, additional diced apple, and a drizzle of honey."
    ],
    tags: ["breakfast", "vegetarian", "no-cook", "make-ahead"]
  },
  {
    id: 11,
    title: "Honey Garlic Glazed Salmon",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "2 salmon fillets (about 6 oz each)",
      "Salt and pepper to taste",
      "1 tbsp olive oil",
      "For the glaze:",
      "3 tbsp honey",
      "3 cloves garlic, minced",
      "1 tbsp soy sauce",
      "1 tbsp lemon juice",
      "1/2 tsp red pepper flakes (optional)",
      "Green onions, sliced, for garnish"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Pat salmon fillets dry with paper towels and season both sides with salt and pepper.",
      "In a small bowl, whisk together honey, minced garlic, soy sauce, lemon juice, and red pepper flakes.",
      "Heat olive oil in an oven-safe skillet over medium-high heat.",
      "Place salmon skin-side down in the skillet and cook for 3 minutes.",
      "Spoon half of the honey garlic glaze over the salmon fillets.",
      "Transfer the skillet to the preheated oven and bake for 8-10 minutes, until salmon is cooked through and flakes easily with a fork.",
      "Remove from oven and spoon the remaining glaze over the salmon.",
      "Garnish with sliced green onions before serving."
    ],
    tags: ["seafood", "dinner", "healthy", "quick"]
  },
  {
    id: 12,
    title: "Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    ingredients: [
      "1 1/2 cups Arborio rice",
      "6 cups vegetable or chicken broth, warmed",
      "8 oz mushrooms (cremini, shiitake, or a mix), sliced",
      "1 small onion, finely diced",
      "3 cloves garlic, minced",
      "1/2 cup dry white wine",
      "2 tbsp butter",
      "2 tbsp olive oil",
      "1/2 cup grated Parmesan cheese",
      "2 tbsp fresh thyme leaves",
      "Salt and pepper to taste",
      "Fresh parsley, chopped, for garnish"
    ],
    instructions: [
      "In a large pot or saucepan, heat 1 tablespoon olive oil over medium heat.",
      "Add sliced mushrooms and cook until browned and tender, about 5-7 minutes. Remove from pot and set aside.",
      "In the same pot, heat the remaining olive oil and add diced onion. Cook until softened, about 3-4 minutes.",
      "Add minced garlic and cook for 30 seconds until fragrant.",
      "Add Arborio rice and stir for 1-2 minutes until the grains are coated with oil and slightly translucent at the edges.",
      "Pour in the white wine and stir until absorbed.",
      "Begin adding the warm broth, one ladleful at a time, stirring frequently. Wait until each addition is mostly absorbed before adding more.",
      "Continue this process for about 20-25 minutes, until the rice is creamy and tender but still has a slight bite (al dente).",
      "Stir in the cooked mushrooms, butter, Parmesan cheese, and thyme leaves.",
      "Season with salt and pepper to taste. If the risotto seems too thick, add a splash more broth.",
      "Remove from heat, cover, and let stand for 2 minutes.",
      "Serve hot, garnished with fresh parsley and additional Parmesan if desired."
    ],
    tags: ["vegetarian", "dinner", "italian", "comfort food"]
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
