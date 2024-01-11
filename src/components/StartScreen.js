import Category from "./Category";
import CustomizeQuiz from "./CustomizeQuiz";

export default function StartScreen() {
  return (
    <div className="start">
      <p className="start-heading">Welcome to the Trivia quiz!</p>
      <p className="start-subheading">
        Test your knowledge. Choose a category below
      </p>
      <CustomizeQuiz />
      <Category />
    </div>
  );
}
