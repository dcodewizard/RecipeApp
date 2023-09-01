import { addRecipeApi } from "../../api/recipe";
import { ADD_RECIPE_SUCCESS, ADD_RECIPE_FAILURE } from "../../constants/recipeConstants";
import { SUCCESSFUL, CREATED } from "../../constants/statusCodes"

const success = (cost) => ({
  type: ADD_RECIPE_SUCCESS,
  cost,
});

const failure = (error) => ({
  type: ADD_RECIPE_FAILURE,
  error,
});

export const addRecipe =
  (
    recipeName,
    ingredientList
  ) =>
  (dispatch) => {
    addRecipeApi(
      recipeName,
      ingredientList
    )
    .then((response) => {
      if (response.status === SUCCESSFUL || response.status === CREATED) {
        dispatch(success(response.data.data.attributes.cost));
      } else {
        dispatch(failure(response));
      }
    })
    .catch((err) => {
      dispatch(failure(err.response.data));
    })
  };
