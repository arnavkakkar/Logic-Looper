import { generateSequencePuzzle } from "./puzzleTypes/sequence";

export function getTodayKey() {
  const today = new Date();
  return (
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate()
  );
}

export function generatePuzzle() {
  const seed = getTodayKey();
  return generateSequencePuzzle(seed);
}