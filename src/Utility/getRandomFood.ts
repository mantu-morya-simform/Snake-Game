import { grid } from "../Constraint/gameData";

export const getRandomFood = () => {
  return {
    x: Math.floor(Math.random() * grid),
    y: Math.floor(Math.random() * grid),
  };
};
