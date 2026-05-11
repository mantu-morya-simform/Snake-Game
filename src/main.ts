import { drawFoodSnake } from "./Utility/drawFoodSnake";
import { init } from "./Utility/init";
import { keyPressEvent } from "./Utility/keyPressEvent";
import { moveSnake } from "./Utility/moveSnake";

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
 * setInterval() : handle snake and food movement
 */
setInterval(moveSnake, 300);
