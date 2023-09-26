"use client";

// Import Components
import Button from "@/components/global/Button";
import ImgF from "@/components/global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";
import { useEffect, useState } from "react";

export default function Apply() {
  const steps = [
    {
      title: "Pre-Week 1 : Initial Consultation",
      desc: "During the initial consultation, we will get to know your organization and more about your mission, your operations, and your short-term and long-term goals. We will also discuss any challenges you are currently facing and ways we can help. Upon mutual agreement, we will move forward with the project.",
    },
    {
      title: "Weeks 1 - 2 : Project Team Introduction",
      desc: "Meet the team you'll be working closely with over the next 8-10 weeks. On this first call, they will introduce themselves, discuss your pain points, ask any necessary clarifying questions, and work closely with you to draft a project roadmap and framework.",
    },
    {
      title: "Weeks 3 - 8 : Research & Analysis",
      desc: "The team works to develop your personalized recommendations through ideation, research, data analysis, and synthesis. They will regularly update you on their progress through weekly calls.",
    },
    {
      title: "Week 5 : Mid-Project Review",
      desc: "A formal mid-project check-in in the form of a presentation or a written deliverable in order to ensure the team is on the correct track and has ample time to adjust their strategy as needed.",
    },
    {
      title: "Week 10 : Final Presentation",
      desc: "After thorough review by the Director of Consulting and project mentor(s), the team walks you through a comprehensive presentation outlining their findings and recommendations.",
    },
    {
      title:
        "Post-Week 10 : 360 Evaluation Meeting with Clients and Client Feedback",
      desc: "We obtain feedback about the team's overall performance, as well as our branch's onboarding process, communication, and quality of deliverables.",
    },
  ];

  const [forms, setForm] = useState([
    {
      question: "Applicant Name",
      placeholder: "Input your name",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Applicant position in the entity",
      placeholder: "Input your position",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Email Address",
      placeholder: "Input your email address",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Phone Number",
      placeholder: "If any, input your active WhatsApp phone number",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Entity's Name",
      placeholder: "Input the entity you are representating",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Entity's Location",
      placeholder: "Input entity address if possible",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Entity's Social Media",
      placeholder:
        "Write down the social media. For instance, @180dcugm (instagram)",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Explain your entity's background model in a short description",
      placeholder:
        "Briefly elaborate your entity's business model and provide any other necessary information",
      type: "textarea",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Length of entity",
      placeholder: "How long has entity been running",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Entity's size",
      placeholder: "The rough amount of people in the entity",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Project scope elaboration",
      placeholder: "Please elaborate your expectations in the services",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "Project Outcome",
      placeholder: "Fill in the outcomes expected from the services",
      type: "text",
      required: false,
      className: "",
      answer: "",
    },
    {
      question: "How did you hear about us?",
      placeholder: "Our instagram, words of mouth, etc",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
  ]);

  // Forn OnClick
  const formEditBtn = (e, idx) => {
    e.preventDefault();
    const answer = e.target.value;
    editForm(answer, idx);
  };

  // Form OnChange
  const editForm = (answer, idx) => {
    // Copy the form and then update the value there
    const copyForm = Array.from(forms, (form) => form);
    copyForm[idx].answer = answer;

    // Save the updated form
    setForm(copyForm);
  };

  const [formComplete, setFormComplete] = useState(true);
  useEffect(() => {
    const valid = forms.every((form) => {
      if (form.required) {
        return form.answer != "";
      } else {
        return true;
      }
    });

    // console.log("Edit check: ", valid);

    if (valid) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }

    // console.log("Out Result: ", formComplete);
  }, [forms]);

  // Form OnSubmit
  const formSubmitBtn = (e) => {
    e.preventDefault();

    // ############ FOR BACKEND: Input the action here later on. (No need to worry if the data is already completed or not).
    // console.log("Test Button Click");
  };

  // Points in the middle of the form, seperate columns by new array
  const projectScope = [
    [
      "Impact Model Analysis",
      "Management Informations System",
      "Client Vendor Management",
      "Project and Strategy Implementation",
    ],
    [
      "Marketing Analysis",
      "Human Resource Management",
      "Developing Optimal Process",
      "Others",
    ],
  ];

  return (
    <main>
      <section className="relative flex min-h-screen h-fit overflow-clip justify-center items-center">
        {/* Background */}
        {createBackground("dark")}

        {/* Background Assets */}
        <div className="hidden lg:flex absolute -z-[997] w-[100vw] h-[112.5vw]">
          {/* Green Flowers */}
          {/* Bottom-Most Right-Most */}
          <div className="absolute bottom-[5%] right-0 opacity-[.06]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Bottom-Most Left-Most */}
          <div className="absolute bottom-[15%] left-[30%] opacity-[.06] rotate-[12deg] scale-[.5]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Left-Most Second */}
          <div className="absolute top-[35%] left-[30%] opacity-[.06] rotate-[40deg] scale-[.3]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Left-Most Top-Most */}
          <div className="absolute -top-[1.5%] left-[14%] opacity-[.06] -rotate-[15deg] scale-[.3]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Light Blue Flowers */}
          <div className="absolute top-[4%] left-[5%] opacity-[.06] ">
            <ImgF src="/img/apply/type3lgblue.png" alt="deco img" />
          </div>

          {/* Blue Flowers */}
          {/* Right-Most Top-Most */}
          <div className="absolute top-[6%] right-[5%] opacity-[.08] ">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>

          {/* Left-Most Second */}
          <div className="absolute bottom-[26%] left-[4%] opacity-[.08] ">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>

          {/* Left-Most Bottom-Most */}
          <div className="absolute -bottom-[9%] left-[1%] opacity-[.08] rotate-[45deg] scale-[2]">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>
        </div>

        {/* Content */}
        <div className="hidden lg:flex flex-col w-full h-fit pt-[120px] pb-[60px] px-[50px] gap-[2.2vw] overflow-clip 2xl:gap-[33.8px] 2xl:w-[1536px]">
          {/* Title */}
          <div className="flex w-full justify-center">
            <h1 className="text-center text-primary text-[5vw] font-avenirBlack 2xl:text-[76.8px]">
              {"Client Application Form"}
            </h1>
          </div>
          {/* Steps n Forms */}
          <div className="flex w-full gap-[40px]">
            {/* Left-Steps */}
            <div className="flex flex-col w-[40%] gap-[4%]">
              {steps.map((step, idx) => {
                return (
                  <div key={idx} className="relative flex flex-col w-full h-fit gap-[15px]">
                    {/* Poles */}
                    <div className="absolute flex justify-center w-[5%] h-[165%] mt-[3%]">
                      <div className="flex w-[40%] justify-center">
                        <div
                          className={
                            "relative w-[0.4vw] h-full 2xl:w-[6.1px] " +
                            (idx !== steps.length - 1 ? " " : " hidden")
                          }
                        >
                          <div className="absolute -z-[997] w-full h-full  bg-secondary" />
                        </div>
                      </div>
                    </div>
                    {/* Balls and Title */}
                    <div className="flex w-full items-center h-fit gap-[5%]">
                      <div className="flex w-[5%] justify-center">
                        <div className="w-[1.5vw] h-[1.5vw] bg-primary rounded-full mb-[3px] 2xl:w-[23px] 2xl:h-[23px]" />
                      </div>
                      <div className="flex w-[90%]">
                        <h1 className="text-primary text-[1.9vw] leading-[1.1] font-avenirBlack w-full 2xl:text-[29px]">
                          {step.title}
                        </h1>
                      </div>
                    </div>
                    {/* Descriptions */}
                    <div className="flex w-full h-fit">
                      <div className="relative w-[10%]"></div>
                      <div className="flex w-[90%]">
                        <p className="font-latoRegular text-lightWhite text-[1.13vw] leading-[1.25] 2xl:text-[17.3px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Right Forms */}
            <form className="flex flex-col w-[60%] gap-[1.6vw] 2xl:gap-[24.5px]">
              {forms.map((form, idx) => {
                return (
                  <>
                    <div className="flex flex-col w-full">
                      {/* Question */}
                      <label className="font-latoRegular text-lightWhite text-[1.13vw] 2xl:text-[17.3px]">
                        {form.question}
                      </label>
                      {/* Answer Box */}
                      {form.type === "textarea" ? (
                        <textarea
                          className={
                            "text-start outline-none rounded-[4px] px-[9px] py-[4px] h-[90px] text-[1.13vw] 2xl:text-[17.3px]" +
                            form.className
                          }
                          id={idx + "_applyform"}
                          name={form.question}
                          type={form.type}
                          autoComplete="off"
                          placeholder={form.placeholder}
                          value={form.answer}
                          onChange={(e) => {
                            formEditBtn(e, idx);
                          }}
                        />
                      ) : (
                        <input
                          className={
                            "text-start outline-none rounded-[4px] px-[9px] py-[4px] text-[1.13vw] 2xl:text-[17.3px]" +
                            form.className
                          }
                          id={idx + "_applyform"}
                          name={form.question}
                          type={form.type}
                          autoComplete="off"
                          placeholder={form.placeholder}
                          value={form.answer}
                          onChange={(e) => {
                            formEditBtn(e, idx);
                          }}
                        />
                      )}
                    </div>
                    {/* Sneaking the Project Scope */}
                    {idx === 9 ? (
                      <>
                        {/* Project Scope */}
                        <div className="flex flex-col my-[10px]">
                          {/* Title */}
                          <h1 className="font-latoRegular text-lightWhite text-[1.13vw] 2xl:text-[17.3px]">
                            {"Project Scope"}
                          </h1>
                          {/* Contents */}
                          <div className="flex w-full">
                            {projectScope.map((project, idx) => {
                              return (
                                <ul key={idx} className="flex flex-col w-full">
                                  {project.map((item) => {
                                    return (
                                      <li
                                        className="font-latoRegular text-lightWhite text-[1.13vw] flex items-center gap-[5px] 2xl:text-[17.3px]"
                                        key={item}
                                      >
                                        <div className="w-[12px] h-[12px] bg-primary rounded-full mb-[3px]" />
                                        <p>{item}</p>
                                      </li>
                                    );
                                  })}
                                </ul>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
              <Button
                color={"green"}
                text={"Submit"}
                disableForm={!formComplete}
                action={(e) => {
                  formSubmitBtn(e);
                }}
                addClass={
                  "w-[9vw] h-[30px] text-[1.1vw] 2xl:w-[138px] 2xl:text-[16.8px] " +
                  (!formComplete ? "opacity-[70%]" : "")
                }
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
