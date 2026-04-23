import { useQuiz } from "../context/QuizContext";

export default function CustomizeQuiz() {
  const { dispatch } = useQuiz();

  function handleChange(e) {
    let value = Number(e.target.value);

    if (value < 1) value = 1;
    if (value > 50) value = 50;

    dispatch({ type: "numQuestions", payload: value });
  }

  return (
    <div className="customize-quiz">
      <input
        type="number"
        min="1"
        max="50"
        placeholder="Number of Questions"
        className="num-questions-input"
        onKeyDown={(e) => {
          if (e.key === "-" || e.key === "e") e.preventDefault();
        }}
        onChange={handleChange}
      />

      <select
        className="select-difficulty"
        onChange={(e) =>
          dispatch({ type: "changeDifficulty", payload: e.target.value })
        }
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
