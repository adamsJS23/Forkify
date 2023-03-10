const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<insert your key>
async function loadRecipe() {
    try {
        // const recipeId = '5ed6604591c37cdc054bc886';
        const recipeId = "5ed6604591c37cdc054bcd09";
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?`);
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.message}, ${response.status}`);
        let { recipe  } = data.data;
        // console.log(recipe)
        return {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            cookingTime: recipe.cooking_time,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            ingredients: recipe.ingredients,
            image: recipe.image_url
        };
    } catch (err) {
        console.log(err.message);
    }
}
async function renderRecipe(recipe) {
    const data = await loadRecipe();
    console.log(data);
    const markUp = `<figure class="recipe__fig">
                      <img src="${data.image}" alt="${data.title}" class="recipe__img" />
                                  <h1 class="recipe__title">
                                    <span>${data.title}</span>
                                  </h1>
                                </figure>

                                <div class="recipe__details">
                                  <div class="recipe__info">
                                    <svg class="recipe__info-icon">
                                      <use href="src/img/icons.svg#icon-clock"></use>
                                    </svg>
                                    <span class="recipe__info-data recipe__info-data--minutes">${data.cookingTime}</span>
                                    <span class="recipe__info-text">minutes</span>
                                  </div>
                                  <div class="recipe__info">
                                    <svg class="recipe__info-icon">
                                      <use href="src/img/icons.svg#icon-users"></use>
                                    </svg>
                                    <span class="recipe__info-data recipe__info-data--people">${data.servings}</span>
                                    <span class="recipe__info-text">servings</span>

                                    <div class="recipe__info-buttons">
                                      <button class="btn--tiny btn--increase-servings">
                                        <svg>
                                          <use href="src/img/icons.svg#icon-minus-circle"></use>
                                        </svg>
                                      </button>
                                      <button class="btn--tiny btn--increase-servings">
                                        <svg>
                                          <use href="src/img/icons.svg#icon-plus-circle"></use>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>

                                  <div class="recipe__user-generated">
                                    <svg>
                                      <use href="src/img/icons.svg#icon-user"></use>
                                    </svg>
                                  </div>
                                  <button class="btn--round">
                                    <svg class="">
                                      <use href="${data.sourceUrl}"></use>
                                    </svg>
                                  </button>
                                </div>

                                <div class="recipe__ingredients">
                                  <h2 class="heading--2">Recipe ingredients</h2>
                                  <ul class="recipe__ingredient-list">
                                                  ${data.ingredients.map(renderIngredients).join("")}
                                  </ul>
                                </div>

                                <div class="recipe__directions">
                                  <h2 class="heading--2">How to cook it</h2>
                                  <p class="recipe__directions-text">
                                    This recipe was carefully designed and tested by
                                    <span class="recipe__publisher">${data.publisher}</span>. Please check out
                                    directions at their website.
                                  </p>
                                  <a
                                    class="btn--small recipe__btn"
                                    href="${data.sourceUrl}"
                                  >
                                    <span>Directions</span>
                                    <svg class="search__icon">
                                      <use href="src/img/icons.svg#icon-arrow-right"></use>
                                    </svg>
                                  </a>
                    </div>`;
    recipeContainer.insertAdjacentHTML("afterbegin", markUp);
}
function clearContainer() {
    recipeContainer.innerHTML = "";
}
function renderIngredients(ingredient) {
    let { unit , quantity , description  } = ingredient;
    return `<li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="src/img/icons.svg#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${quantity ? quantity : ""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${unit ? unit : ""}</span>
            ${description}
          </div>
        </li>`;
}
loadRecipe();
clearContainer();
renderRecipe();

//# sourceMappingURL=index.62406edb.js.map
