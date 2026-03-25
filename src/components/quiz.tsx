import { useEffect, useState, type RefObject } from "react";
import { questionBank } from "../assets/question-bank";
import Results from "./results";

export default function Quiz({ mainRef }: { mainRef: RefObject<HTMLElement | null> }) {
    const initialAnswers: (string | null)[] = Array(questionBank.length).fill(null);
    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleSelection = (option: string) => setUserAnswers(prev => {
        const newUserAnswers = [...prev];
        newUserAnswers[currentQuestion] = option;
        return newUserAnswers;
    })
    const nextQuestion = () => {
        if (currentQuestion < questionBank.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setIsQuizFinished(true);
        }
    };
    const prevQuestion = () => { if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1) };
    const restartQuiz = () => {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    };

    useEffect(() => {
        mainRef.current?.classList.add("pop-in");
        const timeoutId = setTimeout(() => {
            mainRef.current?.classList.remove("pop-in");
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [isQuizFinished]);

    return (
        <>
            {isQuizFinished
                ? <Results questionBank={questionBank} userAnswers={userAnswers} restartQuiz={restartQuiz} />
                : <div className="questions">
                    <h2>Question {currentQuestion + 1}</h2>
                    <p>{questionBank[currentQuestion].question}</p>
                    <div className="options">
                        {questionBank[currentQuestion].options.map((option, i) => (
                            <button
                                key={i}
                                className={userAnswers[currentQuestion] === option ? "selected" : ""}
                                onClick={() => handleSelection(option)}>{option}
                            </button>
                        ))}
                    </div>

                    <div className="nav-buttons">
                        <button onClick={prevQuestion} disabled={currentQuestion === 0}>Previous</button>
                        <small>Question {currentQuestion + 1} of {questionBank.length}</small>
                        <button onClick={nextQuestion} disabled={!userAnswers[currentQuestion]}>
                            {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
