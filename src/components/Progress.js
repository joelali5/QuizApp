export default function Progress({ index, questions, points, answer }) {
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
            {points} / {questions.length * 5}
          </strong>{" "}
          Points
        </p>
      </div>
    </div>
  );
}
