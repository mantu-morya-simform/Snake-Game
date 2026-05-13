import { direction, food, grid, setFood, snake } from "../Constraint/gameData";
import { drawFoodSnake } from "./drawFoodSnake";
import { getRandomFood } from "./getRandomFood";

export function moveSnake() {
  let head = { ...snake[0] };

  if (direction === "RIGHT") head.x++;
  if (direction === "LEFT") head.x--;
  if (direction === "UP") head.y--;
  if (direction === "DOWN") head.y++;

  // wall collision
  if (head.x < 0 || head.x >= grid || head.y < 0 || head.y >= grid) {
    alert("Game Over...");
    window.location.reload();
    return;
  }

  // self collision
  for (let part of snake) {
    if (part.x === head.x && part.y === head.y) {
      alert("Game Over");
      location.reload();
      return;
    }
  }

  snake.unshift(head);

  // food eating
  if (head.x === food.x && head.y === food.y) {
    setFood(getRandomFood());
  } else {
    snake.pop();
  }

  drawFoodSnake();
}
