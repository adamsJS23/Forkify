/************************************************************************ */
/*********************CONTROLLER, -APPLICATION LOGIC*************************/
/************************************************************************ */

import icons from 'url:../img/icons.svg';
import * as model from './model.js'; //Import everything and rename it
import RecipeView from './views/recipeView.js';
import SearchResultView from './views/searchResultView.js';
import SearchView from './views/searchView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<insert your key>

/************************************************** */
/***********CONTROL RECIPE LOADING***************** */
/************************************************** */
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
    RecipeView.renderError();
    console.error(err);
  }
}

/************************************************** */
/***********CONTROL SEARCH RESULT***************** */
/************************************************** */

async function controlSearchResult() {
  try {
    // Get search query
    const query = SearchView.getQuery();
    SearchResultView.renderSpinner();
    // Loading search result
    await model.loadSearchResult(query);

    if (model.state.search.results.length === 0) throw new Error();

    // Render Search result
    SearchResultView.render(model.state.search.results);
  } catch (err) {
    SearchResultView.renderError();
  }
}

function init() {
  RecipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResult);
}
init();
