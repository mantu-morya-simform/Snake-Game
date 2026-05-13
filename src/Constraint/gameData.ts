export const grid = 20;
export const snake = [{ x: 10, y: 12 }];
export const cells: HTMLParagraphElement[] = [];
export let direction = "RIGHT";
export const gameState = {
  speed: 300,
};
export let gameInterval: number;
export let isGameOver = false;
export let isStopEnable = false;
export let food = {
  x: Math.floor(Math.random() * grid),
  y: Math.floor(Math.random() * grid),
};
export function setDirection(newDirection: string) {
  direction = newDirection;
}
export function setFood(newFood: { x: number; y: number }) {
  food = newFood;
}
export function setStopEnable(status: boolean) {
  isStopEnable = status;
}

export function setGameOver(status: boolean) {
  isGameOver = status;
}

export let canChangeDirection = true;

export function setCanChangeDirection(value: boolean) {
  canChangeDirection = value;
}

export const gameStoreName = "snake-game";
