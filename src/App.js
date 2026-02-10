import { useEffect, useState } from "react";
import { generatePuzzle, getTodayKey } from "./engine/generator";
import { validateAnswer } from "./engine/validator";
import { saveSolved, isSolved } from "./engine/storage";

function App() {
  const [puzzle, setPuzzle] = useState(null);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [locked, setLocked] = useState(false);

  const todayKey = getTodayKey();

  useEffect(() => {
    async function init() {
      const solved = await isSolved(todayKey);
      setLocked(solved);
      setPuzzle(generatePuzzle());
    }
    init();
  }, [todayKey]);

  const submitAnswer = async () => {
    const correct = validateAnswer(input, puzzle.answer);
    if (correct) {
      setResult("Correct 🎉");
      setLocked(true);
      await saveSolved(todayKey);
    } else {
      setResult("Wrong ❌");
    }
  };

  if (!puzzle) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Daily Puzzle</h1>
      <p className="mb-4">{puzzle.question}</p>

      {locked ? (
        <p className="text-green-400">Solved for today ✅</p>
      ) : (
        <>
          <input
            className="text-black px-2 py-1 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={submitAnswer}
            className="mt-4 px-4 py-2 bg-blue-600 rounded"
          >
            Submit
          </button>
        </>
      )}

      {result && <p className="mt-4">{result}</p>}
    </div>
  );
}

export default App;
