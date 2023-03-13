import icons from 'url:../../img/icons.svg';
import View from './View.js';
class PaginationView extends View {
  // search: { query: '', results: [], resultPerPage: RESULT_PER_PAGE, page: 1 },

  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const pageNumber = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    const currPage = this._data.page;
    // We are on Page1 and there are others pages
    if (currPage === 1 && pageNumber > 1) {
      return `<button class="btn--inline pagination__btn--next" data-curr-page='${
        currPage + 1
      }'>
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
              </button>`;
    }
    // We are not on page1 and there other pages
    if (currPage > 1 && currPage < pageNumber) {
      return `<button class="btn--inline pagination__btn--prev" data-curr-page='${
        currPage - 1
      }'>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
              </button>
              <button class="btn--inline pagination__btn--next" data-curr-page='${
                currPage + 1
              }'>
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
              </button>`;
    }
    // We are on the last page and there other pages
    if (currPage === pageNumber && pageNumber > 1) {
      return `<button class="btn--inline pagination__btn--prev" data-curr-page='${
        currPage - 1
      }'>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
              </button>
              `;
    }
    // Page number is 1 and there not other pages
    if (pageNumber === 1) return ``;
  }

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const { currPage } = btn.dataset;
      handler(+currPage);
    });
  }
}

export default new PaginationView();
