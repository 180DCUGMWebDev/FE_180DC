// Import Components
import ImgF from "../global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function Team() {
  // Content
  const content = {
    welcoming: "Meet Our Team",
    term: "2024/2025",
  };

  // Values
  const boas = [
    {
      position: "origin-center",
      src: "https://utfs.io/f/5RHVvFIjFRXpzJbqIEL0BM4EUV5wnfv7p8JYANdZm6IKSCWO",
      alt: "180dc bod profile picture",
      name: "Clea Amabelle",
      role: "President of 180DC UGM",
    },
    {
      position: "origin-center bottom-[3vw]",
      src: "https://utfs.io/f/5RHVvFIjFRXpjdtLH4Ydw9AGmnCbDtR8za6q0vox5WHyeNKF",
      alt: "180dc bod profile picture",
      name: "Nathaniel C.",
      role: "Vice President of 180DC UGM",
    },
  ];

  const staffs = [
    {
      position: "origin-center bottom-[4vw]",
      src: "https://utfs.io/f/5RHVvFIjFRXpwJ0vShkIyolUh9gKrmXeVFs4C3WnajZL1kEO",
      alt: "180dc bod profile picture",
      name: "M. D. Dewanata",
      role: "Director of Consulting",
    },
    {
      position: " origin-center bottom-[4vw]",
      src: "https://utfs.io/f/5RHVvFIjFRXpRwjSlds6h9vaYDTItf70J8U4pAg1rxNRcqdK",
      alt: "180dc bod profile picture",
      name: "Rianti Eka W.",
      role: "Director of Marketing",
    },
    {
      position: "origin-center bottom-[4vw] ",
      src: "https://utfs.io/f/5RHVvFIjFRXp5MId1xjFRXpVEwKSolut37TPvJMngbNmIrB0",
      alt: "180dc bod profile picture",
      name: "Rashid Abi A.",
      role: "Director of Client Engagement",
    },
    {
      position: "origin-center bottom-[4vw]",
      src: "https://utfs.io/f/5RHVvFIjFRXp9q2sryCQnbTIUA72xLgFRBK6O1EqG0MWPZif",
      alt: "180dc bod profile picture",
      name: "Reina Amerya",
      role: "Director of Human Resources",
    },
    {
      position: "origin-center bottom-[4vw] ",
      src: "https://utfs.io/f/5RHVvFIjFRXpzEWXimL0BM4EUV5wnfv7p8JYANdZm6IKSCWO",
      alt: "180dc bod profile picture",
      name: "Keona Huang",
      role: "Director of Strategy and Growth",
    },
    {
      position: "origin-center bottom-[4vw] ",
      src: "https://utfs.io/f/5RHVvFIjFRXpGkRWCyXUvZM9aJPh1ncyqIpTkx4gNKAbR35W",
      alt: "180dc bod profile picture",
      name: "Audrey Pamula",
      role: "Director of Finance",
    },
    {
      position: "origin-center bottom-[4vw] ",
      src: "https://utfs.io/f/5RHVvFIjFRXpXvqZAUDClvw5B8d3fT42VaGQizZ9SpOh6goL",
      alt: "180dc bod profile picture",
      name: "Anisa Puspita",
      role: "Director of Legal",
    },
  ];

  const values = [boas, staffs];

  const highRoles = [
    "President of 180DC UGM",
    "Vice President of External",
    "Vice President of Internal",
  ];

  const classes = {
    presClass: "h-[430px] rounded-t-[10vw] 2xl:rounded-t-[154px] w-3/12 max-lg:h-[21vh]  ",
    vPresClass: "h-[400px] rounded-t-[11vw] 2xl:rounded-t-[169px] w-3/12 max-lg:h-[20vh]  ",
    nonPresClass: "h-[350px] rounded-t-full w-3/12 max-lg:h-[20vh] min-[1500px]:w-2/12 ",
  };

  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit min-h-screen w-full items-center justify-center">
        <div className="flex h-fit min-h-full w-full flex-col items-center 2xl:w-[1536px]">
          {/* Title */}
          <div className="flex min-h-[15vh] w-full flex-col justify-end bg-black px-[50px] lg:min-h-[25vh]">
            <div className="mb-[24px] w-full justify-center text-center">
              <h1 className="font-avenirBlack text-[8vw]/[7.8vw] text-primary lg:text-[4vw]/[3.9vw] 2xl:text-[61px]/[60px]">
                {content.welcoming}
              </h1>
              <h2 className="mt-[4px] font-avenirBook text-[2.7vw]/[3vw] text-secondary lg:text-[1.8vw]/[2vw] 2xl:text-[27.6px]/[30.7px]">
                {content.term}
              </h2>
            </div>
          </div>
          {/* BoDs */}
          <div
            data-gsap="up-stagger"
            className="flex h-fit min-h-[75vh] w-full flex-col items-center pb-[60px] lg:px-[130px] 2xl:mx-[50px]"
          >
            {/* White Background */}
            <div className="absolute -z-[998] h-full w-full bg-white" />
            <h2 className="mt-[24px] font-latoBoldItalic text-[4vw] text-primary lg:text-[1.8vw]/[2vw] 2xl:text-[27.6px]/[30.7px]">
              {"Board of Directors"}
            </h2>
            {/* Cards Row */}
            {values.map((value, idx) => {
              return (
                <div
                  key={idx}
                  className="flex h-fit w-full flex-wrap items-end justify-center gap-[5vw] pt-[24px] 2xl:gap-[76.8px]"
                >
                  {value.map((valuePerRow) => {
                    return (
                      <>
                        {/* Cards */}
                        <div
                          className={
                            "relative flex items-end justify-center overflow-x-clip bg-gradient-to-b from-transparent from-[65%] to-white to-[80%] lg:to-[73%] 2xl:from-[60%] " +
                            (valuePerRow.role === "President of 180DC UGM"
                              ? classes.presClass
                              : valuePerRow.role === "Vice President of Internal" ||
                                  valuePerRow.role === "Vice President of External"
                                ? classes.vPresClass
                                : classes.nonPresClass)
                          }
                        >
                          {/* Background */}
                          <div className={"absolute -z-[1] h-full w-full " + valuePerRow.position}>
                            <ImgF src={valuePerRow.src} alt={valuePerRow.alt} prioritize={true} />
                          </div>
                          {/* Content */}
                          <div className="flex h-full w-full flex-col items-center justify-end lg:mb-[1vh] m-[2vw]">
                            <h3
                              className={
                                "mt-[24px] h-fit text-center font-avenirBlack text-primary " +
                                (highRoles.includes(valuePerRow.role)
                                  ? "text-[2.88vw]/[2.88vw] lg:text-[2.3vw]/[2.34vw] 2xl:text-[29px]/[36px]"
                                  : "text-[3vw]/[3vw] lg:text-[2vw]/[2.3vw] 2xl:text-[28px]/[35px]")
                              }
                            >
                              {valuePerRow.name}
                            </h3>
                            <h4
                              className={
                                "h-[14%] text-center font-avenirBook text-secondary " +
                                (highRoles.includes(valuePerRow.role)
                                  ? "text-[2.1vw]/[2.1vw] lg:text-[1.5vw]/[1.55vw] 2xl:text-[23px]/[23.8px]"
                                  : "text-[1.8vw]/[1.8vw] lg:text-[1.35vw]/[1.45vw] 2xl:text-[20.7px]/[22.2px]")
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
