import { useRef } from "react";
import "./App.css";
import quizIcon from "./assets/quiz.svg";
import Quiz from "./components/quiz";

function App() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <>
      <main ref={mainRef}>
        <h1>Quiz App</h1>
        <img className="quiz-icon" src={quizIcon} alt="quiz icon" width={200} height={200} />
        <Quiz mainRef={mainRef} />
      </main>
      <footer>
        Built with <span className="potato">🥔</span> and by <a href="https://cheapnightbot.github.io" target="_blank" rel="noopener noreferrer"> ポテト ^. .^₎ฅ</a>
      </footer>
    </>
  )
}

export default App
