// Import Components
import Button from "@/components/global/Button";
import ImgF from "@/components/global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

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

  const forms = [
    {
      question: "Applicant Name",
      placeholder: "Input your name",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Applicant position in the entity",
      placeholder: "Input your position",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Email Address",
      placeholder: "Input your email address",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Phone Number",
      placeholder: "If any, input your active WhatsApp phone number",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Entity's Name",
      placeholder: "Input the entity you are representating",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Entity's Location",
      placeholder: "Input entity address if possible",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Entity's Social Media",
      placeholder:
        "Write down the social media. For instance, @180dcugm (instagram)",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Explain your entity's background model in a short description",
      placeholder:
        "Briefly elaborate your entity's business model and provide any other necessary information",
      type: "textarea",
      required: false,
      className: "",
    },
    {
      question: "Length of entity",
      placeholder: "How long has entity been running",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Entity's size",
      placeholder: "The rough amount of people in the entity",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Project scope elaboration",
      placeholder: "Please elaborate your expectations in the services",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "Project Outcome",
      placeholder: "Fill in the outcomes expected from the services",
      type: "text",
      required: false,
      className: "",
    },
    {
      question: "How did you hear about us?",
      placeholder: "Our instagram, words of mouth, etc",
      type: "text",
      required: false,
      className: "",
    },
  ];

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
      <section className="relative h-fit overflow-clip">
        {/* Background */}
        {createBackground("dark")}

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

        {/* Right-Most Second */}
        <div className="absolute bottom-[26%] left-[4%] opacity-[.08] ">
          <ImgF src="/img/apply/type2blue.png" alt="deco img" />
        </div>

        {/* Right-Most Bottom-Most */}
        <div className="absolute -bottom-[9%] left-[1%] opacity-[.08] rotate-[45deg] scale-[2]">
          <ImgF src="/img/apply/type2blue.png" alt="deco img" />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full h-fit pt-[120px] pb-[60px] px-[50px] gap-[30px]">
          {/* Title */}
          <div className="flex w-full justify-center">
            <h1 className="text-center text-primary text-[5vw] font-avenirBlack">
              {"Client Application Form"}
            </h1>
          </div>
          {/* Steps n Forms */}
          <div className="flex w-full gap-[40px]">
            {/* Left-Steps */}
            <div className="flex flex-col w-[40%] gap-[45px]">
              {steps.map((step, idx) => {
                return (
                  <div className="flex flex-col w-full h-fit gap-[10px]">
                    {/* Balls and Title */}
                    <div className="flex w-full items-center h-fit gap-[5%]">
                      <div className="flex w-[5%] justify-center">
                        <div className="w-[17px] h-[17px] bg-primary rounded-full mb-[3px]" />
                      </div>
                      <div className="flex w-[90%]">
                        <h1 className="text-primary text-[1.9vw] leading-[1.1] font-avenirBlack w-full">
                          {step.title}
                        </h1>
                      </div>
                    </div>
                    {/* Poles and Descriptions */}
                    <div className="flex w-full h-fit gap-[5%]">
                      <div className="flex w-[5%] justify-center">
                        <div
                          className={
                            "relative w-[4px] h-[230%] -mt-[140%] " +
                            (idx !== steps.length - 1 ? " " : " hidden")
                          }
                        >
                          <div className="absolute -z-[997] w-full h-full  bg-secondary" />
                        </div>
                      </div>
                      <div className="flex w-[90%]">
                        <p className="font-latoRegular text-lightWhite text-[1.3vw] leading-[1.25]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Right Forms */}
            <form className="flex flex-col w-[60%] gap-[20px]">
              {forms.map((form, idx) => {
                return (
                  <>
                    <div className="flex flex-col w-full">
                      {/* Question */}
                      <label className="font-latoRegular text-lightWhite text-[1.3vw]">
                        {form.question}
                      </label>
                      {/* Answer Box */}
                      <input
                        className={
                          "text-start outline-none rounded-[4px] px-[9px] py-[4px] " +
                          form.className
                        }
                        id={idx + "_applyform"}
                        name={form.question}
                        type={form.type}
                        autoComplete="off"
                        placeholder={form.placeholder}
                      />
                    </div>
                    {/* Sneaking the Project Scope */}
                    {idx === 9 ? (
                      <>
                        {/* Project Scope */}
                        <div className="flex flex-col my-[10px]">
                          {/* Title */}
                          <h1 className="font-latoRegular text-lightWhite text-[1.3vw]">
                            {"Project Scope"}
                          </h1>
                          {/* Contents */}
                          <div className="flex w-full">
                            {projectScope.map((project) => {
                              return (
                                <ul className="flex flex-col w-full">
                                  {project.map((item) => {
                                    return (
                                      <li
                                        className="font-latoRegular text-lightWhite text-[1.3vw] flex items-center gap-[5px]"
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
                addClass={"w-[9vw] h-[30px] text-[1.1vw]"}
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
