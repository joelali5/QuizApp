import Options from "./Options";
import Progress from "./Progress";

export default function Question({
  question,
  dispatch,
  answer,
  questions,
  points,
  index,
  highScore,
}) {
  return (
    <div>
      {/* <ScoreBoard points={points} highScore={highScore} /> */}
      <Progress
        index={index}
        questions={questions}
        points={points}
        answer={answer}
      />
      <h3 className="question">{question.question}</h3>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
