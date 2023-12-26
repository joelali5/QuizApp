import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import { useReducer } from "react";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import NextButton from "./components/NextButton";

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

const initialState = {
  questions: [],
  status: "loading",
  amount: 5,
  difficulty: "easy",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "active" };
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
    default:
      throw new Error("Unknown action!");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, amount, difficulty, index, answer, points } =
    state;

  console.log(questions?.[index]);

  return (
    <div className="app">
      <Header />
      <Main>
        <StartScreen
          options={options}
          amount={amount}
          dispatch={dispatch}
          difficulty={difficulty}
        />
        {/* {status === "loading" && <Loader />} */}
        {status === "error" && <Error />}
        {status === "active" && questions.length !== 0 && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
            index={index}
            questions={questions}
            points={points}
          />
        )}
        <div className="footer">
          <p className="timer">00:00</p>
          <NextButton questions={questions} index={index} dispatch={dispatch} />
        </div>
      </Main>
    </div>
  );
}

export default App;
