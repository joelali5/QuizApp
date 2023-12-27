export default function Category({ options, amount, dispatch, difficulty }) {
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
