import {
  canChangeDirection,
  direction,
  setCanChangeDirection,
  setDirection,
  setStopEnable,
} from "../Constraint/gameData";

export function keyPressEvent() {
  window.addEventListener("keydown", (e) => {
    if (!canChangeDirection) return;
    setStopEnable(true);
    if (e.key === "ArrowUp" && direction !== "DOWN") {
      setDirection("UP");
      setCanChangeDirection(false);
    }

    if (e.key === "ArrowDown" && direction !== "UP") {
      setDirection("DOWN");
      setCanChangeDirection(false);
    }

    if (e.key === "ArrowLeft" && direction !== "RIGHT") {
      setDirection("LEFT");
      setCanChangeDirection(false);
    }

    if (e.key === "ArrowRight" && direction !== "LEFT") {
      setDirection("RIGHT");
      setCanChangeDirection(false);
    }
  });
}
