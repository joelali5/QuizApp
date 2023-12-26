export default function Finished({ points, numQuestions, highScore }) {
  return (
    <div className="finished">
      <p>
        You scored {points * 4} out of {numQuestions * 5} points
      </p>
      <p>High Score is {highScore * 4}</p>
    </div>
  );
}
