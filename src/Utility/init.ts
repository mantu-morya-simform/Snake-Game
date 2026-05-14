import { cells, grid } from "../Constraint/gameData";
import { lastHighestElement, mainApp } from "../DOM/domElements";
import { getScore } from "./score";

export function init() {
  if (!mainApp) return;
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      let element = document.createElement("p");
      element.classList.add("cell");
      mainApp.appendChild(element);
      cells.push(element);
    }
  }
  if (!lastHighestElement) return;
  lastHighestElement.innerText = `Last Highest Score: ${getScore()}`;
}
