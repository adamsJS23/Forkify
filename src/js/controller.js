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

async function controlRecipeLoading() {
  try {

    const id = window.location.hash.slice(1);

    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
    
    console.log(model.state.recipe);
  } catch (err) {
    RecipeView.renderMessage(err);
    console.error(err);
  }
}

function init() {
  RecipeView.hashchangeHandler(controlRecipeLoading);
}
init();
