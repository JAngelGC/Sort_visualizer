import { ANIMATION_SPEED_MS, NUM_ELEMENTS } from "../config.js";

class SortView {
  _parentElement = document.querySelector(".container--sort");
  heightContainer = this._parentElement.style.getPropertyValue("height");
  // console.log(heightContainer);
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
        let el1 = Number.parseFloat(allEl[mov[0]].style.height, 10);

        let el2 = Number.parseFloat(allEl[mov[1]].style.height, 10);

        console.log(i);
        [allEl[mov[0]].style.height, allEl[mov[1]].style.height] = [
          `${el2}px`,
          `${el1}px`,
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
    const heightContainer = Number.parseFloat(
      getComputedStyle(this._parentElement).height,
      10
    );
    const heightPerElement = heightContainer / NUM_ELEMENTS;

    const widthContainer = Number.parseFloat(
      getComputedStyle(this._parentElement).width,
      10
    );

    const widthPerElement = widthContainer / NUM_ELEMENTS;

    console.log("heightContainer", heightContainer);
    console.log("heightPerElement: ", heightPerElement);
    return `
      <div class="element" style="left: ${
        indexArr * NUM_ELEMENTS
      }%; width: ${widthPerElement}px; height: ${
      (indexArr + 1) * heightPerElement
    }px ;"></div>`;
  }
}

export default new SortView();
