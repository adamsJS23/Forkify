export const state = {
  recipe: {},
  search: {},
  bookmarks: '',
};

export async function loadRecipe(id) {
  try {
    if (!id) return;

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?`
    );
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message}, ${response.status}`);

    const { recipe } = data.data;
    // console.log(recipe)
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
