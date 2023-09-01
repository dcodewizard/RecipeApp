import {
  ADD_RECIPE_FAILURE,
  ADD_RECIPE_SUCCESS
} from "../constants/recipeConstants";

const initialState = {
  cost: 0,
  error: {}
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE_SUCCESS:
      return {
        cost: action.cost.toFixed(3),
      };

    case ADD_RECIPE_FAILURE:
      return {
        error: action.error
      };

    default:
      return state;
  }
};
