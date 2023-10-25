export default function ProjectStructureList({ divConfig, lineConfig }) {
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

  return (
    <div className={"flex flex-col " + divConfig}>
      {steps.map((step, idx) => {
        return (
          <div
            key={idx}
            className="relative flex flex-col w-full h-fit gap-[15px]"
          >
            {/* Poles */}
            {idx !== steps.length - 1 ? (
              <div className={"absolute flex justify-center w-[10%] lg:w-[5%] " + lineConfig}>
                <div className="flex w-[40%] justify-center">
                  <div className={"relative w-[2.5vw] lg:-[0.4vw] h-full 2xl:w-[6.1px]"}>
                    <div className="absolute -z-[997] w-full h-full max-lg:top-[1vh] bg-secondary" />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Balls and Title */}
            <div className="flex w-full items-center h-fit gap-[5%]">
              <div className="flex w-[10%] lg:w-[5%] justify-center">
                <div className="w-[6vw] h-[6vw] lg:w-[1.5vw] lg:h-[1.5vw] bg-primary rounded-full mb-[3px] 2xl:w-[23px] 2xl:h-[23px]" />
              </div>
              <div className="flex w-[90%]">
                <h1 className="text-primary text-[5vw] lg:text-[1.9vw] leading-[1.1] font-avenirBlack w-full 2xl:text-[29px]">
                  {step.title}
                </h1>
              </div>
            </div>
            {/* Descriptions */}
            <div className="flex w-full h-fit">
              <div className="relative w-[15%] lg:w-[10%]"></div>
              <div className="flex w-[85%] lg:w-[90%]">
                <p className="font-latoRegular text-lightWhite text-[3.7vw] lg:text-[1.13vw] leading-[1.25] 2xl:text-[17.3px]">
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
