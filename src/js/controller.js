/************************************************************************ */
/*********************CONTROLLER, -APPLICATION LOGIC*************************/
/************************************************************************ */


import icons from 'url:../img/icons.svg';
import * as model from './model.js'; //Import everything and rename it
import RecipeView from './views/recipeView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<insert your key>

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    // Checking if there is no id when the application is loaded
    if (!id) {
      // When the page is loaded for the first time we render this message to the user:
      // Start by searching for a recipe or an ingredient. Have fun!
      RecipeView.renderMessage();
      return;
    }

    RecipeView.renderSpinner();

    // Loading recipe data
    await model.loadRecipe(id);

    // Rendering the recipe in the the recipe view
    RecipeView.render(model.state.recipe);
  } catch (err) {
    RecipeView.renderError(err);
    console.error(err);
  }
}

function init() {
  RecipeView.hashchangeHandler(controlRecipes);
}
init();
