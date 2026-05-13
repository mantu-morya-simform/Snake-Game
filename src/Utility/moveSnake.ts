import {
  direction,
  food,
  gameState,
  grid,
  setFood,
  setGameOver,
  snake,
} from "../Constraint/gameData";
import { drawFoodSnake } from "./drawFoodSnake";
import { getRandomFood } from "./getRandomFood";
import eatSoundUrl from "../assets/eat.mp3";
import gameOverSoundUrl from "../assets/game-over.mp3";

const eatSound = new Audio(eatSoundUrl);
const gameOverSound = new Audio(gameOverSoundUrl);

export function moveSnake() {
  let head = { ...snake[0] };

  if (direction === "RIGHT") head.x++;
  if (direction === "LEFT") head.x--;
  if (direction === "UP") head.y--;
  if (direction === "DOWN") head.y++;

  // wall collision
  if (head.x < 0 || head.x >= grid || head.y < 0 || head.y >= grid) {
    if (head.x <= 0) {
      head.x = grid - 1;
    } else if (head.x >= grid) {
      head.x = 0;
    } else if (head.y <= 0) {
      head.y = grid - 1;
    } else if (head.y >= grid) {
      head.y = 0;
    }
  }

  // self collision
  for (let part of snake) {
    if (part.x === head.x && part.y === head.y) {
      setGameOver(true);
      gameOverSound.currentTime = 0;
      gameOverSound.play().catch((err) => {
        console.log(err);
      });
      alert("Game Over");
      location.reload();
      return;
    }
  }

  snake.unshift(head);

  // food eating
  if (head.x === food.x && head.y === food.y) {
    eatSound.currentTime = 0;
    eatSound.play();
    setFood(getRandomFood());
    gameState.speed = Math.max(60, gameState.speed - snake.length * 1.3);
  } else {
    snake.pop();
  }

  drawFoodSnake();
}