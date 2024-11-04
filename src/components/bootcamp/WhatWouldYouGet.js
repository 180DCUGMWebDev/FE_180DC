import Image from "next/image";

const CardWhat = ({ header, headerMobile, children }) => {
  return (
    <div className="relative flex w-[90%] flex-col items-center justify-center rounded-xl bg-white p-[6%] shadow-inner md:w-[45%] md:p-[2%] lg:w-[40%] xl:w-[30%]">
      <div className="aspect-h-1 aspect-w-3 flex w-full lg:aspect-w-3">
        <Image alt="header" fill objectFit="contain" className="max-lg:hidden" src={header} />
        <Image alt="header" fill objectFit="contain" className="lg:hidden" src={headerMobile} />
      </div>
      {children}
    </div>
  );
};

export const WhatWouldYouGet = () => {
  const whatYouGet = [
    "Faucibus tempor in condimentum. Rhoncus diam a felis nunc.",
    "Faucibus tempor in condimentum  suscipit diam. Rhoncus diam a felis nunc.",
    "Faucibus tempor in condimentum eget suscipit diam. Rhoncus.",
  ];

  const speakerSessions = [
    "Consulting 101",
    "Problem Identification & Frameworks",
    "Business Research Methodology Speaker Session Deck Making & Pitching Techniques",
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
                  <td className="w-[70%] p-[1.5%] text-left font-avenirRegular text-[3.6vw] md:text-[2vw] lg:p-[2.5%] lg:text-[1.3vw] xl:p-[2.6%] 2xl:text-[1.2vw]">
                    {item}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardWhat>
      <CardWhat headerMobile={"/img/bootcamp/horn-mobile.png"} header={"/img/bootcamp/horn.png"}>
        <table className="col-span-2 w-full table-fixed">
          <tbody>
            {speakerSessions.map((item, index) => {
              return (
                <tr key={item}>
                  <td className="w-[70%] p-[1.5%] text-left font-avenirRegular text-[3.6vw] md:text-[2vw] lg:text-[1.3vw] 2xl:text-[1.2vw]">
                    <h5 className="font-avenirHeavy text-[#58B9D1]">{`Speaker Session #${index + 1}:`}</h5>
                    {item}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardWhat>
    </section>
  );
};
