import { useQuiz } from "../context/QuizContext";

export default function Progress() {
  const { index, questions, points, answer } = useQuiz();
  return (
    <div className="progress">
      <progress
        className="progress-bar"
        value={index + Number(answer !== null)}
        max={questions.length}
      ></progress>
      <div className="questions-and-points">
        <p>
          Question{" "}
          <strong>
            {index + 1} / {questions.length}
          </strong>
        </p>
        <p>
          <strong>
            {points} / {questions.length}
          </strong>{" "}
          Points
        </p>
      </div>
    </div>
  );
}
