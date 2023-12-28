export default function Finished({
  points,
  numQuestions,
  highScore,
  dispatch,
}) {
  const percent = (points / numQuestions) * 100;
  let pointsExpression;
  if (percent < 50)
    pointsExpression = "Not so good score. You can do better 😔";
  if (percent >= 50 && percent < 75)
    pointsExpression = "Good score, but you can get even better 😁";
  if (percent > 75) pointsExpression = "Amazing score 🎉";

  return (
    <div className="finished">
      <p>
        You scored {points} out of {numQuestions} points ({percent}%)
      </p>
      <p>{pointsExpression}</p>
      <p>High Score is {highScore}</p>
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart
      </button>
    </div>
  );
}
