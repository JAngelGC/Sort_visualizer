import { ANIMATION_SPEED_MS, NUM_ELEMENTS } from "../config.js";

class SortView {
  _parentElement = document.querySelector(".container--sort");
  _heightContainer = Number.parseFloat(
    getComputedStyle(this._parentElement).height,
    10
  );
  _heightPerElement = this._heightContainer / NUM_ELEMENTS;

  _widthContainer = Number.parseFloat(
    getComputedStyle(this._parentElement).width,
    10
  );

  _widthPerElement = this._widthContainer / NUM_ELEMENTS;

  _data;

  render(data) {
    this._parentElement.innerHTML = "";
    this._data = data;
    const markup = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderAnimations(arrAnimation) {
    const allEl = [...document.querySelectorAll(".element")];
    // console.log(allEl);
    // console.log(this._widthContainer);
    // console.log(this._widthPerElement);
    // console.log("siuuu");

    arrAnimation.forEach((mov, i) => {
      setTimeout(function () {
        // allEl[mov[0]].classList.toggle("element--current");
        let el1 = Number.parseFloat(allEl[mov[0]].style.height, 10);

        let el2 = Number.parseFloat(allEl[mov[1]].style.height, 10);

        // console.log(i);
        [allEl[mov[0]].style.height, allEl[mov[1]].style.height] = [
          `${el2}px`,
          `${el1}px`,
        ];
        // allEl[mov[0]].classList.toggle("element--current");
      }, i * ANIMATION_SPEED_MS);
    });
  }

  _generateMarkup(arr) {
    return arr.map((el) => this._generateMarkupElement(el)).join("");
  }

  _generateMarkupElement(indexArr) {
    return `
      <div class="element" style="left: ${indexArr * NUM_ELEMENTS}%; width:
       ${(this._widthPerElement / this._widthContainer) * 100}%; height: ${
      (indexArr + 1) * this._heightPerElement
    }px ;"></div>`;
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup(data);

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Updates changed TEXT

      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        // console.log('-----------------', newEl.firstChild?.nodeValue.trim());
        curEl.style.height = newEl.style.height;
      }

      // Updates changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }
}

export default new SortView();
