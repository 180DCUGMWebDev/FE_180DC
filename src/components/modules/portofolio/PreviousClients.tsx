"use client";

// Import Packages
import { useEffect, useRef, useState, useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";

// Import Components
import ImageAction from "@/components/elements/ImageAction";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import Configs
import { createBackground } from "@/config/Functions";
import { NavbarResolver } from "@/components/elements/Navbar/NavbarResolver";
import Container from "@/components/layout/Container";

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
          "We helped them by restructurizing the hierarchy of Kopi Sembilan's management. Our team also provided the integrated bookkeeping system by creating supply chain tracking management system",
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
          ' "Made it much easier to achieve our aims. We are Satisfied with the work! We are so impressed. Thank you! ".',
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
          ' "It was the best solution for social impact initiatives to receive help from many new insights from 180 Degrees Consulting team. It does not interfere with our day-to-day operations, it did not cost us a lot of resources, and it definitely helped us fill a gap in our company."',
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
          ' "Great work on this and it was really insightful. Eventually someone was able to do market research and proper analysis to this!"',
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
          "We conducted analysis on Gores Denai's branding and recommended the sustainable strategic steps to attract customers and increase user engagement which includes the display of filler content and re-evaluation of its programs.",
        pright:
          ' "180DC has been very helpful in navigating our organizational concerns. On top of that, the performance of the analyst were incredible as they constantly came up with highly practical and feasible solutions. 100% would recommend."',
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
          "We ran a diagnostic analysis on KitaBisa's internal situation and offered solutions to strengthen the corporate value, such as strategies to enhance data collection, transparency for viewers, and fill the gaps in its social campaigns and program.",
        pright:
          ' "The report they assisted us in developing not only met our expectations, but far exceeded them, reflecting their unwavering commitment to delivering top-tier work." ',
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
          "We ran an analysis of Tersalur's organizational structure, recruitment process, and competitors. More to that, we also recommended the strategies to conduct relevant upgrading program to improve both department and general technical skills.",
        pright:
          ' "With an affordable price, I would highly recommend their services for other NGOs searching for ways to grow. 180DC not only focus on business profits but also impact which aligns with NGOs, giving their NGO clients well-aligned solutions."',
        prightcondition: "comment",
      },
    ],
    []
  );

  // Scroll Down Button
  const handleClick = () => scrollRef.current?.scrollIntoView({ behavior: "smooth" });

  // Carousel state
  const [api, setApi] = useState<any>(null);
  const [slide, setSlide] = useState(0);
  const scrollRef = useRef(null);

  // Update slide position
  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setSlide(api.selectedIndex);
    });
  }, [api]);

  // Only render on the client side
  if (!isMounted) return null;

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute z-1 h-screen w-full overflow-hidden">
        <ImageAction
          heightPtg="100%"
          alt="portofolio hero background"
          src="/img/portofolio/hero_bg-c.png"
        />
      </div>
      <div className="to-black-300 absolute z-2 h-screen w-full bg-gradient-to-b from-transparent from-70% to-90%" />
      <div className="bg-black-300 absolute z-2 h-screen w-full opacity-[75.45%]" />

      <Container color="dark" className="relative">
        {/* Section 1: Title */}
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center max-lg:gap-8 max-lg:px-8 lg:min-h-screen">
          {/* Hero */}
          <h1 className="font-avenir-black z-3 text-center text-4xl leading-tight text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
            {"Our Previous Clients"}
          </h1>

          {/* Scroll Down [DESKTOP] */}
          <button className="z-3 flex flex-col items-center outline-0">
            <h2 className="font-lato-bold mt-4 text-sm text-gray-100 max-lg:hidden sm:text-base md:text-lg">
              {"SCROLL DOWN"}
            </h2>
            <FaChevronDown
              className="animate-moving-pointer text-lg text-gray-100 hover:cursor-pointer sm:text-2xl md:text-3xl"
              onClick={() => scrollRef.current?.scrollIntoView({ behavior: "smooth" })}
            />
          </button>
        </div>
      </Container>
      <div className="relative">
        {/* Background */}
        <div className="absolute inset-0 z-1 h-full w-full overflow-clip">
          <ImageAction alt="portofolio hero background" src="/img/portofolio/hero_bg-c.png" />
        </div>
        <div className="from-black-300 to-black-300 absolute z-1 h-full w-full bg-gradient-to-b from-20% via-transparent via-45% to-90%" />
        <div className="bg-black-300 absolute top-0 z-1 h-full w-full opacity-85" />

        <Container color="dark" className="relative z-2">
          {/* Section 2: Portos [DESKTOP] */}
          <div
            ref={scrollRef}
            className="relative hidden w-full flex-col items-center justify-center px-6 lg:flex"
          >
            <div className="h-full w-full 2xl:w-[1536px]">
              <div className="relative flex h-[85%] w-full items-end justify-center pb-12 lg:pb-16 2xl:pb-20">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                    slidesToScroll: 1,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 5000,
                    }),
                  ]}
                  setApi={setApi}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {/* Group items in pairs for 2 items per slide */}
                    {clientsPorto.map((client, slideIndex) => (
                      <CarouselItem key={slideIndex} className="basis-1/2 pl-4">
                        <div className="w-full">
                          {/* Card */}
                          <div className="relative h-96 w-full lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                            {/* Background */}
                            <div className="absolute h-1/2 w-full rounded-lg rounded-bl-none lg:rounded-xl 2xl:rounded-2xl">
                              <div className="relative h-full w-full bg-[#0A1E22]/47" />
                            </div>

                            {/* Upper Body: Identity */}
                            <div className="relative mt-4 flex h-1/2 w-full gap-4 p-4 lg:mt-6 lg:gap-8 lg:p-6 xl:gap-12 2xl:p-8">
                              {/* Title & NPS */}
                              <div className="relative flex h-full w-7/12 flex-col items-start justify-start gap-2 lg:gap-4">
                                <p className="font-avenir-black text-lg leading-none text-green-300 lg:text-2xl 2xl:text-3xl">
                                  {client.name}
                                </p>
                                <div className="font-avenir-light text-sm leading-none text-cyan-300 lg:text-base 2xl:text-lg">
                                  <h2 className="font-avenir-black text-gray-100">{client.desc}</h2>
                                  <p>
                                    <strong className="font-avenir-heavy absolute bottom-0 text-base lg:text-xl 2xl:text-2xl">
                                      NPS of {client.nps}
                                    </strong>
                                  </p>
                                </div>
                              </div>

                              {/* Company Logo */}
                              <div className="flex h-full w-5/12 items-center justify-center">
                                <div className="flex w-4/5 overflow-clip rounded-lg lg:rounded-xl 2xl:rounded-2xl">
                                  <ImageAction
                                    alt={client.name + "_logo"}
                                    src={client.logo || "/placeholder.svg"}
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Lower Body: Description */}
                            <div className="mt-4 flex h-full w-full gap-4 px-4 pb-32 lg:mt-6 lg:gap-6 lg:px-6 lg:pb-40 2xl:gap-8 2xl:px-8 2xl:pb-48">
                              <div className="font-lato-regular w-4/12 text-justify text-xs leading-relaxed text-gray-100 lg:text-sm 2xl:text-base">
                                <p className="font-avenir-black mb-2 text-green-300 lg:mb-3">
                                  What challenges does {client.name} face?
                                </p>
                                <p>{client.pleft}</p>
                              </div>
                              <div className="font-lato-regular w-4/12 text-justify text-xs leading-relaxed text-gray-100 lg:text-sm 2xl:text-base">
                                <p className="font-avenir-black mb-2 text-green-300 lg:mb-3">
                                  What solution does we offer?
                                </p>
                                <p>{client.pcenter}</p>
                              </div>
                              <div className="font-lato-regular w-4/12 text-justify text-xs leading-relaxed text-gray-100 lg:text-sm 2xl:text-base">
                                <p className="font-avenir-black mb-2 text-green-300 lg:mb-3">
                                  {client.prightcondition === "impact"
                                    ? "Impact that we deliver"
                                    : `${client.name} comments of our work`}
                                </p>
                                <p>{client.pright}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 z-10 hidden rounded-[10px] bg-green-300/80 hover:bg-green-300 lg:flex" />
                  <CarouselNext className="right-4 z-10 hidden rounded-[10px] bg-green-300/80 hover:bg-green-300 lg:flex" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Carousel [MOBILE] */}
          <div className="z-4 h-fit w-full lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              setApi={setApi}
            >
              <CarouselContent>
                {clientsPorto.map((client, idx) => (
                  <CarouselItem key={idx} className="basis-full">
                    <div className="relative h-96 overflow-clip rounded-[14px] sm:min-h-screen md:h-full">
                      {/* Background */}
                      <div className="absolute -z-990 h-full w-full">
                        <div className="relative h-full w-full bg-[#2C6970]/47" />
                      </div>

                      {/* Cards */}
                      <div className="flex h-full w-full items-center justify-center px-2 py-4 sm:px-4">
                        {/* Side Arrow Left */}
                        <div
                          className="mr-2 w-fit sm:mr-4"
                          onClick={() => {
                            api?.scrollPrev();
                          }}
                        >
                          <FaChevronLeft className="text-4xl text-gray-100/35 sm:text-5xl md:text-6xl" />
                        </div>

                        <div className="flex h-full w-full flex-col items-center justify-center gap-8 overflow-clip sm:gap-12">
                          {/* Identity */}
                          <div className="relative mt-4 flex h-1/3 w-full gap-4 sm:mt-6 sm:gap-6">
                            {/* Company Logo */}
                            <div className="flex h-full w-1/3 items-center justify-end sm:w-2/5">
                              <div className="flex w-full overflow-clip rounded-2xl sm:rounded-3xl">
                                <ImageAction
                                  alt={client.name + "_logo"}
                                  src={client.logo || "/placeholder.svg"}
                                />
                              </div>
                            </div>

                            {/* Title & NPS */}
                            <div className="flex h-full flex-col items-start justify-center gap-2 sm:gap-3">
                              <p className="font-avenir-black text-2xl leading-none text-green-300 sm:text-3xl md:text-4xl">
                                {client.name}
                              </p>
                            </div>
                          </div>

                          {/* Lower Body: Description */}
                          <div className="flex h-3/5 w-full flex-col gap-4 overflow-y-scroll px-4 sm:gap-6 sm:px-6">
                            <div className="font-lato-regular text-justify text-sm leading-relaxed text-gray-100 sm:text-base md:text-lg">
                              <p className="font-avenir-black mb-2 text-green-300">
                                What challenges does {client.name} face?
                              </p>
                              <p>{client.pleft}</p>
                            </div>
                            <div className="font-lato-regular text-sm leading-relaxed text-gray-100 sm:text-base md:text-lg">
                              <p className="font-avenir-black mb-2 text-green-300">
                                What solution does we offer?
                              </p>
                              <p>{client.pcenter}</p>
                            </div>
                            <div className="font-lato-regular text-sm leading-relaxed text-gray-100 sm:text-base md:text-lg">
                              <p className="font-avenir-black mb-2 text-green-300">
                                {client.prightcondition === "impact"
                                  ? "Impact that we deliver"
                                  : `${client.name} comments of our work`}
                              </p>
                              <p>{client.pright}</p>
                            </div>
                          </div>

                          <div className="h-1/12">
                            <p className="font-lato-light-italic text-sm text-gray-100 sm:text-base">
                              {"Slide For More"}
                            </p>
                          </div>
                        </div>

                        {/* Side Arrow Right */}
                        <div
                          className="ml-2 w-fit sm:ml-4"
                          onClick={() => {
                            api?.scrollNext();
                          }}
                        >
                          <FaChevronRight className="w-fit text-4xl text-gray-100/35 sm:text-5xl md:text-6xl" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </Container>
      </div>
    </div>
  );
}
