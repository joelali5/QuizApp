import Options from "./Options";
import Progress from "./Progress";
import ScoreBoard from "./ScoreBoard";

export default function Question({
  question,
  dispatch,
  answer,
  questions,
  points,
  index,
}) {
  return (
    <div>
      <ScoreBoard points={points} />
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
