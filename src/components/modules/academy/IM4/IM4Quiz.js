"use client";
import React, { useState, useEffect, useMemo } from "react";

export default function MiniQuiz() {
    const questionAnswer = useMemo(
        () => [
            {
              number: 1,
              question:
                "A nonprofit organization is struggling to balance its mission-driven initiatives with financial sustainability. Given the Nonprofit Value Framework (NVF), how should the organization strategically allocate resources to maximize social impact while ensuring long-term viability?",
              answers: [
                "Prioritize resource acquisition over mission-driven programs.",
                "Focus solely on fundraising activities to maintain financial stability.",
                "Align resource portfolio management with program activities that generate both social impact and financial sustainability.",
                "Reduce investments in advocacy and innovation to minimize financial risks.",
              ],
              answerKey: 2,
              explanation:
                "C – Aligning resource portfolio management with program activities that generate both social impact and financial sustainability is the most strategic approach.",
            },
            {
              number: 2,
              question:
                "Imagine you are a nonprofit consultant working with an organization that relies on donor funding but struggles with cash flow issues. Based on the resource challenges discussed, what strategy would best help the nonprofit enhance financial predictability while maintaining autonomy?",
              answers: [
                "Diversify revenue sources by incorporating earned income strategies alongside donations.",
                "Rely solely on government grants for long-term funding security.",
                "Shift entirely to a membership-based funding model to avoid donor restrictions.",
                "Reduce services to cut costs and ensure financial stability.",
              ],
              answerKey: 0,
              explanation:
                "A – Diversifying revenue through earned income strategies increases predictability and autonomy while maintaining donor support.",
            },
            {
              number: 3,
              question:
                "A nonprofit wants to expand its advocacy efforts but faces pressure from key funders to shift focus toward direct service provision. Based on stakeholder analysis, how should the organization navigate this tension?",
              answers: [
                "Comply with funders’ demands entirely to secure financial support.",
                "Engage in active dialogue with funders to negotiate alignment between advocacy and service provision.",
                "Disregard funder concerns and prioritize advocacy efforts independently.",
                "Completely restructure the organization’s mission to fit funders’ priorities.",
              ],
              answerKey: 1,
              explanation:
                "B – Engaging in dialogue to align funder interests with organizational goals ensures long-term relationship and mission integrity.",
            },
            {
              number: 4,
              question:
                "Given the strategic management cycle in nonprofits, how should an organization measure its performance and drive innovation without compromising its core mission?",
              answers: [
                "Focus on traditional business performance metrics like profit margins and shareholder returns.",
                "Develop social impact measurement tools that assess both qualitative and quantitative outcomes.",
                "Limit innovation efforts to avoid financial risks associated with new programs.",
                "Base all decisions purely on short-term funding availability, disregarding long-term mission sustainability.",
              ],
              answerKey: 1,
              explanation:
                "B – Measuring both qualitative and quantitative social impact outcomes enables innovation while staying true to the mission.",
            },
            {
              number: 5,
              question:
                "A nonprofit providing essential public goods is facing a \"market failure\" scenario where private businesses do not invest due to lack of profitability. What approach should the nonprofit take to sustain its operations while addressing this gap?",
              answers: [
                "Partner with government agencies and secure subsidies to ensure financial viability.",
                "Transition into a for-profit social enterprise model to attract investors.",
                "Reduce service offerings to only those that generate revenue.",
                "Cease operations and advocate for government intervention instead.",
              ],
              answerKey: 0,
              explanation:
                "A – Partnering with government for subsidies is a strategic way to fill service gaps caused by market failure while ensuring financial sustainability.",
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
    <section className="mt-[3vw] bg-black px-[9%]">
      <div className="relative mt-[9.92vw] flex flex-col rounded-[16px] bg-white px-[6%] py-[6%] lg:p-[3.333vw]">
        <div className="flex flex-col">
          <h2 className="font-latoBold text-[7vw] text-primary lg:text-[2.083vw]">
            Internal Mentoring 4
          </h2>
          <h2 className="font-latoBold text-[7vw] text-primary lg:text-[2.083vw]">Mini Quiz</h2>
          {!isQuizCompleted && (
            <h2 className="font-latoBold text-[4vw] text-black lg:text-[1.25vw]">
              Question {currentQuestion.number}/{questionAnswer.length}
            </h2>
          )}
        </div>

        <div className="mx-auto my-[2vw] flex w-full flex-col rounded-[16px] bg-primary px-[6%] py-[6%] lg:my-0 lg:-mt-[2vw] lg:min-h-[40vw] lg:w-[36vw] lg:rounded-[0.625vw] lg:p-[2vw]">
          {isQuizCompleted ? (
            <div className="flex flex-grow flex-col">
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
