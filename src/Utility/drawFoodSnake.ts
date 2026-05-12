import { cells, food, grid, snake } from "../Constraint/gameData";
import appleImg from "../assets/apple.png";

export function drawFoodSnake() {
  cells.forEach((cell) => {
    cell.className = "cell";
    cell.innerHTML = "";
  });

  snake.forEach((part) => {
    const snakePartIndex = part.y * grid + part.x;
    cells[snakePartIndex].classList.add("snake");
  });

  const foodIndex = food.y * grid + food.x;
  cells[foodIndex].classList.add("food");
  cells[foodIndex].innerHTML =
    `<img class="food" src="${appleImg}" alt="apple_png" />`;
}
