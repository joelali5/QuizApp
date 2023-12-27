export default function Finished({
  points,
  numQuestions,
  highScore,
  dispatch,
}) {
  return (
    <div className="finished">
      <p>
        You scored {points * 4} out of {numQuestions * 5} points
      </p>
      <p>High Score is {highScore * 4}</p>
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart
      </button>
    </div>
  );
}
