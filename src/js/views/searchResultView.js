import View from './View.js';
import icons from 'url:../../img/icons.svg';

class SearchResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not found any recipe for your query. Please try again! :)';
  _message = '';

  render(data) {
    this._data = data;
    console.log(this._data);
    const markUp = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  _generateMarkup() {
    return this._data.map(this._generatePreview).join('');
  }

  _generatePreview(recipe) {
    return `<li class="preview">
                <a class="preview__link" href="#${recipe.id}">
                  <figure class="preview__fig">
                    <img src="${recipe.image}" alt="Test" />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${recipe.title}</h4>
                    <p class="preview__publisher">${recipe.publisher}</p>

                  </div>
                </a>
              </li>
            `;
  }
}

export default new SearchResultView();
