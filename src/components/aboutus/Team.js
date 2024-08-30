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
  ];

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
                          <div className="mb-0 flex h-full w-full flex-col items-center justify-end lg:mb-[1vh]">
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
