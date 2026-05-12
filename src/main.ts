import { drawFoodSnake } from "./Utility/drawFoodSnake";
import { handleKeyDown } from "./Utility/handleKeyDown";
import { init } from "./Utility/init";
import { keyPressEvent } from "./Utility/keyPressEvent";

/**
 *  init() :- initialize the grid
 */
init();

/**
 * drawFoodSnake() :- Draw Initial Food And Snake
 */
drawFoodSnake();

/**
 * keyPressEvent() : handle Key Press (UP, DOWN, LEFT, RIGHT)
 */
keyPressEvent();

/**
 *  @description this is for when i click (ArrowLeft| ArrowUp | ArrowDown| ArrowRight) among them then game is being start
 */
window.addEventListener("keydown", handleKeyDown);
