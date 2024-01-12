import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

export default function Options() {
  const { question, dispatch, answer, multipleOptionsArray } = useQuiz();
  let booleanOptionsArray = [];

  if (question.type === "boolean") {
    booleanOptionsArray = [
      question.correct_answer,
      question.incorrect_answers[0],
    ];
  }

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (question.type === "multiple") {
      dispatch({
        type: "shuffleOptions",
        payload: shuffle([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      });
    }
  }, [dispatch, question]);

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
