import { cells, food, grid, snake } from "../Constraint/gameData";

export function drawFoodSnake() {
  cells.forEach((cell, index) => {
    cell.className = "cell";
    if (index % 2 === 0) {
      cell.classList.add("even");
    } else {
      cell.classList.add("odd");
    }
  });

  snake.forEach((part) => {
    const snakePartIndex = part.y * grid + part.x;
    cells[snakePartIndex].classList.add("snake");
  });

  const foodIndex = food.y * grid + food.x;
  cells[foodIndex].classList.add("food");
}
