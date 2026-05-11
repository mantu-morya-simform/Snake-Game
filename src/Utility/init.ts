import { cells, grid } from "../Constraint/gameData";
import { mainApp } from "../DOM/domElements";

export function init() {
  if (!mainApp) return;
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      let element: HTMLParagraphElement = document.createElement("p");
      if (!element) return;
      element.classList.add("cell");
      mainApp.appendChild(element);
      cells.push(element);
    }
  }
}
