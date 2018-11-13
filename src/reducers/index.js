import { combineReducers } from 'redux'
import RecipeReducer from './recipe_reducer.js'
import RecipesReducer from './recipes_reducer.js'
import IngredientsReducer from './ingredients_reducer.js'


const rootReducer = combineReducers({
  recipe: RecipeReducer,
  recipes: RecipesReducer,
  ingredients: IngredientsReducer
});

export default rootReducer;
