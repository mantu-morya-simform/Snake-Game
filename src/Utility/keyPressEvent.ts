import { direction, setDirection } from "../Constraint/gameData";

export function keyPressEvent() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && direction !== "DOWN") {
      setDirection("UP");
    }

    if (e.key === "ArrowDown" && direction !== "UP") {
      setDirection("DOWN");
    }

    if (e.key === "ArrowLeft" && direction !== "RIGHT") {
      setDirection("LEFT");
    }

    if (e.key === "ArrowRight" && direction !== "LEFT") {
      setDirection("RIGHT");
    }
  });
}
