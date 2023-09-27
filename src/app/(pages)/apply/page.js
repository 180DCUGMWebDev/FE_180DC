"use client";

// Import Components
import Button from "@/components/global/Button";
import ImgF from "@/components/global/ImgF";
import ProjectStructureList from "@/components/misc/ProjectStructureList";

// Import Configs
import { createBackground } from "@/config/Functions";
import { useEffect, useState } from "react";

export default function Apply() {
  const [forms, setForm] = useState([
    {
      question: "Applicant Name",
      placeholder: "Input your name",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Applicant position in the entity",
      placeholder: "Input your position",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Email Address",
      placeholder: "Input your email address",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Phone Number",
      placeholder: "If any, input your active WhatsApp phone number",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Entity's Name",
      placeholder: "Input the entity you are representating",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Entity's Location",
      placeholder: "Input entity address if possible",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Entity's Social Media",
      placeholder:
        "Write down the social media. For instance, @180dcugm (instagram)",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Explain your entity's background model in a short description",
      placeholder:
        "Briefly elaborate your entity's business model and provide any other necessary information",
      type: "textarea",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Length of entity",
      placeholder: "How long has entity been running",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Entity's size",
      placeholder: "The rough amount of people in the entity",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Project scope elaboration",
      placeholder: "Please elaborate your expectations in the services",
      type: "text",
      required: true,
      className: "",
      answer: "",
    },
    {
      question: "Project Outcome",
      placeholder: "Fill in the outcomes expected from the services",
      type: "text",
      required: true,
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
            <ProjectStructureList
              divConfig={"w-[40%] gap-[4%]"}
              lineConfig={"h-[165%] mt-[3%]"}
            />
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
