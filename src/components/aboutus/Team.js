import ImgF from "../global/ImgF";

export default function Team() {
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
    presClass: "h-[62vh] rounded-t-[10vw]",
    vPresClass: "h-[57vh] rounded-t-[11vw]",
    nonPresClass: "h-[57vh] rounded-t-full",
  };

  return (
    <section className="w-full min-h-screen h-fit flex flex-col items-center">
      {/* Title */}
      <div className="flex flex-col w-full min-h-[25vh] justify-end bg-black px-[50px]">
        <div className="w-full justify-center text-center mb-[24px]">
          <h1 className="text-primary text-[64px]/[60px] font-avenirBlack">
            {"Meet Our Team"}
          </h1>
          <h2 className="font-avenirBook text-secondary text-[28px]/[36px] mt-[4px]">
            {"2023/2024"}
          </h2>
        </div>
      </div>
      {/* BoDs */}
      <div className="relative flex flex-col w-full min-h-[75vh] h-fit items-center px-[130px] pb-[60px] gap-[60px]">
        {/* White Background */}
        <div className="absolute -z-[998] w-full h-full bg-white" />

        <h2 className="font-latoBoldItalic text-primary text-[28px]/[36px] mt-[24px]">
          {"Board of Directors"}
        </h2>
        {/* Cards Row */}
        {values.map((value) => {
          return (
            <div className="flex w-full h-fit justify-center items-end mt-[24px] gap-[5vw]">
              {value.map((valueD) => {
                return (
                  <>
                    {/* Cards */}
                    <div
                      className={
                        "relative flex justify-center items-end w-full bg-gradient-to-b from-transparent from-[65%] to-white to-[85%] overflow-clip " +
                        (valueD.role === "President of 180DC UGM"
                          ? classes.presClass
                          : valueD.role === "Vice President of Internal" ||
                            valueD.role === "Vice President of External"
                          ? classes.vPresClass
                          : classes.nonPresClass)
                      }
                    >
                      {/* Background */}
                      <div
                        className={
                          "absolute -z-[1] w-full h-full " + valueD.position
                        }
                      >
                        <ImgF src={valueD.src} alt={valueD.alt} />
                      </div>
                      {/* Content */}
                      <div className="flex flex-col items-center w-full mb-[16px]">
                        <h3
                          className={
                            "font-avenirBlack text-primary mt-[24px] " +
                            (highRoles.includes(valueD.role)
                              ? "text-[40px]/[44px]"
                              : "text-[32px]/[36px]")
                          }
                        >
                          {valueD.name}
                        </h3>
                        <h4
                          className={
                            "font-avenirBook text-secondary -mt-[6px] " +
                            (highRoles.includes(valueD.role)
                              ? "text-[24px]/[28px]"
                              : "text-[20px]/[24px]")
                          }
                        >
                          {valueD.role}
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
    </section>
  );
}
