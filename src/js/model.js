import { async } from "regenerator-runtime";
import { NUM_ELEMENTS } from "./config.js";

export const state = {
  isSorted: false,
  array: [],
  currentAlg: "bubbleSort",
  arrayAnimations: [],
};

export const createElements = function () {
  for (i = 0; i < NUM_ELEMENTS; i++) {
    state.array.push(i);
  }
};

export const shuffleArray = function () {
  state.array.sort(() => Math.random() - 0.5);
};

export const clearArrayAnimation = function () {
  state.arrayAnimations = [];
};

export const bubbleSort = function () {
  state.currentAlg = "bubbleSort";

  const sizeArr = state.array.length;
  for (let i = 0; i < sizeArr; i++) {
    for (let j = 0; j < sizeArr - i - 1; j++) {
      // [a[m], a[n]] = [a[n], a[m]]
      if (+state.array[j] > +state.array[j + 1]) {
        state.arrayAnimations.push([j, j + 1]);

        [state.array[j], state.array[j + 1]] = [
          state.array[j + 1],
          state.array[j],
        ];
      }
    }
  }
  console.log(state.array);
  console.log(state.arrayAnimations);
};
