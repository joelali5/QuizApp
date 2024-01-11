import { useQuiz } from "../context/QuizContext";

export default function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className="btn" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
}
