const btnPlay = document.querySelector(".icon--play");
const containerSort = document.querySelector(".container--sort");

const arrEl = [];

// TODO (I don't understand it)
const shuffleArray = function () {
  arrEl.sort(() => Math.random() - 0.5);
};

for (i = 0; i < 10; i++) {
  let html = `<div class="element" style="left: ${
    i * 10
  }%; width: 10%; height: ${(i + 1) * 10}%;"></div>`;

  arrEl.push(html);
}
console.log(arrEl);

shuffleArray();

const updateElements = function () {
  for (i = 0; i < 10; i++) {
    containerSort.insertAdjacentHTML("afterbegin", arrEl[i]);
  }
};

updateElements();

// Selecting the elements from the html
const allEl = [...document.querySelectorAll(".element")];

console.log(allEl);

// console.log(allEl[0].style.height);

console.log(Number.parseInt(allEl[0].style.height, 10));
console.log(Number.parseInt(allEl[1].style.height, 10));

// console.log(allEl);

///////////////////////////////////////////////////
// Sorting algorithms

console.log("-------------------------");

// Bubble sort
const bubbleSort = function () {
  // We initialize this variable true to make sure the loop begins
  let swapped = true;
  for (let i = 0; i < allEl.length; i++) {
    // We change swapped to understand there hasn't been any changes

    // setTimeout(()=>{

    swapped = false;
    for (let j = 0; j < allEl.length - i - 1; j++) {
      // TODO corregir la comparacion para height

      let jPlus1 = j + 1;

      let el1 = Number.parseInt(allEl[j].style.height, 10);

      let el2 = Number.parseInt(allEl[j + 1].style.height, 10);

      // setTimeout(() => {
      if (el1 > el2) {
        console.log(el1);
        console.log(el2);

        // Changing UI
        allEl[j].style.height = `${el2}%`;
        allEl[j + 1].style.height = `${el1}%`;

        // let temp = allEl[j];
        // allEl[j] = allEl[jPlus1];
        // allEl[jPlus1] = temp;
        // swapped = true;
      }
      // }, 100);
    }
  }
};

btnPlay.addEventListener("click", function (e) {
  bubbleSort();
  // console.log('click');
});

console.log(allEl);

console.log(Number.parseInt(allEl[0].style.height, 10));
console.log(Number.parseInt(allEl[1].style.height, 10));

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
