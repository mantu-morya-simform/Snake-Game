import { cells, grid, snake } from "../Constraint/gameData";
import { randomFood } from "./getRandomFood";

export function drawFoodSnake() {
  //draw snake
  snake.forEach((part) => {
    const snakePartIndex = part.y * grid + part.x;
    cells[snakePartIndex].classList.add("snake");
  });

  //draw food
  let foodIndex = randomFood.y * grid + randomFood.x;
  cells[foodIndex].classList.add("food");
}
