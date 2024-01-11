import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Main from "./components/Main";
import Error from "./components/Error";
import NextButton from "./components/NextButton";
import Finished from "./components/Finished";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { status, numQuestions } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "ready" && <StartScreen />}
        {status === "error" && <Error />}
        {status === "active" && numQuestions !== 0 && (
          <>
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <Finished />}
      </Main>
    </div>
  );
}

export default App;
