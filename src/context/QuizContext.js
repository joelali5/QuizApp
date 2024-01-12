import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

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
  multipleOptionsArray: [],
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
    case "shuffleOptions":
      return { ...state, multipleOptionsArray: action.payload };
    default:
      throw new Error("Unknown action!");
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      amount,
      difficulty,
      index,
      answer,
      points,
      highScore,
      timeRemaining,
      multipleOptionsArray,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const question = questions[index];

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        amount,
        difficulty,
        index,
        answer,
        points,
        highScore,
        timeRemaining,
        numQuestions,
        question,
        multipleOptionsArray,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext is used outside of the ContextProvider.");
  return context;
}

export { QuizProvider, useQuiz };
