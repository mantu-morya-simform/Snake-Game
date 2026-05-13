import { cells, food, grid, snake } from "../Constraint/gameData";
import appleImg from "../assets/apple.png";

export function drawFoodSnake() {
  /**
   * @description make cells innerHtml Blank Initially
   */
  cells.forEach((cell) => {
    cell.className = "cell";
    // Remove previous image children that i added
    while (cell.firstChild) {
      cell.removeChild(cell.firstChild);
    }
  });

  /**
   * @description get all snake part and add class and behalf of the class add style for snake
   */
  snake.forEach((part) => {
    const snakePartIndex = part.y * grid + part.x;
    cells[snakePartIndex].classList.add("snake");
  });

  /**
   * @description create a food at random location on grid and also add class "food"
   */
  const foodIndex = food.y * grid + food.x;
  cells[foodIndex].classList.add("food");
  const img = document.createElement("img");
  img.src = appleImg;
  img.alt = "apple_png";
  img.className = "food";
  cells[foodIndex].appendChild(img);
}