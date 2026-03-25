

export default function Results({ questionBank, userAnswers, restartQuiz }: {
    questionBank: {
        question: string;
        options: string[];
        answer: string;
    }[],
    userAnswers: (string | null)[],
    restartQuiz: () => void,
}) {
    const score = () => {
        let finalScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) finalScore++;
        });
        return finalScore;
    }

    return (
        <div className="result">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score()}/{questionBank.length}</p>
            <button className="restart-btn" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}
