/************************************************************************ */
/*********************MODEL, -STATE-BUSINESS LOGIC- HTTP LIBRARY**********/
/************************************************************************ */
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
/******Our state object ******/
export const state = {
  recipe: {},
  search: { query: '', results: [] },
  bookmarks: '',
};
/************************** */
export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}?`);
    console.log(data);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      ingredients: recipe.ingredients,
      image: recipe.image_url,
    };
  } catch (err) {
    throw err;
  }
}
/************************SEARCH FOR A RECIPE BUSINESS LOGIC******************** */

export async function loadSearchResult(query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
}
