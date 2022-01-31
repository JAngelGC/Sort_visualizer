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

export const changeCurrentAlgorithm = function (curAlg) {
  state.currentAlg = curAlg;
};

export const bubbleSort = function () {
  // state.currentAlg = "bubbleSort";
  console.log("bubbleSort");

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

export const selectionSort = function () {
  console.log("selectionSort");

  let indCurMin;
  for (let i = 0; i < state.array.length; i++) {
    indCurMin = i;
    for (let j = 1 + i; j < state.array.length; j++) {
      if (state.array[j] < state.array[indCurMin]) {
        indCurMin = j;
      }
    }

    if (i != indCurMin) {
      state.arrayAnimations.push([i, indCurMin]);
      [state.array[i], state.array[indCurMin]] = [
        state.array[indCurMin],
        state.array[i],
      ];
    }
  }
  console.log(state.array);
};

export const insertionSort = function () {
  console.log("insertionSort");

  let i, key, j;
  for (i = 1; i < state.array.length; i++) {
    key = state.array[i];

    j = i;

    while (j > 0 && state.array[j - 1] > key) {
      state.arrayAnimations.push([j, j - 1]);
      state.array[j] = state.array[j - 1];
      j--;
    }

    state.array[j] = key;
  }
  console.log("insertion sort");
  console.log(state.array);
};
