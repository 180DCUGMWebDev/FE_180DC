import ImgF from "../global/ImgF";

export default function Team() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      {/* Title */}
      <div className="flex flex-col w-full h-[30%] justify-end bg-black px-[50px]">
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
      <div className="relative flex flex-col w-full h-[70%] items-center px-[130px]">
        {/* White Background */}
        <div className="absolute -z-[998] w-full h-full bg-white" />

        <h2 className="font-latoBoldItalic text-primary text-[28px]/[36px] mt-[24px]">
          {"Board of Directors"}
        </h2>
        {/* Cards Row */}
        <div className="flex h-full w-full justify-center items-end mt-[24px] gap-[5vw]">
          {/* Cards */}
          <div className="relative flex justify-center items-end w-full h-[92%] rounded-t-[10vw] bg-gradient-to-b from-transparent from-[65%] to-white to-[85%] overflow-clip">
            {/* Background */}
            <div className="absolute -z-[1] -top-[20%] w-full h-full ">
              <ImgF
                src="/img/aboutus/Team/bod.png"
                alt="180dc bod profile picture"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col items-center w-full mb-[12px]">
              <h3 className="font-avenirBlack text-primary text-[28px]/[36px] mt-[24px]">{"Ahmed Sheraz"}</h3>
              <h4 className="font-avenirBook text-secondary text-[16px]/[20px] -mt-[6px]">{"Vice President of External"}</h4>
            </div>
          </div>
          <div className="relative flex justify-center items-end w-full h-full rounded-t-[10vw] bg-gradient-to-b from-transparent from-[65%] to-white to-[85%] overflow-clip">
            {/* Background */}
            <div className="absolute -z-[1] -top-[20%] w-full h-full ">
              <ImgF
                src="/img/aboutus/Team/bod.png"
                alt="180dc bod profile picture"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col items-center w-full mb-[12px]">
              <h3 className="font-avenirBlack text-primary text-[28px]/[36px] mt-[24px]">{"Ahmed Sheraz"}</h3>
              <h4 className="font-avenirBook text-secondary text-[16px]/[20px] -mt-[6px]">{"President of 180DC UGM"}</h4>
            </div>
          </div>
          <div className="relative flex justify-center items-end w-full h-[92%] rounded-t-[10vw] bg-gradient-to-b from-transparent from-[65%] to-white to-[85%] overflow-clip">
            {/* Background */}
            <div className="absolute -z-[1] -top-[20%] w-full h-full ">
              <ImgF
                src="/img/aboutus/Team/bod.png"
                alt="180dc bod profile picture"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col items-center w-full mb-[12px]">
              <h3 className="font-avenirBlack text-primary text-[28px]/[36px] mt-[24px]">{"Ahmed Sheraz"}</h3>
              <h4 className="font-avenirBook text-secondary text-[16px]/[20px] -mt-[6px]">{"Vice President of Internal"}</h4>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
