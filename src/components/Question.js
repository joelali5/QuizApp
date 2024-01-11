import { useQuiz } from "../context/QuizContext";
import Options from "./Options";
import Progress from "./Progress";

export default function Question() {
  const { question } = useQuiz();
  return (
    <div>
      {/* <ScoreBoard points={points} highScore={highScore} /> */}
      <Progress />
      <h3 className="question">{question.question}</h3>
      <Options />
    </div>
  );
}
