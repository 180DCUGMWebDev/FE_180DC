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
        explanation: "B – Storytelling makes complex data more engaging and easier to understand.",
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
        explanation: "B – Short, clear text with highlighted key points keeps slides easy to read.",
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
    []
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questionAnswer.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = questionAnswer[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionAnswer.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  // Auto-advance to next question after showing explanation
  useEffect(() => {
    let timer;
    if (showExplanation && !isLastQuestion) {
      timer = setTimeout(() => {
        setShowExplanation(false);
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 2000);
    } else if (showExplanation && isLastQuestion) {
      timer = setTimeout(() => {
        // Calculate results when finishing the last question
        const correctAnswers = userAnswers.reduce((count, answer, index) => {
          return count + (answer === questionAnswer[index].answerKey ? 1 : 0);
        }, 0);
        setCorrectCount(correctAnswers);
        setIsQuizCompleted(true);
        setShowExplanation(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showExplanation, isLastQuestion, userAnswers, questionAnswer]);

  const handleAnswerSelection = (answerIndex) => {
    // Update the userAnswers array
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newUserAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questionAnswer.length).fill(null));
    setIsQuizCompleted(false);
    setCorrectCount(0);
  };

  return (
    <section className="bg-black-300 mt-[3vw] px-[9%]">
      <div className="relative mt-[9.92vw] flex flex-col rounded-[16px] bg-white px-[6%] py-[6%] lg:p-[3.333vw]">
        <div className="flex flex-col">
          <h2 className="font-lato-bold text-[7vw] text-green-300 lg:text-[2.083vw]">
            Internal Mentoring 3
          </h2>
          <h2 className="font-lato-bold text-[7vw] text-green-300 lg:text-[2.083vw]">Mini Quiz</h2>
          {!isQuizCompleted && (
            <h2 className="font-lato-bold text-black-300 text-[4vw] lg:text-[1.25vw]">
              Question {currentQuestion.number}/{questionAnswer.length}
            </h2>
          )}
        </div>

        <div className="mx-auto my-[2vw] flex w-full flex-col rounded-[16px] bg-green-300 px-[6%] py-[6%] lg:my-0 lg:-mt-[2vw] lg:min-h-[40vw] lg:w-[36vw] lg:rounded-[0.625vw] lg:p-[2vw]">
          {isQuizCompleted ? (
            <div className="flex grow flex-col">
              <p className="text-[4vw] font-bold text-white lg:text-[1.25vw]">Result</p>
              <p className="my-[4vw] text-[5vw] font-semibold text-white lg:my-[1.667vw] lg:text-[1.667vw]">
                Overall: {Math.round((correctCount / questionAnswer.length) * 100)}%
              </p>
              <p className="text-white lg:text-[1.25vw]">Total Question: {questionAnswer.length}</p>
              <p className="mt-[0.833vw] text-white lg:text-[1.25vw]">Total Score: 100</p>
              <p className="mt-[0.833vw] text-white lg:text-[1.25vw]">
                Correct Answer: {correctCount}
              </p>
              <p className="mt-[0.833vw] text-white lg:text-[1.25vw]">
                Wrong Answer: {questionAnswer.length - correctCount}
              </p>
              <button
                onClick={handleRestart}
                className="mt-auto flex h-[10vw] items-center justify-center rounded-[4vw] border border-black bg-white text-center text-[4vw] transition-all duration-700 ease-in-out hover:scale-[102%] lg:h-[2.604vw] lg:rounded-[1.3vw] lg:text-[1.563vw]"
              >
                Restart
              </button>
            </div>
          ) : (
            <div>
              <p className="text-[4vw] font-bold text-white lg:text-[1.25vw]">
                Quiz {currentQuestion.number}
              </p>
              <p className="my-[4vw] text-[5vw] font-semibold text-white lg:my-[1.667vw] lg:text-[1.667vw]">
                {currentQuestion.question}
              </p>

              <div className="flex flex-col gap-y-[2vw] lg:gap-y-[0.625vw]">
                {currentQuestion.answers.map((answer, idx) => (
                  <div
                    key={idx}
                    className={`cursor-pointer rounded-[2vw] px-4 py-2 text-[4vw] font-semibold lg:rounded-[0.417vw] lg:text-[1.25vw] ${
                      userAnswers[currentQuestionIndex] === idx
                        ? "bg-[#58B9D1] text-white"
                        : "bg-white"
                    }`}
                    onClick={() => handleAnswerSelection(idx)}
                  >
                    {String.fromCharCode(65 + idx)}. {answer}
                  </div>
                ))}
              </div>

              {showExplanation && (
                <div className="mt-[3vw] rounded-[1vw] bg-white p-[2vw] lg:p-[1vw]">
                  <p className="text-[4vw] font-bold lg:text-[1.25vw]">Answer:</p>
                  <p className="text-[4vw] lg:text-[1.25vw]">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {!isQuizCompleted && (
          <div className="mt-4 flex justify-between">
            <button
              className={`rounded-lg px-4 py-2 text-[4vw] font-bold lg:text-[1.25vw] ${
                isFirstQuestion ? "bg-gray-300 text-gray-500" : "bg-black-300 text-white"
              }`}
              onClick={handlePrevious}
              disabled={isFirstQuestion}
            >
              Previous
            </button>

            <button
              className={`rounded-lg px-4 py-2 text-[4vw] font-bold lg:text-[1.25vw] ${
                isLastQuestion ? "bg-gray-300 text-gray-500" : "bg-black-300 text-white"
              }`}
              onClick={handleNext}
              disabled={isLastQuestion}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
