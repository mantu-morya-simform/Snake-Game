import { grid } from "./Constraint/gameData";
import { mainApp } from "./DOM/domElements";

function init() {
  if (!mainApp) return;
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      let element: HTMLParagraphElement = document.createElement("p");
      element.classList.add("cell");
      mainApp.appendChild(element);
    }
  }
}
init();
