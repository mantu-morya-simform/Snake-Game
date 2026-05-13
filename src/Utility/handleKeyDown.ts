import { gameState, isGameOver } from "../Constraint/gameData";
import { moveSnake } from "./moveSnake";
import { playMoveSound } from "./playMusic";

/**
 * @description call the moveSnake() fn again schedules next loop for fn gameLoop
 */
function gameLoop() {
  if (!isGameOver) {
    moveSnake();
    setTimeout(gameLoop, gameState.speed);
  }
}

export function handleKeyDown(e: KeyboardEvent) {
  if (
    e.key === "ArrowLeft" ||
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowRight"
  ) {
    /**
     * Start the game loop and play move sound
     */

    playMoveSound();
    setInterval(playMoveSound, 6000);
    gameLoop();

    // remove listener
    window.removeEventListener("keydown", handleKeyDown);
  }
}
