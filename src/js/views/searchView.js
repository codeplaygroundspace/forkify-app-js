class SearchView {
  #parentEl = document.querySelector(".search");
  getQuery() {
    const query = this.#parentEl.querySelector(".search__field").value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentEl.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();

// class SearchView {
//   _parentEl = document.querySelector('.search');

//   getQuery() {
//     const query = this._parentEl.querySelector('.search__field').value;
//     this._clearInput();
//     return query;
//   }

//   _clearInput() {
//     this._parentEl.querySelector('.search__field').value = '';
//   }

//   addHandlerSearch(handler) {
//     this._parentEl.addEventListener('submit', function (e) {
//       e.preventDefault();
//       handler();
//     });
//   }
// }

// export default new SearchView();
