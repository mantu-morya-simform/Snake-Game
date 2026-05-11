import { cells, grid, snake } from "../Constraint/gameData";
import { randomFood } from "./getRandomFood";

export function drawFoodSnake() {
  //add  class to odd and even for diff style
  cells.forEach((cell, index) => {
    cell.className = "cell";
    if (index % 2 === 0) {
      cell.classList.add("even");
    } else {
      cell.classList.add("odd");
    }
  });

  //draw snake
  snake.forEach((part) => {
    const snakePartIndex = part.y * grid + part.x;
    cells[snakePartIndex].classList.add("snake");
  });

  //draw food
  let foodIndex = randomFood.y * grid + randomFood.x;
  cells[foodIndex].classList.add("food");
}
