import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

export default function Timer() {
  const { dispatch, timeRemaining } = useQuiz();
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
