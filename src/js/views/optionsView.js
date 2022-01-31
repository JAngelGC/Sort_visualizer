import { async } from "regenerator-runtime";

class OptionsViews {
  _parentElement = document.querySelector(".options");

  addHandlerSelectAlgorithm(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--option");
      if (!btn) return;

      const titleAlgorithm = document.querySelector("#current-algorithm");
      titleAlgorithm.textContent = btn.textContent;

      handler(btn.id);
    });
  }

  passCurrentAlgorithm() {
    return document.querySelector("#current-algorithm").id;
  }
}

export default new OptionsViews();
