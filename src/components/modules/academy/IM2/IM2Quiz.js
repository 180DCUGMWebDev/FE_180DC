"use client";
import React, { useState, useEffect, useMemo } from "react";

export default function MiniQuiz() {
  const questionAnswer = useMemo(
    () => [
      {
        number: 1,
        question: "Below is the example of business process, except:",
        answers: ["Manufacturing", "Sales and marketing", "Production", "None of the above"],
        answerKey: 3,
        explanation:
          "D. None of the above. Manufacturing, Sales and Marketing, and Production are all business processes because they accomplish certain organizational goals.",
      },
      {
        number: 2,
        question:
          "Impinj, an American manufacturer, creates a breathtaking product of RFID Tags. RFID Tags is a salt particle-size technology that could indicate and track tags in a warehouse. Impinj innovation on RFID Tags can help ____ business process:",
        answers: [
          "Inventory Management Process",
          "Manufacturing Process",
          "Sales and Marketing Process",
          "Recruitment and Hiring Process",
        ],
        answerKey: 0,
        explanation:
          "A. Inventory Management Process. The RFID Tags can help businesses to indicate and track tags in a warehouse that is mainly being used to manage inventory.",
      },
      {
        number: 3,
        question: "Marketing and Sales is both business process and a value chain:",
        answers: [
          "True, because marketing and sales accomplish a certain goal and creates value in the process",
          "True, because business can't operate without marketing and sales",
          "False, because marketing and sales is only a part of value chain",
          "False, because marketing and sales is not a business process but a value chain",
        ],
        answerKey: 2,
        explanation:
          "C. False, because marketing and sales is only a part of the value chain. Marketing and Sales is not a standalone value chain or set of activities; it is only part of the value chain.",
      },
      {
        number: 4,
        question:
          "In the Porter Value Chain model, why processes such as human resource management, technology development, and procurement use a dotted line instead of a full straight line?",
        answers: [
          "They are not essential to business operations and have a minimal impact on the value chain.",
          "The activities on the value chain may and may not operate with and without those activities, but firm infrastructure is a must.",
          "They are less important compared to primary activities such as inbound logistics and marketing.",
          "They only influence firm infrastructure and do not interact with other parts of the value chain.",
        ],
        answerKey: 1,
        explanation:
          "B. The activities on the value chain may and may not operate with and without those activities, but firm infrastructure is a must. Dotted lines indicate that supporting activities are not mandatory for each part of the value chain except for firm infrastructure.",
      },
      {
        number: 5,
        question:
          "Which of these two industries have a very similar value chain and business process:",
        answers: [
          "Watch and perfume industry",
          "Car and handphone industry",
          "Furniture and gaming industry",
          "None of the above",
        ],
        answerKey: 0,
        explanation:
          "A. Watch and perfume industry. Both have similar characteristics such as conventional and luxury brand marketing, artisanal design, and similar distribution strategies.",
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

  // Auto-advance to next question after showing explanation
  useEffect(() => {
    let timer;
    if (showExplanation && !isLastQuestion) {
      timer = setTimeout(() => {
        setShowExplanation(false);
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 4000);
    } else if (showExplanation && isLastQuestion) {
      timer = setTimeout(() => {
        // Calculate results when finishing the last question
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
    <section className="mt-[3vw] bg-black px-[9%]">
      <div className="relative mt-[9.92vw] flex flex-col rounded-[16px] bg-white px-[6%] py-[6%] lg:p-[3.333vw]">
        <div className="flex flex-col">
          <h2 className="font-lato-bold text-[7vw] text-primary lg:text-[2.083vw]">
            Internal Mentoring 2
          </h2>
          <h2 className="font-lato-bold text-[7vw] text-primary lg:text-[2.083vw]">Mini Quiz</h2>
          {!isQuizCompleted && (
            <h2 className="font-lato-bold text-[4vw] text-black lg:text-[1.25vw]">
              Question {currentQuestion.number}/{questionAnswer.length}
            </h2>
          )}
        </div>

        <div className="mx-auto my-[2vw] flex w-full flex-col rounded-[16px] bg-primary px-[6%] py-[6%] lg:my-0 lg:-mt-[2vw] lg:min-h-[40vw] lg:w-[36vw] lg:rounded-[0.625vw] lg:p-[2vw]">
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
                isFirstQuestion ? "bg-gray-300 text-gray-500" : "bg-black text-white"
              }`}
              onClick={handlePrevious}
              disabled={isFirstQuestion}
            >
              Previous
            </button>

            <button
              className={`rounded-lg px-4 py-2 text-[4vw] font-bold lg:text-[1.25vw] ${
                isLastQuestion ? "bg-gray-300 text-gray-500" : "bg-black text-white"
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
