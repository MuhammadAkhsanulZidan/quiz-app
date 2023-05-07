/*References: https://www.youtube.com/watch?v=Oi763-xb074&t=2531s */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Questionslist from './questionslist';
import Timer from './timer';

const API_URL = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

const Quizscreen = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        axios.get(API_URL).then(res => res.data)
            .then(data => {
                const questions = data.results.map((question) => ({
                    ...question,
                    answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
                }))
                setQuestions(questions)
            });
    }, [])

    const handleAnswer = (answer) => {
        if (!showAnswers) {
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1);
            }
        }
        setShowAnswers(true);
        window.setTimeout(handleNextQuestion, 2000)
    }

    const handleNextQuestion = () => {
        setCurrentIndex(currentIndex + 1);
        setShowAnswers(false);
    }

    const handleTimeOut = () => {
        setCurrentIndex(questions.length);
    }

    return (questions.length > 0 ? (
        <div className="quizscreen-container">
            {currentIndex >= questions.length ? (
                <h1>Quiz Ended, Total correct answer is {score}</h1>) :
                (<Questionslist handleAnswer={handleAnswer} showAnswers={showAnswers} data={questions[currentIndex]} />)
            }
            <Timer seconds={15} handleTimeOut={handleTimeOut} />
        </div>
    ) : "loading...")
}

export default Quizscreen;