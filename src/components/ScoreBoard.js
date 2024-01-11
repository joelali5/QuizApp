import { useQuiz } from "../context/QuizContext";

export default function ScoreBoard() {
  const { points, highScore } = useQuiz();
  return (
    <div className="scoreboard">
      <div className="highscore">
        <p className="highscore-icon">🏆</p>
        <p className="scoreboard-scores">
          <span>Highscore</span>
          <span>{highScore}</span>
        </p>
      </div>
      <div className="stroke"></div>
      <div className="points">
        <p className="points-icon">🎉</p>
        <p className="scoreboard-scores">
          <span>Points</span>
          <span>{points}</span>
        </p>
      </div>
    </div>
  );
}
