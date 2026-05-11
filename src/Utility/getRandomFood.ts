import { grid } from "../Constraint/gameData";

export const randomFood = {
  x: Math.floor(Math.random() * grid),
  y: Math.floor(Math.random() * grid),
};
