"use client";

// Import Packages
import { FaPlay } from "react-icons/fa";

// Import Components
import Button from "@/components/global/Button";
import ImgF from "@/components/global/ImgF";
import ProjectStructureList from "@/components/misc/ProjectStructureList";

// Import Configs
import { createBackground } from "@/config/Functions";
import { useEffect, useState } from "react";
import { connectSS, uploadData } from "@/components/apply/connectSpreadsheets";
import { toastNotify } from "@/config/Functions";

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

  // Project Structure Mobile OnClick
  const [openPS, setOpenPS] = useState(false);

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

    connectSS();
    uploadData(forms);

    toastNotify("Data has been submitted!", "success");

    forms.map((id, idx) => {
      editForm("", idx);
    });
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
        <div className="flex absolute -z-[997] w-[100vw] h-full lg:h-[112.5vw]">
          {/* Green Flowers */}
          {/* Bottom-Most Right-Most */}
          <div className="max-lg:hidden absolute bottom-[5%] right-0 opacity-[.06]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Bottom-Most Left-Most */}
          <div className="max-lg:hidden absolute top-0 left-0 lg:bottom-[15%] lg:left-[30%] opacity-[.06] rotate-[12deg] scale-[.5]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Left-Most Second */}
          <div className="max-lg:hidden absolute top-[35%] left-[30%] opacity-[.06] rotate-[40deg] scale-[.3]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Left-Most Top-Most */}
          <div className="max-lg:hidden absolute -top-[1.5%] left-[14%] opacity-[.06] -rotate-[15deg] scale-[.3]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Light Blue Flowers */}
          <div className="max-lg:hidden absolute top-[4%] left-[5%] opacity-[.06] ">
            <ImgF src="/img/apply/type3lgblue.png" alt="deco img" />
          </div>

          {/* Blue Flowers */}
          {/* Right-Most Top-Most */}
          <div className="absolute top-[155px] right-[2%] max-lg:scale-[0.9] -max-lg:rotate-[90deg] lg:top-[6%] lg:right-[5%] opacity-[.08] ">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>

          {/* Left-Most Second */}
          <div className="max-lg:hidden absolute bottom-[26%] left-[4%] opacity-[.08] ">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>

          {/* Left-Most Bottom-Most */}
          <div className="absolute top-[90px] max-lg:scale-[1.5] left-[2%] lg:-bottom-[9%] lg:left-[1%] opacity-[.08] rotate-[45deg] scale-[2]">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col w-full h-fit pt-[120px] pb-[60px] px-[50px] lg:gap-[2.2vw] overflow-clip 2xl:gap-[33.8px] 2xl:w-[1536px]">
          {/* Title */}
          <div className="flex w-full justify-center">
            <h1 className="text-center text-primary text-[10vw]/[10vw] lg:text-[5vw] font-avenirBlack 2xl:text-[76.8px]">
              {"Client Application Form"}
            </h1>
          </div>
          {/* Steps n Forms */}
          <div
            className={
              "flex flex-col lg:flex-row w-full h-fit lg:gap-[40px] duration-300 " +
              (openPS ? " gap-[40px] " : " gap-0 ")
            }
          >
            {/* Project Structure */}
            <div className="w-full lg:w-[40%]">
              <div className="lg:hidden relative my-[2vh] w-full flex items-center justify-center text-primary font-avenirBook text-[5vw] bg-lightWhite/[2%]">
                <FaPlay
                  className="scale-y-[1.4] scale-x-[1.05]"
                  onClick={() => setOpenPS(!openPS)}
                />
                <p className="w-full text-center">{"Project Structure"}</p>
              </div>
              {/* Left-Steps */}
              <div className="flex overflow-clip">
                <ProjectStructureList
                  divConfig={
                    "w-full gap-[4%] duration-500 " +
                    (openPS ? " max-lg:-mt-0" : " max-lg:-mt-[400%]")
                  }
                  lineConfig={"h-[120%] lg:h-[130%] mt-[3%] "}
                  componentExtra={" mb-[1vh] gap-[1vh]"}
                />
              </div>
            </div>
            {/* Right Forms */}
            <form className="flex flex-col w-full lg:w-[60%] gap-[1.6vw] 2xl:gap-[24.5px]">
              {forms.map((form, idx) => {
                return (
                  <>
                    <div className="flex flex-col w-full">
                      {/* Question */}
                      <label className="font-latoRegular text-lightWhite max-lg:text-[3.7vw]/[4vw] lg:text-[1.13vw] 2xl:text-[17.3px]">
                        {form.question}
                      </label>
                      {/* Answer Box */}
                      {form.type === "textarea" ? (
                        <textarea
                          className={
                            "text-start outline-none rounded-[1vw] lg:rounded-[4px] px-[1vw] py-[0.5vw] lg:px-[9px] lg:py-[4px] h-[90px] max-lg:text-[3.7vw]/[4vw] lg:text-[1.13vw] 2xl:text-[17.3px]" +
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
                            "text-start outline-none rounded-[1vw] lg:rounded-[4px] px-[9px] py-[4px] max-lg:text-[3vw] lg:text-[1.13vw] 2xl:text-[17.3px]" +
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
                          <h1 className="font-latoRegular text-lightWhite max-lg:text-[3.7vw]/[4vw] lg:text-[1.13vw] 2xl:text-[17.3px]">
                            {"Project Scope"}
                          </h1>
                          {/* Contents */}
                          <div className="flex w-full">
                            {projectScope.map((project, idx) => {
                              return (
                                <ul
                                  key={idx}
                                  className="flex flex-col w-full max-lg:gap-[0.45vh]"
                                >
                                  {project.map((item) => {
                                    return (
                                      <li
                                        className="font-latoRegular text-lightWhite max-lg:text-[3vw]/[3.2vw] lg:text-[1.13vw] flex items-center gap-[5px] 2xl:text-[17.3px]"
                                        key={item}
                                      >
                                        <div className="w-[6px] h-[6px] lg:w-[12px] lg:h-[12px] bg-primary rounded-full mb-[3px]" />
                                        <p className="w-full">{item}</p>
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
              <div className="w-full flex justify-center max-lg:mt-[1.5vh]">
                <Button
                  color={"green"}
                  text={"Submit"}
                  disableForm={!formComplete}
                  action={(e) => {
                    formSubmitBtn(e);
                  }}
                  addClass={
                    "w-[18vw] lg:w-[9vw] max-lg:py-[0.5vh] h-fit lg:h-[30px] text-[2.8vw] lg:text-[1.1vw] 2xl:w-[138px] 2xl:text-[16.8px] " +
                    (!formComplete ? "opacity-[70%]" : "")
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
