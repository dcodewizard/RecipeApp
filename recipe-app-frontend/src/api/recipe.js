import { post } from "../server";

export const addRecipeApi = (
  recipeName,
  ingredientList
) => {
  const addRecipeData = {
    recipe:{
      name: recipeName,
      ingredients_attributes: ingredientList
    }
  };

  return post(
    `http://localhost:3002/api/v1/recipes`,
    addRecipeData
  );
};
