import {
  direction,
  food,
  gameState,
  grid,
  setCanChangeDirection,
  setFood,
  setGameOver,
  snake,
} from "../Constraint/gameData";
import { drawFoodSnake } from "./drawFoodSnake";
import { getRandomFood } from "./getRandomFood";
import eatSoundUrl from "../assets/eat.mp3";
import gameOverSoundUrl from "../assets/game-over.mp3";
import { currHighestElement } from "../DOM/domElements";
import { getScore, setScore } from "./score";

const eatSound = new Audio(eatSoundUrl);
const gameOverSound = new Audio(gameOverSoundUrl);

export function moveSnake() {
  setCanChangeDirection(true);
  let head = { ...snake[0] };

  if (direction === "RIGHT") head.x++;
  if (direction === "LEFT") head.x--;
  if (direction === "UP") head.y--;
  if (direction === "DOWN") head.y++;

  // wall collision
  if (head.x < 0 || head.x >= grid || head.y < 0 || head.y >= grid) {
    if (head.x < 0) {
      head.x = grid - 1;
    } else if (head.x >= grid) {
      head.x = 0;
    } else if (head.y < 0) {
      head.y = grid - 1;
    } else if (head.y >= grid) {
      head.y = 0;
    }
  }

  // self collision
  for (let part of snake) {
    if (part.x === head.x && part.y === head.y) {
      setGameOver(true);
      /**
       * update highest score if new score is higher
       */
      if (getScore() < snake.length - 1) {
        setScore(snake.length - 1);
      }
      gameOverSound.currentTime = 0;
      gameOverSound.play().catch((err) => {
        console.log(err);
      });
      setTimeout(() => {
        alert("Game Over");
        location.reload();
      }, 1200);
      return;
    }
  }

  snake.unshift(head);

  // food eating
  if (head.x === food.x && head.y === food.y) {
    currHighestElement.innerText = `Score: ${snake.length - 1}`;
    eatSound.currentTime = 0;
    eatSound.play();
    setFood(getRandomFood());
    gameState.speed = Math.max(60, gameState.speed - snake.length * 1.3);
  } else {
    snake.pop();
  }

  drawFoodSnake();
}
