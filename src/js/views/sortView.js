import { ANIMATION_SPEED_MS, NUM_ELEMENTS } from "../config.js";

class SortView {
  _parentElement = document.querySelector(".container--sort");
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  newUpdate(arrAnimation) {
    const allEl = [...document.querySelectorAll(".element")];
    console.log(allEl);

    arrAnimation.forEach((mov, i) => {
      setTimeout(function () {
        let el1 = Number.parseInt(allEl[mov[0]].style.height, 10);

        let el2 = Number.parseInt(allEl[mov[1]].style.height, 10);

        console.log(i);
        [allEl[mov[0]].style.height, allEl[mov[1]].style.height] = [
          `${el2}%`,
          `${el1}%`,
        ];
      }, i * ANIMATION_SPEED_MS);
    });
  }

  // update(data) {
  //   this._data = data;
  //   const newMarkup = this._generateMarkup(data);

  //   const newDOM = document.createRange().createContextualFragment(newMarkup);
  //   const newElements = Array.from(newDOM.querySelectorAll("*"));
  //   const curElements = Array.from(this._parentElement.querySelectorAll("*"));

  //   newElements.forEach((newEl, i) => {
  //     const curEl = curElements[i];
  //     // console.log(curEl, newEl.isEqualNode(curEl));

  //     // Updates changed TEXT

  //     if (
  //       !newEl.isEqualNode(curEl) &&
  //       newEl.firstChild?.nodeValue.trim() !== ""
  //     ) {
  //       // console.log('-----------------', newEl.firstChild?.nodeValue.trim());
  //       curEl.style.height = newEl.style.height;
  //     }

  //     // Updates changed ATTRIBUTES
  //     if (!newEl.isEqualNode(curEl)) {
  //       Array.from(newEl.attributes).forEach((attr) =>
  //         curEl.setAttribute(attr.name, attr.value)
  //       );
  //     }
  //   });
  // }

  _generateMarkup(arr) {
    return arr.map((el) => this._generateMarkupElement(el)).join("");
  }

  _generateMarkupElement(indexArr) {
    return `
      <div class="element" style="left: ${
        indexArr * NUM_ELEMENTS
      }%; width: 10%; height: ${(indexArr + 1) * NUM_ELEMENTS}%;"></div>`;
  }
}

export default new SortView();
