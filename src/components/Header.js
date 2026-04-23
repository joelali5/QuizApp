export default function Header() {
  return (
    <header className="app-header">
      <div className="quiz-icon">🧠</div>

      <div className="app-title-container">
        <h1 className="app-title">Trivia</h1>
        <span className="sub-app-title">
          powered by the open trivia database
        </span>
      </div>
    </header>
  );
}
