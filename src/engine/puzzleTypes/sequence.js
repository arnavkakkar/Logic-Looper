export function generateSequencePuzzle(seed) {
  const base = (seed % 5) + 2;
  const sequence = [base];

  for (let i = 1; i < 5; i++) {
    sequence.push(sequence[i - 1] * 2);
  }

  return {
    question: `${sequence[0]}, ${sequence[1]}, ${sequence[2]}, ?, ${sequence[4]}`,
    answer: sequence[3],
  };
}