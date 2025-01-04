"use client"
import React, { useState, useEffect } from 'react';

export default function MiniQuiz() {
  const questionAnswer = [
    {
      number: 1,
      question: "quest1",
      answers: [
        "a", "b", "c", "d", "e"
      ]
    },
    {
      number: 2,
      question: "quest2",
      answers: [
        "a", "b", "c", "d", "e"
      ]
    },
    {
      number: 3,
      question: "quest3",
      answers: [
        "a", "b", "c", "d", "e"
      ]
    },
    {
      number: 4,
      question: "quest4",
      answers: [
        "a", "b", "c", "d", "e"
      ]
    },
    {
      number: 5,
      question: "quest5",
      answers: [
        "a", "b", "c", "d", "e"
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (selectedAnswer && currentQuestionIndex < questionAnswer.length - 1) {
      const timer = setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); // Reset answer for next question
      }, 1000); // Delay 1 second before moving to the next question

      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, currentQuestionIndex]);

  const currentQuestion = questionAnswer[currentQuestionIndex];

  return (
    <section className="bg-black px-[9%]">
      <div className="flex flex-col mt-[9.92vw] px-[6%] py-[6%] bg-white rounded-[16px]">
        <div className="flex flex-col">
          <h2 className="font-latoBold text-[40px] text-secondary">Mini Quiz</h2>
          <h2 className="font-latoBold text-[24px] text-black">
            Question {currentQuestion.number}/5
          </h2>
        </div>

        <div className="flex flex-col bg-green-500 px-[2%] py-[2%] rounded-[16px] mb-4">
        <p>Quiz {currentQuestion.number}</p>
          <p>{currentQuestion.question}</p>

          <div className="bg-white rounded-[16px] px-[2%] py-2">
            {currentQuestion.answers.map((answer, idx) => (
              <div
                key={idx}
                className={`cursor-pointer py-2 px-4 ${selectedAnswer === answer ? 'bg-blue-500' : 'bg-gray-100'}`}
                onClick={() => setSelectedAnswer(answer)}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>

         <div className="flex justify-center mt-4 space-x-2">
          {questionAnswer.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${index <= currentQuestionIndex ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
