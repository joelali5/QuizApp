import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import { useReducer } from "react";
import Main from "./components/Main";
import Error from "./components/Error";
import NextButton from "./components/NextButton";
import Finished from "./components/Finished";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const options = {
  "General Knowledge": 9,
  Film: 11,
  Music: 12,
  "Video Games": 15,
  "Science & Nature": 17,
  Computers: 18,
  Mathematics: 19,
  Sports: 21,
  Geography: 22,
  History: 23,
  Politics: 24,
  Art: 25,
  Celebrities: 26,
  Animals: 27,
  Vehicles: 28,
  Gadgets: 30,
};
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "ready",
  amount: 5,
  difficulty: "easy",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  timeRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "active",
        timeRemaining: state.amount * SECS_PER_QUESTION,
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "changeDifficulty":
      return { ...state, difficulty: action.payload };
    case "numQuestions":
      return { ...state, amount: action.payload };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correct_answer
            ? state.points + 1
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        progress: state.progress + state.index,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highScore: state.highScore,
      };
    case "tick":
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
        status: state.timeRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action!");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    amount,
    difficulty,
    index,
    answer,
    points,
    highScore,
    timeRemaining,
  } = state;

  const numQuestions = questions.length;

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "ready" && (
          <StartScreen
            options={options}
            amount={amount}
            dispatch={dispatch}
            difficulty={difficulty}
          />
        )}
        {status === "error" && <Error />}
        {status === "active" && questions.length !== 0 && (
          <>
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              index={index}
              questions={questions}
              points={points}
              highScore={highScore}
            />
            <Footer>
              <Timer dispatch={dispatch} timeRemaining={timeRemaining} />
              <NextButton
                questions={questions}
                index={index}
                dispatch={dispatch}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <Finished
            points={points}
            numQuestions={numQuestions}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
