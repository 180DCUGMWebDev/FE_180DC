"use client";
import Button from "@/components/element/Button";
import React, { useState, useEffect, useMemo } from "react";

export default function MiniQuiz() {
  const questionAnswer = useMemo(
    () => [
      {
        number: 1,
        question: "quest1xxxxx ini adalah pertanyaan dummy hheeh hehehhehee  hehhe",
        answers: [
          "a",
          "dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy",
          "c",
          "d",
          "e",
        ],
        answerKey: 0,
      },
      {
        number: 2,
        question: "quest2",
        answers: ["a", "b", "c", "d", "e"],
        answerKey: 0,
      },
      {
        number: 3,
        question: "quest3",
        answers: ["a", "b", "c", "d", "e"],
        answerKey: 0,
      },
      {
        number: 4,
        question: "quest4",
        answers: ["a", "b", "c", "d", "e"],
        answerKey: 0,
      },
      {
        number: 5,
        question: "quest5",
        answers: ["a", "b", "c", "d", "e"],
        answerKey: 0,
      },
    ],
    [],
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    if (selectedAnswer !== null && currentQuestionIndex < questionAnswer.length - 1) {
      const timer = setTimeout(() => {
        if (
          questionAnswer[currentQuestionIndex].answers.indexOf(selectedAnswer) ===
          questionAnswer[currentQuestionIndex].answerKey
        ) {
          setCorrectCount(correctCount + 1);
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, currentQuestionIndex, questionAnswer, correctCount]);

  const currentQuestion = questionAnswer[currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    if (currentQuestionIndex === questionAnswer.length - 1) {
      setIsQuizCompleted(true);
    }
    setSelectedAnswer(answer);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setSelectedAnswer(null);
    setIsQuizCompleted(false);
  };

  return (
    <section className="bg-black px-[9%]">
      <div className="relative mt-[9.92vw] flex flex-col rounded-[16px] bg-white px-[6%] py-[6%] lg:p-[3.333vw]">
        <div className="flex flex-col">
          <h2 className="font-latoBold text-[8vw] text-primary lg:text-[2.083vw]">Mini Quiz</h2>
          <h2 className="font-latoBold text-[4vw] text-black lg:text-[1.25vw]">
            Question {currentQuestion.number}/5
          </h2>
        </div>

        <div className="mx-auto my-[2vw] flex w-full flex-col rounded-[16px] bg-primary px-[6%] py-[6%] lg:my-0 lg:-mt-[5vw] lg:min-h-[40.729vw] lg:w-[36.406vw] lg:rounded-[0.625vw] lg:p-[2.083vw]">
          {isQuizCompleted ? (
            <div className="flex flex-grow flex-col">
              <p className="text-[4vw] font-bold text-white lg:text-[1.25vw]">Result</p>

              <p className="my-[4vw] text-[5vw] font-semibold text-white lg:my-[1.667vw] lg:text-[1.667vw]">
                Overall: {(correctCount / questionAnswer.length) * 100}%
              </p>

              <p className="text-white lg:text-[1.25vw]">Total Question: {questionAnswer.length}</p>
              <p className="mt-[0.833vw] text-white lg:text-[1.25vw]">Total Score: 100</p>
              <p className="mt-[0.833vw] text-white lg:text-[1.25vw]">
                Correct Answer: {correctCount}
              </p>
              <p className="mt-[0.833vw] text-white lg:text-[1.25vw]">
                Wrong Answer: {questionAnswer.length - correctCount}
              </p>

              <a
                onClick={handleRestart}
                className="mt-auto flex h-[2.604vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[1.563vw] transition-all duration-700 ease-in-out hover:scale-[102%]"
              >
                Restart
              </a>
            </div>
          ) : (
            <div>
              <p className="text-[4vw] font-bold text-white lg:text-[1.25vw]">
                Quiz {currentQuestion.number}
              </p>
              <p className="my-[4vw] text-[5vw] font-semibold text-white lg:my-[1.667vw] lg:text-[1.667vw]">
                {currentQuestion.question}
              </p>

              <div className="flex flex-col gap-y-[2vw] rounded-[16px] lg:gap-y-[0.625vw]">
                {currentQuestion.answers.map((answer, idx) => (
                  <div
                    key={idx}
                    className={`cursor-pointer rounded-[2vw] px-4 py-2 text-[4vw] font-semibold lg:rounded-[0.417vw] lg:text-[1.25vw] ${selectedAnswer === answer ? "bg-[#58B9D1] text-white" : "bg-white"}`}
                    onClick={() => handleAnswerSelection(answer)}
                  >
                    {answer}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          {questionAnswer.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full ${index <= currentQuestionIndex ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
