import { useState } from "react";
import Result from "./result";

function Quiz(){
    const questionBank = [{
        question: "What is the most used programming language",
        options: ["Python", "JavaScript", "Pearl", "Java"],
        answer: "Python"
    },
    {
        question: "Which language is used for web apps?",
        options: ["PHP", "Python", "JavaScript", "All"],
        answer: "All"
    },
    {
        question: "What does JSX stand for?",
        options: ["JavaScript XML", "Java Syntax extension", "Just a simple example", "None of the above"],
        answer: "JavaScript XML"
    },
    {
        question: "What language is used to build cross-platform mobile apps",
        options: ["Python", "Rust", "SQL", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "Which of the following is not a framework",
        options: ["React", "Django", "Angular", "Node js"],
        answer: "Node js"
    }];

    const initialAnswers = [null, null, null];
    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const[isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];
    
    function optionSelect(option){
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext(){
        if(currentQuestion === questionBank.length - 1){
            setIsQuizFinished(true);
        
        }else{
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrevious(){
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function restartQuiz(){
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }
    
    if(isQuizFinished){
        return(
            <Result userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>
        );
    }
    
    return(
        <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>

        {questionBank[currentQuestion].options.map((option) =>(
            <button className={"option" + (selectedAnswer === option ? " selected": "")} onClick={() => optionSelect(option)}>{option}</button>
        ))}
        
        <div className="nav-buttons">
            <button onClick={goToPrevious} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={goToNext} disabled={!selectedAnswer}>
                {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
            </button>
        </div>
    </div>
    );
}

export default Quiz;