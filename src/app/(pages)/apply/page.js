"use client";

// Import Packages
import { FaPlay } from "react-icons/fa";

// Import Components
import Button from "@/components/global/Button";
import ImgF from "@/components/global/ImgF";
import ProjectStructureList from "@/components/misc/ProjectStructureList";

// Import Configs
import { createBackground } from "@/config/Functions";
import { useContext, useEffect, useState } from "react";
import { connectSS } from "@/components/apply/connectSpreadsheets";
import { UtilsContext } from "@/contexts/UtilsContext";

export default function Apply() {
  const { toastNotify } = useContext(UtilsContext);

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
      placeholder: "Write down the social media. For instance, @180dcugm (instagram)",
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

    connectSS(forms, "Applicants", () => {
      forms.map((id, idx) => {
        editForm("", idx);
      });
    });

    toastNotify("Data has been submitted!", "success");
  };

  // Points in the middle of the form, seperate columns by new array
  const projectScope = [
    [
      "Impact Model Analysis",
      "Management Informations System",
      "Client Vendor Management",
      "Project and Strategy Implementation",
    ],
    ["Marketing Analysis", "Human Resource Management", "Developing Optimal Process", "Others"],
  ];

  return (
    <main>
      <section className="relative flex h-fit min-h-screen items-center justify-center overflow-clip">
        {/* Background */}
        {createBackground("dark")}

        {/* Background Assets */}
        <div className="absolute -z-[997] flex h-full w-[100vw] lg:h-[112.5vw]">
          {/* Green Flowers */}
          {/* Bottom-Most Right-Most */}
          <div className="absolute bottom-[5%] right-0 opacity-[.06] max-lg:hidden">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Bottom-Most Left-Most */}
          <div className="absolute left-0 top-0 rotate-[12deg] scale-[.5] opacity-[.06] max-lg:hidden lg:bottom-[15%] lg:left-[30%]">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Left-Most Second */}
          <div className="absolute left-[30%] top-[35%] rotate-[40deg] scale-[.3] opacity-[.06] max-lg:hidden">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Left-Most Top-Most */}
          <div className="absolute -top-[1.5%] left-[14%] -rotate-[15deg] scale-[.3] opacity-[.06] max-lg:hidden">
            <ImgF src="/img/apply/type1green.png" alt="deco img" />
          </div>

          {/* Light Blue Flowers */}
          <div className="absolute left-[5%] top-[4%] opacity-[.06] max-lg:hidden">
            <ImgF src="/img/apply/type3lgblue.png" alt="deco img" />
          </div>

          {/* Blue Flowers */}
          {/* Right-Most Top-Most */}
          <div className="-max-lg:rotate-[90deg] absolute right-[2%] top-[155px] opacity-[.08] max-lg:scale-[0.9] lg:right-[5%] lg:top-[6%]">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>

          {/* Left-Most Second */}
          <div className="absolute bottom-[26%] left-[4%] opacity-[.08] max-lg:hidden">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>

          {/* Left-Most Bottom-Most */}
          <div className="absolute left-[2%] top-[90px] rotate-[45deg] scale-[2] opacity-[.08] max-lg:scale-[1.5] lg:-bottom-[9%] lg:left-[1%]">
            <ImgF src="/img/apply/type2blue.png" alt="deco img" />
          </div>
        </div>

        {/* Content */}
        <div className="flex h-fit w-full flex-col overflow-clip px-[50px] pb-[60px] pt-[120px] lg:gap-[2.2vw] 2xl:w-[1536px] 2xl:gap-[33.8px]">
          {/* Title */}
          <div className="flex w-full justify-center">
            <h1 className="text-center font-avenirBlack text-[10vw]/[10vw] text-primary lg:text-[5vw] 2xl:text-[76.8px]">
              {"Client Application Form"}
            </h1>
          </div>
          {/* Steps n Forms */}
          <div
            className={
              "flex h-fit w-full flex-col duration-300 lg:flex-row lg:gap-[40px] " +
              (openPS ? " gap-[40px]" : " gap-0")
            }
          >
            {/* Project Structure */}
            <div className="w-full lg:w-[40%]">
              <div className="relative my-[2vh] flex w-full items-center justify-center bg-lightWhite/[2%] font-avenirBook text-[5vw] text-primary lg:hidden">
                <FaPlay
                  className="scale-x-[1.05] scale-y-[1.4]"
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
            <form className="flex w-full flex-col gap-[1.6vw] lg:w-[60%] 2xl:gap-[24.5px]">
              {forms.map((form, idx) => {
                return (
                  <>
                    <div className="flex w-full flex-col">
                      {/* Question */}
                      <label className="font-latoRegular text-lightWhite max-lg:text-[3.7vw]/[4vw] lg:text-[1.13vw] 2xl:text-[17.3px]">
                        {form.question}
                      </label>
                      {/* Answer Box */}
                      {form.type === "textarea" ? (
                        <textarea
                          className={
                            "h-[90px] rounded-[1vw] px-[1vw] py-[0.5vw] text-start outline-none max-lg:text-[3.7vw]/[4vw] lg:rounded-[4px] lg:px-[9px] lg:py-[4px] lg:text-[1.13vw] 2xl:text-[17.3px]" +
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
                            "rounded-[1vw] px-[9px] py-[4px] text-start outline-none max-lg:text-[3vw] lg:rounded-[4px] lg:text-[1.13vw] 2xl:text-[17.3px]" +
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
                        <div className="my-[10px] flex flex-col">
                          {/* Title */}
                          <h1 className="font-latoRegular text-lightWhite max-lg:text-[3.7vw]/[4vw] lg:text-[1.13vw] 2xl:text-[17.3px]">
                            {"Project Scope"}
                          </h1>
                          {/* Contents */}
                          <div className="flex w-full">
                            {projectScope.map((project, idx) => {
                              return (
                                <ul key={idx} className="flex w-full flex-col max-lg:gap-[0.45vh]">
                                  {project.map((item) => {
                                    return (
                                      <li
                                        className="flex items-center gap-[5px] font-latoRegular text-lightWhite max-lg:text-[3vw]/[3.2vw] lg:text-[1.13vw] 2xl:text-[17.3px]"
                                        key={item}
                                      >
                                        <div className="mb-[3px] h-[6px] w-[6px] rounded-full bg-primary lg:h-[12px] lg:w-[12px]" />
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
              <div className="flex w-full max-lg:mt-[1.5vh] max-lg:justify-center">
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
