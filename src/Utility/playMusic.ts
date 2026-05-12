import moveSoundUrl from "../assets/move.mp3";

const moveSound = new Audio(moveSoundUrl);

export function playMoveSound() {
  moveSound.currentTime = 0;
  moveSound.play().catch((err) => {
    console.log(err);
  });
}
