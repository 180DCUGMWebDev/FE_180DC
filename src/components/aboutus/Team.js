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
  const boas = [
    {
      position: "-bottom-[20%] max-lg:-left-[5%] lg:-bottom-[7%] origin-center max-lg:scale-[1.4]",
      src: "https://utfs.io/f/2297509e-a2f6-450c-934a-9a14fee3daec-4uuzu3.png",
      alt: "180dc bod profile picture",
      name: "Martinus K. Y. P.",
      role: "Vice President of External",
    },
    {
      position: "left-[5%] -bottom-[30%] lg:-bottom-[25%] origin-center scale-[1.7] lg:scale-[1.5]",
      src: "https://utfs.io/f/18e06f42-87b3-4143-9980-61bbba216e62-o58nz6.png",
      alt: "180dc bod profile picture",
      name: "Beatrice S. T. S.",
      role: "President of 180DC UGM",
    },
    {
      position: "max-lg:-bottom-[0%] max-2xl:-bottom-0 2xl:-top-[5%] origin-center lg:scale-[0.8]",
      src: "https://utfs.io/f/61b6d197-4eff-4609-a069-daa6cd0eb9ba-6nj4o9.png",
      alt: "180dc bod profile picture",
      name: "Yoanita Dinda P.",
      role: "Vice President of Internal",
    },
  ];

  const staffs = [
    {
      position: "bottom-[11%] lg:bottom-[10%] origin-center scale-[1.2]",
      src: "https://utfs.io/f/cac27f85-0a5f-4af9-95fa-c272f16e8974-iw0cgt.png",
      alt: "180dc bod profile picture",
      name: "Zahid Arkaan",
      role: "Director of Consulting",
    },
    {
      position: "bottom-[5%] lg:bottom-[5%] origin-center scale-[1.2]",
      src: "https://utfs.io/f/a0f542ac-89f8-45b1-948a-5735b4e342f5-17rd4.png",
      alt: "180dc bod profile picture",
      name: "Jasmine Iliyya",
      role: "Director of Marketing",
    },
    {
      position: "bottom-[11%] lg:bottom-[10%] origin-center scale-[1.2]",
      src: "https://utfs.io/f/9d693fe5-952e-44a3-bd6a-36cfa1a7aacc-mddipe.png",
      alt: "180dc bod profile picture",
      name: "Rio Agustino H.",
      role: "Director of Client Engagement",
    },
    {
      position: "bottom-[11%] lg:bottom-[10%] origin-center scale-[1.2]",
      src: "https://utfs.io/f/b0d34327-7077-407b-ac47-0655a42661e0-152j3i.png",
      alt: "180dc bod profile picture",
      name: "Thara Zahira M.",
      role: "Director of Human Resources",
    },
    {
      position: "-bottom-[18%] lg:-bottom-[20%] origin-center scale-[1.6] -left-[5%]",
      src: "https://utfs.io/f/9a098273-54fc-4e31-8d9e-750c9a435e01-1ax8qt.png",
      alt: "180dc bod profile picture",
      name: "Shahnaz N. A.",
      role: "Director of Strategy and Growth",
    },
    {
      position: "-bottom-[8%] lg:-bottom-[10%] origin-center scale-[1.4]",
      src: "https://utfs.io/f/da42c4de-8448-4bbc-af9a-d0f91c07e0da-13v3l0.png",
      alt: "180dc bod profile picture",
      name: "Divanti A. W.",
      role: "Director of Finance and Legal",
    },
  ]

  const values = [boas, staffs];

  const highRoles = [
    "President of 180DC UGM",
    "Vice President of External",
    "Vice President of Internal",
  ];

  const classes = {
    presClass: "h-[430px] rounded-t-[10vw] 2xl:rounded-t-[154px] w-3/12 max-lg:h-[25vh] ",
    vPresClass: "h-[400px] rounded-t-[11vw] 2xl:rounded-t-[169px] w-3/12 max-lg:h-[23vh] ",
    nonPresClass: "h-[350px] rounded-t-full w-3/12 max-lg:h-[20vh] min-[1500px]:w-2/12 ",
  };

  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex items-center justify-center w-full min-h-screen h-fit">
        <div className="flex w-full min-h-full h-fit flex-col items-center 2xl:w-[1536px]">
          {/* Title */}
          <div className="flex flex-col w-full min-h-[15vh] lg:min-h-[25vh] justify-end bg-black px-[50px]">
            <div className="w-full justify-center text-center mb-[24px]">
              <h1 className="text-primary text-[8vw]/[7.8vw] lg:text-[4vw]/[3.9vw] font-avenirBlack 2xl:text-[61px]/[60px]">
                {content.welcoming}
              </h1>
              <h2 className="font-avenirBook text-secondary text-[2.7vw]/[3vw] lg:text-[1.8vw]/[2vw] mt-[4px] 2xl:text-[27.6px]/[30.7px]">
                {content.term}
              </h2>
            </div>
          </div>
          {/* BoDs */}
          <div className="flex flex-col w-full min-h-[75vh] h-fit items-center lg:px-[130px] pb-[60px]  2xl:mx-[50px]">
            {/* White Background */}
            <div className="absolute -z-[998] w-full h-full bg-white" />
            <h2 className="font-latoBoldItalic text-primary text-[4vw] lg:text-[1.8vw]/[2vw] mt-[24px] 2xl:text-[27.6px]/[30.7px]">
              {"Board of Directors"}
            </h2>
            {/* Cards Row */}
            {values.map((value, idx) => {
              return (
                <div key={idx} className="flex flex-wrap w-full h-fit justify-center items-end pt-[24px] gap-[5vw] 2xl:gap-[76.8px] ">
                  {value.map((valuePerRow) => {
                    return (
                      <>
                        {/* Cards */}
                        <div
                          className={
                            "relative flex justify-center items-end bg-gradient-to-b from-transparent from-[65%] 2xl:from-[60%] to-white to-[80%] lg:to-[73%] overflow-x-clip  " +
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
                            <ImgF src={valuePerRow.src} alt={valuePerRow.alt} prioritize={true} />
                          </div>
                          {/* Content */}
                          <div className="flex flex-col items-center justify-end w-full mb-0 lg:mb-[1vh] h-full">
                            <h3
                              className={
                                "font-avenirBlack text-primary mt-[24px] text-center h-fit " +
                                (highRoles.includes(valuePerRow.role)
                                  ? "text-[2.88vw]/[2.88vw] lg:text-[2.3vw]/[2.34vw] 2xl:text-[29px]/[36px]"
                                  : "text-[3vw]/[3vw] lg:text-[2vw]/[2.3vw] 2xl:text-[28px]/[35px]")
                              }
                            >
                              {valuePerRow.name}
                            </h3>
                            <h4
                              className={
                                "font-avenirBook text-secondary text-center h-[14%] " +
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
