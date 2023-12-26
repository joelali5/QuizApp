export default function Options({ question, dispatch, answer }) {
  let booleanOptionsArray = [];
  let multipleOptionsArray = [];

  if (question.type === "boolean") {
    booleanOptionsArray = [
      question.correct_answer,
      question.incorrect_answers[0],
    ];
  }

  if (question.type === "multiple") {
    multipleOptionsArray = [
      question.correct_answer,
      ...question.incorrect_answers,
    ].sort((a, b) => a - b);
  }

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.type === "boolean"
        ? booleanOptionsArray.map((o) => (
            <button
              className={`btn-option ${o === answer ? "answer" : ""} ${
                hasAnswered
                  ? o === question.correct_answer
                    ? "correct-answer"
                    : "wrong-answer"
                  : ""
              }`}
              key={o}
              disabled={answer !== null}
              onClick={() => dispatch({ type: "newAnswer", payload: o })}
            >
              {o}
            </button>
          ))
        : multipleOptionsArray.map((o) => (
            <button
              className={`btn-option ${o === answer ? "answer" : ""} ${
                hasAnswered
                  ? o === question.correct_answer
                    ? "correct-answer"
                    : "wrong-answer"
                  : ""
              }`}
              key={o}
              disabled={hasAnswered}
              onClick={() => dispatch({ type: "newAnswer", payload: o })}
            >
              {o}
            </button>
          ))}
    </div>
  );
}
