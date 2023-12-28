export default function Header() {
  return (
    <header className="app-header">
      <img src="logo512.png" alt="react logo" className="logo" />
      <div className="app-title-container">
        <h1 className="app-title">Trivia</h1>
        <span className="sub-app-title">
          powered by the open trivia database
        </span>
      </div>
    </header>
  );
}
