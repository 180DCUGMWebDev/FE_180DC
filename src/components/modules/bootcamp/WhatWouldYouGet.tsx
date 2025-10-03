import Image from "next/image";

const CardWhat = ({ header, headerMobile, children }) => {
  return (
    <div className="relative flex w-[90%] flex-col items-center justify-start rounded-xl bg-white p-[6%] shadow-inner md:w-[48.7%] md:p-[2%]">
      <div className="relative flex aspect-9/3 w-[95%]">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-full w-full">
          <Image alt="header" fill objectFit="contain" className="max-lg:hidden" src={header} />
          <Image alt="header" fill objectFit="contain" className="lg:hidden" src={headerMobile} />
        </div>
      </div>
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
};

export const WhatWouldYouGet = () => {
  const whatYouGet = [
    "Provided with essential skills and and knowledge in consulting given by Experienced Consultants",
    "After-class materials implementation through workshop sessions",
    "Networking with like-minded individuals",
    "Special mentoring session with 180DC UGM team and Experts in Consulting field",
    "Opportunity to solve real business problem and chance to win prizes in final pitching",
    "Receive E-certificate upon completion",
  ];

  const speakerSessions = [
    "Consulting 101",
    "Problem Identification & Frameworks",
    "Business Research Methodology",
    "Deck Making & Pitching Techniques",
  ];

  return (
    <section className="relative flex h-fit w-full items-center justify-start gap-[3vw] bg-[#E8E8E8] max-md:flex-col max-md:gap-[5vw] max-md:pb-[10%] max-md:pt-[5%] md:min-h-screen md:justify-center lg:gap-[2vw]">
      <Image
        alt="bg bootcamp"
        src="/img/bootcamp/bg-lower-mobile.png"
        width={450}
        height={735}
        className="absolute bottom-0 left-0 right-0 mx-auto w-full lg:hidden"
      />
      <Image
        alt="bg bootcamp"
        src="/img/bootcamp/bg-lower.png"
        width={1920}
        height={1080}
        className="absolute bottom-0 left-0 right-0 mx-auto w-full max-lg:hidden"
      />
      <div className="relative flex w-[90%] flex-col justify-between max-md:items-center max-md:gap-[5vw] md:flex-row lg:w-[83%] xl:w-[63%]">
        <CardWhat
          headerMobile={"/img/bootcamp/pentung-mobile.png"}
          header={"/img/bootcamp/pentung.png"}
        >
          <table className="col-span-2 w-full table-fixed">
            <thead>
              <tr>
                <th className="w-[8%]" />
                <th className="w-[75%]" />
              </tr>
            </thead>
            <tbody>
              {whatYouGet.map((item) => {
                return (
                  <tr key={item}>
                    <td className="items-center justify-center">
                      <Image
                        alt="circular blue"
                        src="/img/bootcamp/circle-blue.png"
                        width={200}
                        height={200}
                        className="relative left-0 right-0 mx-auto w-[30%]"
                      />
                    </td>
                    <td className="w-[70%] p-[1.5%] text-left font-avenir-regular text-[3.6vw] md:text-[2vw] lg:p-[1.2%] lg:text-[1.3vw] xl:p-[1.1%] 2xl:text-[1.2vw]">
                      {item}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardWhat>
        <CardWhat headerMobile={"/img/bootcamp/horn-mobile.png"} header={"/img/bootcamp/horn.png"}>
          <div className="relative flex h-full min-h-full w-full flex-col justify-evenly px-[2%] max-lg:gap-[2vw]">
            {speakerSessions.map((item, index) => {
              return (
                <div
                  key={item}
                  className="relative flex w-full flex-col rounded-lg bg-[#73B743] p-[3%] text-left font-avenir-regular text-[3.6vw] text-[#FFFFFF] md:rounded-xl md:text-[2vw] lg:p-[2%] lg:text-[1.3vw] xl:p-[2.5%] 2xl:text-[1.2vw]"
                >
                  <h5 className="font-avenir-black text-[3.6vw] md:text-[2vw] lg:text-[1.3vw] 2xl:text-[1.2vw]">{`Speaker Session #${index + 1}:`}</h5>
                  <p className="text-[3.3vw] md:text-[1.7vw] lg:text-[1.1vw] 2xl:text-[1vw]">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </CardWhat>
      </div>
    </section>
  );
};
