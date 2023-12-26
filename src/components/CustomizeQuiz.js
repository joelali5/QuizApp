export default function CustomizeQuiz({ dispatch }) {
  return (
    <div className="customize-quiz">
      <input
        type="number"
        placeholder="Number of Questions"
        className="num-questions-input"
        onChange={(e) =>
          dispatch({ type: "numQuestions", payload: Number(e.target.value) })
        }
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
