import { useEffect } from "react";

export default function Timer({ dispatch, timeRemaining }) {
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
