import { NUM_ELEMENTS } from "../config.js";

class ButtonsView {
  _parentElement = document.querySelector(".container--icons");

  addHandlerButtonSort(handler) {
    const btn = this._parentElement.querySelector(".btn--sort");
    btn.addEventListener("click", handler);
  }

  addHandlerButtonShuffle(handler) {
    const btn = this._parentElement.querySelector(".btn--shuffle");
    btn.addEventListener("click", handler);
  }
}

export default new ButtonsView();
