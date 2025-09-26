"use client";

// Import Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMemo, useCallback, useEffect, useRef, useState } from "react";

// Import Components
import ImgF from "@/components/element/ImgF";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Configs
import { createBackground } from "@/config/Functions";

// Import Styles
import "swiper/css";

export default function PreviousClients() {
  // State to check if the component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure component is only rendered on the client
    setIsMounted(true);
  }, []);

  // Data
  const clientsPorto = useMemo(
    () => [
      {
        name: "Kopi Sembilan",
        nps: "100%",
        logo: "/img/portofolio/company_logos/kopi_sembilan.png",
        desc: "Kopi Sembilan is a local coffee shop and one of the SMEs based on Yogyakarta.",
        pleft:
          "Kopi Sembilan faced problems regarding to supply chain, ambiguity of their management structure, and challenges on getting structured budget planning and bookkeeping.",
        pcenter:
          "We helped them by restructurizing the hierarchy of Kopi Sembilan’s management. Our team also provided the integrated bookkeeping system by creating supply chain tracking management system",
        pright:
          "We provided organization structure, inventory management, and management controlling system which are more effective for financial reporting. It also affects for the better operational controlling and decision making in Kopi Sembilan.",
        prightcondition: "impact",
      },
      {
        name: "Planet Protector Packaging",
        nps: "100%",
        logo: "/img/portofolio/company_logos/planet_protector_packaging.png",
        desc: "Planet Protector Packaging is the distributor of isolated sustainable, recyclable, biodegradable, and compost packaging - Woolpack to Australia and New Zealand.",
        pleft:
          "PPP needs advice to penetrate the Indonesian market as the part of their market expansion.",
        pcenter:
          "We developed eligible business model for PPP and go-to-market entry proposal to overcome the obstacles of the market entry which is supported by strategic partnership planning.",
        pright:
          "We had been able to secure several companies to make partnership with PPP and recommended strategy to approach the government. The insights that we had got, helped PPP to penetrate Indonesian market.",
        prightcondition: "impact",
      },
      {
        name: "Mercy Ships",
        nps: "90%",
        logo: "/img/portofolio/company_logos/mercy_ships.png",
        desc: "Mercy Ships is an international charity that operates the largest non-governmental hospital ships in the world, providing humanitarian aid.",
        pleft:
          "Mercy Ships wanted to enter the Asian market, in particular: Indonesia, Vietnam, and Philippines market as a part of their broader expansion.",
        pcenter:
          "We developed a market and competitor analysis, as well as solution that focuses on website optimization strategy, consists of UI/UX and marketing strategy for each country.",
        pright:
          "We delivered strategy that Mercy Ships use to developed its website and social media. This include an implementation plan that consists of timeline, human resources needed, and metrics for KPI.",
        prightcondition: "impact",
      },
      {
        name: "Widya Edu",
        nps: "100%",
        logo: "/img/portofolio/company_logos/Widya_Edu.png",
        desc: "Widya Edu is an education technology based company that aims to help Indonesian high school students pursue their college dream by practicing and consultation.",
        pleft:
          "Widya edu faced low explore and brand identification in the edu tech market. The project scope was surrounded in marketing.",
        pcenter:
          " We offered to provide Widya Edu in gaining exposure on the current red ocean edu tech market. This widened their market channel of  all students.",
        pright:
          " “Made it much easier to achieve our aims. We are Satisfied with the work! We are so impressed. Thank you! “.",
        prightcondition: "comment",
      },
      {
        name: "Asdos.id",
        nps: "90%",
        logo: "/img/portofolio/company_logos/Asdos.Id.jpg",
        desc: "Asdos is an online marketplace platform aimed to provide academic assistance services for University students.",
        pleft:
          "Asdos.Id was faced with low brand recognition and needed to re-evaluated their current brand value and proposition.",
        pcenter:
          "We offered to provide consultation on the increasing of their current brand recognition of their current market segment, especially since they are about to re-launch..",
        pright:
          " “It was the best solution for social impact initiatives to receive help from many new insights from 180 Degrees Consulting team. It does not interfere with our day-to-day operations, it did not cost us a lot of resources, and it definitely helped us fill a gap in our company.”",
        prightcondition: "comment",
      },
      {
        name: "Kolom Remaja",
        nps: "100%",
        logo: "/img/portofolio/company_logos/KolomRemaja.png",
        desc: "Kolom Remaja is an independent online media with a focus on promoting freedom of speech and expression especially for the Indonesian youth.",
        pleft:
          "Kolom Remaja was looking for ways to improve its human resources management and upscale its product development strategy.",
        pcenter:
          "We helped to analyze the brand perception of Kolom Remaja and created a development map to strengthen its brand personality. We also developed strategies to improve the synergies among its members.",
        pright:
          " “Great work on this and it was really insightful. Eventually someone was able to do market research and proper analysis to this!”",
        prightcondition: "comment",
      },
      {
        name: "Gores Denai",
        nps: "100%",
        logo: "/img/portofolio/company_logos/GoresDenai.png",
        desc: "Gores Denai is an organization that aims to empower Indonesian youth to gain international exposure and maximize global opportunities especially in the education field.",
        pleft:
          "Gores Denai faced challenges in broadening its leverage in the market through its branding and gaining profits while simultaneously maintaining free product access to the audiences.",
        pcenter:
          "We conducted analysis on Gores Denai’s branding and recommended the sustainable strategic steps to attract customers and increase user engagement which includes the display of filler content and re-evaluation of its programs.",
        pright:
          " “180DC has been very helpful in navigating our organizational concerns. On top of that, the performance of the analyst were incredible as they constantly came up with highly practical and feasible solutions. 100% would recommend.”",
        prightcondition: "comment",
      },
      {
        name: "KitaBisa",
        nps: "80%",
        logo: "/img/portofolio/company_logos/KitaBisa.png",
        desc: "KitaBisa.com is an online crowdfunding platform aim to start humanitarian initiatives, campaign and social programs.",
        pleft:
          "KitaBisa sought the ways to enhance their its branding eminence against its competitors.",
        pcenter:
          "We ran a diagnostic analysis on KitaBisa’s internal situation and offered solutions to strengthen the corporate value, such as strategies to enhance data collection, transparency for viewers, and fill the gaps in its social campaigns and program.",
        pright:
          " “The report they assisted us in developing not only met our expectations, but far exceeded them, reflecting their unwavering commitment to delivering top-tier work.” ",
        prightcondition: "comment",
      },
      {
        name: "EWasteRJ",
        nps: "90%",
        logo: "/img/portofolio/company_logos/EwasteRJ.jpg",
        desc: "EWasteRJ is a waste management community that focuses on educating the society the risks of unsafe disposal of electronic waste and facilitating EWasteRJ dropbox as a contemporary container for electronic waste before running the disposal process.",
        pleft:
          "EWasteRJ was faced with challenges in earning revenues and gaining certainty due to the process of deciding its monetization strategy.",
        pcenter:
          "We offered a consultation service that help to develop meaningful partnerships, execute actions to increase brand awareness, identifying gaps and improvement opportunities to produce more tangible revenue stream.",
        pright:
          " We provided them 2 types of pitch deck to be used for corporate and educational parties, while also listing for potential partners that can be approached by EWasteRJ. We also developed positioning strategies that revolve around brand activation initiatives to differentiate EWasteRJ with another competitors.",
        prightcondition: "impact",
      },
      {
        name: "Tersalur",
        nps: "100%",
        logo: "/img/portofolio/company_logos/LogoTersalur.jpg",
        desc: "Tersalur is a foundation that operates to develop the welfare and quality of human resources in Indonesia, especially those who are vulnerable because of being impacted by poverty, disaster, and diseases.",
        pleft:
          "Tersalur had difficulties in giving training and mentoring to its members, organize effective virtual teams, raise knowledge transfer awareness, and collect documentation.",
        pcenter:
          "We ran an analysis of Tersalur’s organizational structure, recruitment process, and competitors. More to that, we also recommended the strategies to conduct relevant upgrading program to improve both department and general technical skills.",
        pright:
          " “With an affordable price, I would highly recommend their services for other NGOs searching for ways to grow. 180DC not only focus on business profits but also impact which aligns with NGOs, giving their NGO clients well-aligned solutions.”",
        prightcondition: "comment",
      },
    ],
    [],
  );

  // Scroll Down Button
  const handleClick = () => scrollRef.current.scrollIntoView({ behavior: "smooth" });

  // Slide Position
  const [slide, setSlide] = useState(0);
  const swiperRef = useRef();
  const swiperRefMobile = useRef();
  const scrollRef = useRef();

  // Bullets
  const loopForBullets = useCallback(() => {
    return (
      <>
        {clientsPorto.map((client, idx) => {
          if (idx !== clientsPorto.length - 1)
            return (
              <div
                key={idx} // Added unique key
                className={
                  "h-[0.8vw] w-[0.8vw] rounded-full hover:cursor-pointer " +
                  (slide === idx ? "bg-primary" : "bg-light-white")
                }
                onClick={() => {
                  setSlide(idx);
                }}
              />
            );
        })}
      </>
    );
  }, [clientsPorto, slide]);

  const [slideBullets, setSlideBullets] = useState(loopForBullets);

  useEffect(() => {
    setSlideBullets(loopForBullets);
    if (swiperRef.current) swiperRef.current.slideTo(slide);
    if (swiperRefMobile.current) swiperRefMobile.current.slideTo(slide);
  }, [loopForBullets, slide]);

  // Only render Swiper on the client side
  if (!isMounted) return null;

  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Section 1: Title */}
      <div className="relative flex h-full w-full flex-col items-center justify-center px-[10vw] max-lg:gap-[2vh] lg:h-screen">
        {/* Background */}
        <div className="absolute -z-998 h-full w-[240vh] lg:w-full">
          <ImgF alt="portofolio hero background" src="/img/portofolio/hero_bg-c.png" />
        </div>
        <div className="absolute -z-997 h-full w-full bg-linear-to-b from-transparent from-70% to-light-white to-90%" />
        <div className="absolute -z-996 h-full w-full bg-black opacity-[85.45%]" />

        {/* Hero */}
        <h1 className="text-center font-avenir-black text-[12vw]/[11vw] text-light-white lg:text-[4.9vw]/[4.8vw]">
          {"Our Previous Clients"}
        </h1>

        {/* Scroll Down [DESKTOP] */}
        <button className="flex flex-col items-center outline-0" onClick={handleClick}>
          <h2 className="mt-[1.4vw] font-lato-bold text-[1vw] text-light-white max-lg:hidden">
            {"SCROLL DOWN"}
          </h2>
          <FaChevronDown className="animate-moving-pointer text-[1.4vw] text-light-white hover:cursor-pointer" />
        </button>

        {/* Swiper [MOBILE] */}
        <div className="h-fit w-full overflow-clip rounded-[5vw] rounded-bl-none lg:hidden">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRefMobile.current = swiper;
            }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              setSlide(swiper.realIndex);
            }}
          >
            {clientsPorto.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-[55vmax] w-full overflow-clip rounded-[5vw] rounded-bl-none">
                  {/* Background */}
                  <div className="absolute -z-990 h-full w-full">
                    <div className="relative h-full w-full bg-[#2C6970]/47">
                      <div className="absolute left-0 -z-990 h-full w-[70vh]">
                        {/* <ImgF
                          alt={client.name + "_bg" + "_" + { idx }}
                          src={client.backgr}
                          heightPtg={"100%"}
                        /> */}
                      </div>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="flex h-full w-full items-center justify-center px-[1vmin] py-[1.5vh]">
                    {/* Side Arrow Left */}
                    <div
                      className="mr-[1vw] w-fit"
                      onClick={() => {
                        setSlide((slide - 1 + clientsPorto.length - 1) % (clientsPorto.length - 1));
                      }}
                    >
                      <FaChevronLeft className="text-[6vw] text-light-white/35" />
                    </div>

                    <div className="flex h-full w-full flex-col items-center justify-center gap-[5vw] overflow-clip">
                      {/* Identity */}
                      <div className="relative mt-[1.1vw] flex h-[30%] w-full gap-[4vw]">
                        {/* Company Logo */}
                        <div className="flex h-full w-[35%] items-center justify-end">
                          <div className="flex w-full overflow-clip rounded-[3vw]">
                            <ImgF alt={client.name + "_logo"} src={client.logo} />
                          </div>
                        </div>

                        {/* Title & NPS */}
                        <div className="flex h-full w-[65%] flex-col items-start justify-center gap-[.8vh]">
                          <p className="font-avenir-black text-[5vw] leading-none text-primary">
                            {client.name}
                          </p>
                          {/* <p className="font-avenir-light text-[4.5vw] leading-none text-secondary">
                            {"NPS of "}
                            <strong className="font-avenir-heavy">{client.nps}</strong>
                          </p> */}
                        </div>
                      </div>

                      {/* Lower Body: Description */}
                      <div className="swiper-no-swiping flex h-[60%] w-full flex-col gap-[2vh] overflow-y-scroll">
                        <div className="text-justify font-lato-regular text-[3.5vw] leading-[1.2] text-light-white">
                          <p className="mb-[0.6vw] font-avenir-black text-primary">
                            What challenges does {client.name} face?
                          </p>
                          <p>{client.pleft}</p>
                        </div>
                        <div className="font-lato-regular text-[3.5vw] leading-[1.2] text-light-white">
                          <p className="mb-[0.6vw] font-avenir-black text-primary">
                            What solution does we offer?
                          </p>
                          <p>{client.pcenter}</p>
                        </div>
                        <div className="font-lato-regular text-[3.5vw] leading-[1.2] text-light-white">
                          <p className="mb-[0.6vw] font-avenir-black text-primary">
                            {client.prightcondition === "impact"
                              ? "Impact that we deliver"
                              : `${client.name} comments of our work`}
                          </p>
                          <p>{client.pright}</p>
                        </div>
                      </div>

                      <div className="h-[10%]">
                        <p className="font-lato-light-italic text-[3.5vmin] text-light-white">
                          {"Slide For More"}
                        </p>
                      </div>
                    </div>

                    {/* Side Arrow Right */}
                    <div
                      className="ml-[1vw] w-fit"
                      onClick={() => {
                        setSlide((slide + 1) % (clientsPorto.length + 1));
                      }}
                    >
                      <FaChevronRight className="w-fit text-[6vw] text-light-white/35" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Section 2: Portos [DESKTOP] */}
      <div
        ref={scrollRef}
        className="relative hidden w-full flex-col items-center justify-center px-[50px] lg:flex lg:h-screen"
      >
        {/* Background */}
        <div className="absolute top-0 -z-998 h-full w-full overflow-clip">
          <ImgF alt="portofolio hero background" src="/img/portofolio/hero_bg-c.png" />
        </div>
        <div className="absolute -z-997 h-full w-full bg-linear-to-b from-light-white from-20% via-transparent via-45% to-black to-75%" />
        <div className="absolute top-0 -z-997 h-full w-full bg-black opacity-85" />

        <div className="h-full w-full 2xl:w-[1536px]">
          {/* Card Frame */}
          {/* yang ini */}
          <div className="flex h-[85%] w-full items-end justify-center pb-[50px]">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // loop={true}
              onSlideChange={(swiper) => {
                setSlide(swiper.realIndex);
              }}
            >
              {clientsPorto.map((client, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="relative h-[40vw] min-w-[45%]">
                      {/* Background */}
                      <div className="absolute h-[50%] w-full rounded-[1.25vw] rounded-bl-none">
                        <div className="relative h-full w-full bg-[#0A1E22]/47">
                          {/* <div className="absolute left-0 -z-990 h-full w-full">
                            <ImgF alt={client.name + "_bg" + "_" + { idx }} src={client.backgr} />
                          </div> */}
                        </div>
                      </div>

                      {/* Upper Body: Identity */}
                      <div className="relative mt-[1.1vw] flex h-[50%] w-full gap-[30px] p-[20px]">
                        {/* Title & NPS */}
                        <div className="relative flex h-full w-7/12 flex-col items-start justify-start">
                          <p className="font-avenir-black text-[2vw] leading-none text-primary">
                            {client.name}
                          </p>
                          <div className="mt-[1vw] font-avenir-light text-[1.2vw] leading-none text-secondary">
                            <h2 className="font-avenir-black text-light-white"> {client.desc} </h2>
                            <p>
                              <strong className="absolute bottom-[0] font-avenir-heavy text-[1.9vw]">
                                {" "}
                                NPS of {client.nps}
                              </strong>
                            </p>
                          </div>
                        </div>

                        {/* Company Logo */}
                        <div className="flex h-full w-5/12 items-center justify-center">
                          <div className="2x:rounded-[23px] flex w-[80%] overflow-clip rounded-[1.5vw]">
                            <ImgF alt={client.name + "_logo"} src={client.logo} />
                          </div>
                        </div>
                      </div>
                      {/* Lower Body: Description */}
                      <div className="mt-[1.2vw] flex h-full w-full gap-[2.4vw] px-[20px] pb-[20vw]">
                        <div className="w-4/12 text-justify font-lato-regular text-[1vw] leading-[1.2] text-light-white">
                          <p className="mb-[0.6vw] font-avenir-black text-primary">
                            What challenges does {client.name} face?
                          </p>
                          <p>{client.pleft}</p>
                        </div>
                        <div className="w-4/12 text-justify font-lato-regular text-[1vw] leading-[1.2] text-light-white">
                          <p className="mb-[0.6vw] font-avenir-black text-primary">
                            What solution does we offer?
                          </p>
                          <p>{client.pcenter}</p>
                        </div>
                        <div className="w-4/12 text-justify font-lato-regular text-[1vw] leading-[1.2] text-light-white">
                          <p className="mb-[0.6vw] font-avenir-black text-primary">
                            {client.prightcondition === "impact"
                              ? "Impact that we deliver"
                              : `${client.name} comments of our work`}
                          </p>
                          <p>{client.pright}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* Dot Frame */}
          <div className="flex h-[15%] items-start justify-center">
            <div className="flex h-fit items-center gap-[10px]">
              <div
                className="w-fit"
                onClick={() => {
                  setSlide((slide - 1 + clientsPorto.length - 1) % (clientsPorto.length - 1));
                }}
              >
                <FaChevronLeft className="text-[1.4vw] text-light-white hover:cursor-pointer" />
              </div>
              <div className="flex items-center gap-[8px]">{slideBullets}</div>
              <div
                className="w-fit"
                onClick={() => {
                  setSlide((slide + 1) % (clientsPorto.length - 1));
                }}
              >
                <FaChevronRight className="text-[1.4vw] text-light-white hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
