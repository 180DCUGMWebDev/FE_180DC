"use client";
import React, { useState, useEffect, useMemo } from "react";

export default function MiniQuiz() {
  const questionAnswer = useMemo(
    () => [
      {
        number: 1,
        question: "Why is storytelling important in presentations?",
        answers: [
          "It makes presentations more fun.",
          "It turns data into an engaging and clear story.",
          "It helps add more text to slides.",
          "It ensures all presentations look the same.",
        ],
        answerKey: 1,
        explanation:
          "B – Storytelling makes complex data more engaging and easier to understand.",
      },
      {
        number: 2,
        question: "What should be done before analyzing data?",
        answers: [
          "Collect as much random data as possible.",
          "Prioritize key issues.",
          "Start designing slides.",
          "Add visuals before structuring the problem.",
        ],
        answerKey: 1,
        explanation:
          "B – Prioritizing issues ensures focus on the most important aspects before analysis.",
      },
      {
        number: 3,
        question: "When designing slides, what is a good rule for text?",
        answers: [
          "Use long paragraphs to explain everything.",
          "Keep text short and highlight key points.",
          "Use only pictures without any text.",
          "Make all text the same size and color.",
        ],
        answerKey: 1,
        explanation:
          "B – Short, clear text with highlighted key points keeps slides easy to read.",
      },
      {
        number: 4,
        question: "What does the ‘So What’ test help with in a presentation?",
        answers: [
          "Making slides look nice.",
          "Ensuring every data point leads to a meaningful insight.",
          "Checking if the slides follow a color scheme.",
          "Deciding how many slides to include in a deck.",
        ],
        answerKey: 1,
        explanation:
          "B – The ‘So What’ test ensures that every data point leads to an actionable and relevant insight.",
      },
      {
        number: 5,
        question: "Why is the MECE principle useful in structuring problems?",
        answers: [
          "It helps remove unnecessary slides.",
          "It ensures that all key points are covered without overlap.",
          "It makes presentations shorter.",
          "It focuses only on visuals instead of problem-solving.",
        ],
        answerKey: 1,
        explanation:
          "B – MECE helps structure problems clearly by making sure no points overlap and that all key aspects are included.",
      },
    ],
    [],
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questionAnswer.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = questionAnswer[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionAnswer.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  useEffect(() => {
    let timer;
    if (showExplanation && !isLastQuestion) {
      timer = setTimeout(() => {
        setShowExplanation(false);
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 4000);
    } else if (showExplanation && isLastQuestion) {
      timer = setTimeout(() => {
        const correctAnswers = userAnswers.reduce((count, answer, index) => {
          return count + (answer === questionAnswer[index].answerKey ? 1 : 0);
        }, 0);
        setCorrectCount(correctAnswers);
        setIsQuizCompleted(true);
        setShowExplanation(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showExplanation, isLastQuestion, userAnswers, questionAnswer]);

  const handleAnswerSelection = (answerIndex) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newUserAnswers);
    setShowExplanation(true);
  };

  return (
    <section className="mt-8 bg-black px-8 py-4 text-white">
      <div className="bg-white text-black p-6 rounded-lg">
        {!isQuizCompleted ? (
          <div>
            <h2 className="text-lg font-bold">Pre-Test: Storytelling & Deck Making</h2>
            <p className="mt-4">Question {currentQuestion.number}/{questionAnswer.length}</p>
            <p className="mt-2 font-semibold">{currentQuestion.question}</p>
            <div className="mt-4 space-y-2">
              {currentQuestion.answers.map((answer, idx) => (
                <button
                  key={idx}
                  className={`block w-full p-2 rounded ${userAnswers[currentQuestionIndex] === idx ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                  onClick={() => handleAnswerSelection(idx)}
                >
                  {String.fromCharCode(65 + idx)}. {answer}
                </button>
              ))}
            </div>
            {showExplanation && <p className="mt-4 text-green-600">{currentQuestion.explanation}</p>}
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold">Quiz Completed!</h2>
            <p className="mt-4">Score: {Math.round((correctCount / questionAnswer.length) * 100)}%</p>
          </div>
        )}
      </div>
    </section>
  );
}
