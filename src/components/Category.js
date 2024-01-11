import { useQuiz } from "../context/QuizContext";

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

export default function Category() {
  const { amount, dispatch, difficulty } = useQuiz();
  const images = [
    "general-knowledge",
    "film",
    "music",
    "video_games",
    "science&nature",
    "desktop",
    "maths",
    "sports",
    "geo",
    "history",
    "politics",
    "art",
    "celebrities",
    "animals",
    "vehicles",
    "gadgets",
  ];
  async function handleFetchQuiz(category) {
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
      );
      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data.results });
    } catch (error) {
      dispatch({ type: "dataFailed" });
    }
  }

  return (
    <div className="category-container">
      {Object.keys(options).map((category, i) => (
        <button
          className="btn-category"
          key={i}
          onClick={() => handleFetchQuiz(Number(options[category]))}
        >
          <img
            src={`${images[i]}.png`}
            alt="Category"
            className="category-img"
          />
          <div className="category-btn-details">
            <p className="category-name">{category}</p>
            <p className="num-questions">{amount} questions</p>
          </div>
        </button>
      ))}
    </div>
  );
}
