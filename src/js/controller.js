import * as model from "./model.js";
import sortView from "./views/sortView.js";

import "core-js/stable"; // Polyfilling everthing else
import "regenerator-runtime/runtime"; // Polyfilling async await
import { async } from "regenerator-runtime";
import buttonsView from "./views/buttonsView.js";

// if (module.hot) {
//   module.hot.accept();
// }

const controlCreateArray = function () {
  try {
    model.createElements();
    model.shuffleArray();
    console.log(model.state.array);

    sortView.render(model.state.array);
  } catch (err) {
    console.error(`💥💥💥 ${err}`);
  }
};

const controlShuffleArray = function () {
  model.shuffleArray();
  sortView.update(model.state.array);
};

const controlSortArray = function () {
  // model["bubbleSort"]();
  model[`${model.state.currentAlg}`]();
  sortView.renderAnimations(model.state.arrayAnimations);
  model.clearArrayAnimation();
};

const init = function () {
  controlCreateArray();
  buttonsView.addHandlerButtonSort(controlSortArray);
  buttonsView.addHandlerButtonShuffle(controlShuffleArray);
};

init();
console.log("siuuuu");
