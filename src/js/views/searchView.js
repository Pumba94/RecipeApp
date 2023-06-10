class SearchView {
  _parentlEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentlEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentlEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentlEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
