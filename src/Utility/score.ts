import { gameStoreName } from "../Constraint/gameData";

export function getScore(): number {
  const storedScore = localStorage.getItem(gameStoreName);

  if (!storedScore) {
    return 0;
  }

  const parsedScore: { score: number } = JSON.parse(storedScore);

  return parsedScore.score;
}

export function setScore(newScore: number): void {
  const scoreData = {
    score: newScore,
  };

  localStorage.setItem(gameStoreName, JSON.stringify(scoreData));
}
