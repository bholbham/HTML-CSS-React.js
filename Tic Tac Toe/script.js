const result = document.querySelector(".player-count p");
const newGame = document.querySelector(".restart-game");
const board = document.querySelector(".table");

const items = document.querySelectorAll(".grid-items");

let counter = 0;
const arr = Array(8).fill(-1);
let winner = "";

const isEqual = (arr) => {
  for (let i = 0; i < 9; i += 3) {
    if (
      (arr[i] !== -1 && arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) ||
      (arr[i / 3] !== -1 &&
        arr[i / 3] === arr[i / 3 + 3] &&
        arr[i / 3 + 3] === arr[i / 3 + 6]) //handling the columns
    ) {
      winner = arr[i];
      return true;
    }
  }

  if (arr[0] !== -1 && arr[0] === arr[4] && arr[4] === arr[8]) {
    winner = arr[0];
    return true;
  }

  if (arr[2] !== -1 && arr[2] === arr[4] && arr[4] === arr[6]) {
    winner = arr[2];
    return true;
  }
  return false;
};

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    //check for a existing winner case.
    if (winner) {
      return;
    }

    let content = items[i].textContent;
    if (content === "") {
      if (counter % 2 == 0) {
        items[i].textContent = "X";
        arr[i] = 1;
      } else {
        items[i].textContent = "O";
        arr[i] = 0;
      }
      counter++;
    }

    if (counter >= 4) {
      if (isEqual(arr)) {
        if (winner == 1) {
          result.innerHTML = "Winner Player - X";
        } else {
          result.innerHTML = "Winner Player - O";
        }
        // console.log("Game is Over");
      } else if (counter === 9) {
        result.innerHTML = "Game Drawn!";
      }
    }
  });
}

newGame.addEventListener("click", function () {
  for (let i = 0; i < items.length; i++) {
    items[i].textContent = "";
  } //removing all the content of the grid-items
  counter = 0;
  arr.fill(-1);
  winner = "";
  result.innerHTML = "Winner Player";
});
