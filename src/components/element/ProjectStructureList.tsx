export default function ProjectStructureList({ divConfig, lineConfig, componentExtra = "" }) {
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
      title: "Post-Week 10 : 360 Evaluation Meeting with Clients and Client Feedback",
      desc: "We obtain feedback about the team's overall performance, as well as our branch's onboarding process, communication, and quality of deliverables.",
    },
  ];

  return (
    <div className={"flex flex-col " + divConfig}>
      {steps.map((step, idx) => {
        return (
          <div
            key={idx}
            className={
              "relative flex h-fit w-full flex-col " +
              (componentExtra === "" ? " gap-[15px]" : componentExtra)
            }
          >
            {/* Poles */}
            {idx !== steps.length - 1 ? (
              <div className={"absolute flex w-[10%] justify-center lg:w-[5%] " + lineConfig}>
                <div className="flex w-[40%] justify-center">
                  <div className={"lg:-[0.4vw] relative h-full w-[2.5vw] 2xl:w-[6.1px]"}>
                    <div className="absolute -z-997 h-full w-full bg-secondary max-lg:top-[1vh]" />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Balls and Title */}
            <div className={"flex h-fit w-full items-center gap-[5%]"}>
              <div className="flex w-[10%] justify-center lg:w-[5%]">
                <div className="mb-[3px] h-[6vw] w-[6vw] rounded-full bg-primary lg:h-[1.5vw] lg:w-[1.5vw] 2xl:h-[23px] 2xl:w-[23px]" />
              </div>
              <div className="flex w-[90%]">
                <h1 className="w-full font-avenir-black text-[5vw] leading-[1.1] text-primary lg:text-[1.9vw] 2xl:text-[29px]">
                  {step.title}
                </h1>
              </div>
            </div>
            {/* Descriptions */}
            <div className="flex h-fit w-full">
              <div className="relative w-[15%] lg:w-[10%]"></div>
              <div className="flex w-[85%] lg:w-[90%]">
                <p className="font-lato-regular text-[3.7vw] leading-tight text-light-white lg:text-[1.13vw] 2xl:text-[17.3px]">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
