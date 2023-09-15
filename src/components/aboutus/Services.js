import ImgF from "../global/ImgF";

export default function Services() {
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
    <section className="w-full h-screen flex flex-col justify-center items-center gap-[60px] py-[20px] px-[50px]">
      <div className="flex w-full h-[25%]">
        <div className="flex w-6/12 items-end">
          <h1 className="text-start text-primary text-[64px]/[60px] font-avenirBlack">
            {"Our Services"}
            <br />
            {"Offered for You"}
          </h1>
        </div>
        <div className="flex w-6/12 items-end">
          <p className="font-latoRegular text-lightWhite text-[24px]/[32px]">
            {
              "Our client-centric services are not limited to the example that we have given here, but will solely focus on the client's needs. We would be happy to hear your initial requests first!"
            }
          </p>
        </div>
      </div>
      <div className="flex grow w-full h-[75%] justify-center gap-[72px]">
        {/* Cards */}
        {titles.map((val, idx) => {
          return (
            <div className="relative flex items-end h-full w-full rounded-t-[20px] bg-gradient-to-b from-transparent from-20% to-black to-[62%] p-[30px] pb-0 overflow-clip">
              {/* Background */}
              <div className={"absolute -z-[1] w-[150%] " + values[idx].position}>
                <ImgF src={values[idx].src} alt={values[idx].alt} />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-start text-start w-full h-[50%]">
                <h2 className="text-secondary font-avenirBlack text-[30px]">
                  {val}
                </h2>
                <ul className="list-disc ms-8 text-lightWhite font-latoRegular text-[18px]">
                  {values[idx].values.map((value) => {
                    return <li key={value}>{value}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
