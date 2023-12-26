export default function NextButton({ dispatch, answer, index, questions }) {
  if (answer === null) return null;

  if (index < questions.length - 1)
    return (
      <button
        className="btn"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

    if (index === questions.length - 1)
    return (
      <button
        className="btn"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
