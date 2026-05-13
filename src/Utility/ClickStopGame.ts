import { isStopEnable } from "../Constraint/gameData";
import { stopButton } from "../DOM/domElements";

export function clickStopGame() {
  stopButton.addEventListener("click", () => {
    if (isStopEnable) {
      alert("Game Stopped..");
      location.reload();
      return;
    }
  });
}
