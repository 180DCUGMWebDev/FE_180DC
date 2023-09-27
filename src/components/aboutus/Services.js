// Import Components
import ImgF from "../global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function Services() {
  const content = {
    desc: "Our client-centric services are not limited to the example that we have given here, but will solely focus on the client's needs. We would be happy to hear your initial requests first!",
  };

  // Values
  const services = {
    Operations: {
      position: "top-0 right-0",
      src: "/img/aboutus/Services/operation.png",
      alt: "180dc services operation",
      values: [
        "Financial Analysis",
        "Business Model Transformation",
        "Process Optimization",
        "Partnership Evaluation",
      ],
    },
    "Market Research": {
      position: "top-0 left-0",
      src: "/img/aboutus/Services/market.png",
      alt: "180dc services market research",
      values: [
        "Competitive Analysis",
        "Industry Profiling",
        "Consumer Insights",
        "Data Analysis & Visualization",
      ],
    },
    Growth: {
      position: "top-0 left-0",
      src: "/img/aboutus/Services/growth.png",
      alt: "180dc services growth",
      values: [
        "Go-To-Market Strategy",
        "New Product Development",
        "Customer Acquisition Strategy",
        "Funding Strategy",
      ],
    },
    Organization: {
      position: "top-0 -right-[20%]",
      src: "/img/aboutus/Services/organization.png",
      alt: "180dc services organization",
      values: [
        "Organizational Design",
        "Human Capital Strategy",
        "Diversity, Equity & Inclusion",
        "Purpose Alignment",
      ],
    },
  };

  // Extraction
  let titles = new Array();
  let values = new Array();

  Object.entries(services).forEach((service) => {
    const [key, value] = service;
    titles.push(key);
    values.push(value);
  });

  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}
      <div className="hidden lg:flex w-full h-screen justify-center items-center">
        <div className="flex w-full h-full flex-col justify-center items-center gap-[60px] pt-[20px] pb-[30px] px-[50px] 2xl:w-[1536px] 2xl:h-fit">
          <div className="flex w-full h-[28%]">
            {/* Titles */}
            <div className="flex w-5/12 items-end">
              <h1 className="text-start text-primary text-[4vw]/[3.9vw] font-avenirBlack 2xl:text-[61px]/[60px]">
                {"Our Services"}
                <br />
                {"Offered for You"}
              </h1>
            </div>
            <div className="flex w-7/12 items-end">
              <p className="font-latoRegular text-lightWhite text-[2vw]/[2.67vw] 2xl:text-[30.7px]/[41px]">
                {content.desc}
              </p>
            </div>
          </div>
          <div className="flex grow w-full h-[72%] justify-center gap-[3vw] 2xl:gap-[72px] 2xl:h-fit">
            {/* Cards */}
            {titles.map((val, idx) => {
              return (
                <div key={idx} className="relative flex items-end h-full w-full rounded-t-[20px] bg-gradient-to-b from-transparent from-20% to-black to-[62%] p-[1.5vw] pb-0 overflow-clip 2xl:h-[440px] 2xl:p-[30px]">
                  {/* Background */}
                  <div
                    className={
                      "absolute -z-[1] w-[150%] " + values[idx].position
                    }
                  >
                    <ImgF src={values[idx].src} alt={values[idx].alt} />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col justify-start text-start w-full h-[50%]">
                    <h2 className="text-secondary font-avenirBlack text-[1.9vw] 2xl:text-[29px]">
                      {val}
                    </h2>
                    <ul className="list-disc ms-8 text-lightWhite font-latoRegular leading-[1.2] text-[1.15vw] 2xl:text-[17.6px] ml-[1.9vw] 2xl:ml-[30px]">
                      {values[idx].values.map((value) => {
                        return <li key={value + "_" + idx}>{value}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
