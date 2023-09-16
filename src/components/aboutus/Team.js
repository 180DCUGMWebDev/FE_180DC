// Import Components
import ImgF from "../global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function Team() {
  // Content
  const content = {
    welcoming: "Meet Our Team",
    term: "2023/2024",
  };

  // Values
  const values = [
    [
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "Vice President of External",
      },
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "President of 180DC UGM",
      },
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "Vice President of Internal",
      },
    ],
    [
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "BoA Staff",
      },
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "BoA Staff",
      },
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "BoA Staff",
      },
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "BoA Staff",
      },
    ],
    [
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "BoA Staff",
      },
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "BoA Staff",
      },
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "BoA Staff",
      },
      {
        position: "-top-[20%]",
        src: "/img/aboutus/Team/board.svg",
        alt: "180dc bod profile picture",
        name: "Ahmed Sheraz",
        role: "BoA Staff",
      },
    ],
  ];

  const highRoles = [
    "President of 180DC UGM",
    "Vice President of External",
    "Vice President of Internal",
  ];

  const classes = {
    presClass: "h-[62vh] rounded-t-[10vw] 2xl:h-[430px] 2xl:rounded-t-[154px] ",
    vPresClass: "h-[57vh] rounded-t-[11vw] 2xl:h-[400px] 2xl:rounded-t-[169px] ",
    nonPresClass: "h-[54vh] rounded-t-full 2xl:h-[330px] ",
  };

  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="hidden lg:flex items-center justify-center w-full min-h-screen h-fit">
        <div className="flex w-full min-h-full h-fit flex-col items-center 2xl:w-[1536px]">
          {/* Title */}
          <div className="flex flex-col w-full min-h-[25vh] justify-end bg-black px-[50px]">
            <div className="w-full justify-center text-center mb-[24px]">
              <h1 className="text-primary text-[4vw]/[3.9vw] font-avenirBlack 2xl:text-[61px]/[60px]">
                {content.welcoming}
              </h1>
              <h2 className="font-avenirBook text-secondary text-[1.8vw]/[2vw] mt-[4px] 2xl:text-[27.6px]/[30.7px]">
                {content.term}
              </h2>
            </div>
          </div>
          {/* BoDs */}
          <div className="flex flex-col w-full min-h-[75vh] h-fit items-center px-[130px] pb-[60px] gap-[60px] 2xl:mx-[50px]">
            {/* White Background */}
            <div className="absolute -z-[998] w-full h-full bg-white" />
            <h2 className="font-latoBoldItalic text-primary text-[1.8vw]/[2vw] mt-[24px] 2xl:text-[27.6px]/[30.7px]">
              {"Board of Directors"}
            </h2>
            {/* Cards Row */}
            {values.map((value) => {
              return (
                <div className="flex w-full h-fit justify-center items-end mt-[24px] gap-[5vw] 2xl:gap-[76.8px]">
                  {value.map((valuePerRow) => {
                    return (
                      <>
                        {/* Cards */}
                        <div
                          className={
                            "relative flex justify-center items-end w-full bg-gradient-to-b from-transparent from-[65%] to-white to-[85%] overflow-clip " +
                            (valuePerRow.role === "President of 180DC UGM"
                              ? classes.presClass
                              : valuePerRow.role ===
                                  "Vice President of Internal" ||
                                valuePerRow.role ===
                                  "Vice President of External"
                              ? classes.vPresClass
                              : classes.nonPresClass)
                          }
                        >
                          {/* Background */}
                          <div
                            className={
                              "absolute -z-[1] w-full h-full " +
                              valuePerRow.position
                            }
                          >
                            <ImgF src={valuePerRow.src} alt={valuePerRow.alt} />
                          </div>
                          {/* Content */}
                          <div className="flex flex-col items-center w-full mb-[16px]">
                            <h3
                              className={
                                "font-avenirBlack text-primary mt-[24px] " +
                                (highRoles.includes(valuePerRow.role)
                                  ? "text-[2.55vw]/[2.6vw] 2xl:text-[39px]/[40px]"
                                  : "text-[2vw]/[2.3vw] 2xl:text-[30.7px]/[35px]")
                              }
                            >
                              {valuePerRow.name}
                            </h3>
                            <h4
                              className={
                                "font-avenirBook text-secondary -mt-[6px] " +
                                (highRoles.includes(valuePerRow.role)
                                  ? "text-[1.5vw]/[1.55vw] 2xl:text-[23px]/[23.8px]"
                                  : "text-[1.35vw]/[1.45vw] 2xl:text-[20.7px]/[22.2px]")
                              }
                            >
                              {valuePerRow.role}
                            </h4>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
