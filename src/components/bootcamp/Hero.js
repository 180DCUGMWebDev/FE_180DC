import Image from "next/image";
import Button from "../global/Button";

export function Hero() {

    const items = [
        "Introduction to ADL",
        "Life as an ADL Consultant",
        "ADL Project Highlights",
        "Interactive Session"
    ];

  return (
    <section>
      <div className="relative ">
        <Image
          src="/img/bootcamp/heroBootcamp.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-screen w-screen object-cover"
        />

        <Image
            src="/img/bootcamp/ellipseBlack.png"
            alt="background"
            width={2000}
            height={2000}
            className="absolute w-[68.27vw] h-[49.07vw] top-[30%] right-[20%] lg:top-0 lg:right-[20.3vw] z-20 lg:w-[37.29vw] lg:h-[26.82vw]"
        />

        <Image
            src="/img/bootcamp/ellipseBlue.png"
            alt="background"
            width={2000}
            height={2000}
            className="absolute w-[68.27vw] h-[49.07vw] -right-[32vw] top-[30%] lg:top-0 lg:-right-[15%] z-20 lg:w-[37.29vw] lg:h-[26.82vw]"
        />

        <Image
            src="/img/bootcamp/ellipseGreen.png"
            alt="background"
            width={2000}
            height={2000}
            className="absolute w-[68.27vw] h-[49.07vw] bottom-[30%] lg:bottom-[10%] lg:right-[10%] z-20 lg:w-[37.29vw] lg:h-[26.82vw]"
        />
       
        
        <div className="relative z-30 flex flex-col items-center justify-center h-screen lg:flex-row">

            {/* bagian kiri */}
            <div className="flex flex-col lg:w-1/2">
                <div className="flex flex-col w-full items-center px-8">
                    <Image
                    src="/img/bootcamp/consultingBootcampLogo.png"
                    width={2000}
                    height={2000}
                    className="w-[77.949vw] h-[30.162vw] lg:w-[38.958vw] lg:h-[15.052vw] object-contain"
                    />
                    <h2 className="font-avenirBlack mt-3 text-[4vw]  lg:text-[2.5vw] text-white"> <span className=" font-avenirLight">by</span> 180DC UGM</h2>
                </div>
                {/* bagian enroll */}
                <div className=" flex-col mt-[3.646vw] w-full px-4 hidden lg:flex items-center">
                    <div>
                        <p className="text-[4vw] lg:text-[1.25vw] text-white180">Our free courses to equip you <br />  all necessary materials of Consulting</p>
                        <Button
                        color="white"
                        text="Enroll me Now"
                        addClass="w-[40%]  h-fit py-[1.563vw] lg:py-[0.9vw] text-[0.729vw] mt-[1.25vw] font-bold"
                        action={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
                    />
                    </div>
                </div>  
            </div>

            {/* bagian kanan */}
            <div className="flex flex-col lg:w-1/2">
                <div className="ml-[8.667vw] lg:ml-0 relative bg-white rounded-bl-[40px] w-full h-[21.282vw] lg:h-[12.135vw] mt-[80px] rotate-2">
                    <div className="w-full h-full items-center justify-end flex absolute">
                        <h1 className="font-avenirBlack text-[6.154vw] md:text-[4vw] lg:text-[3.49vw] leading-[5.385vw] lg:leading-[3.125vw] pr-10 lg:pr-20 text-secondary text-outline-decoration max-w-[75%] lg:max-w-[100%]:">The more you learn, the more you earn!</h1>
                    </div>

                    
                    <div className="flex flex-row absolute -top-10 lg:-top-[4.167vw]">
                        <Image
                        src="/img/bootcamp/bootcampBook.png"
                        width={2000}
                        height={2000}
                        className="w-[15.128vw] h-[21.282vw] ml-8 lg:hidden"
                        />

                        <Image
                        src="/img/bootcamp/bootcampBookHijau.png"
                        width={2000}
                        height={2000}
                        className="w-[16.923vw] h-[24.103vw] lg:w-[8.646vw] lg:h-[12.292vw] ml-4 lg:ml-[1.667vw] hidden lg:flex object-contain"
                        />
                            <div className="w-full ml-4 mt-4 md:mt-1 lg:ml-[1.2vw] lg:mt-[1.883vw]">
                                <p className=" font-avenirRegular text-[3vw] lg:text-[1.875vw] text-white180">
                                learn now! become consulting tomorrow.
                                </p>
                            </div>
                    </div>
                    
                    <Image
                        src="/img/bootcamp/bootcampStickyNotes.png"
                        width={2000}
                        height={2000}
                        className="w-[21.795vw] h-[14.359vw] lg:w-[12.448vw] lg:h-[8.229vw] absolute -right-2 -top-10 md:-top-14 md:right-2   lg:-right-[5vw] lg:-top-[5vw]"
                    />

                    <Image
                        src="/img/bootcamp/plsfixBootcamp.png"
                        width={2000}
                        height={2000}
                        className="w-[25.641vw] h-[14.359vw] md:w-[26.042vw] md:h-[14.583vw] md:-bottom-[6.3vw] md:right-[18.205vw] lg:w-[10.417vw] lg:h-[5.833vw] absolute right-8 -bottom-[30px] lg:right-[3.333vw] lg:-bottom-[2.604vw]"
                    />
                </div> 

                <div className="flex flex-col justify-start w-full px-[8.667vw] lg:px-0">
                    <h3 className="text-white mt-2  text-[2.5vw] lg:text-[2.083vw]">Discover Yourself Through...</h3>

                    <div className="flex flex-wrap gap-[2.133vw] lg:gap-[0.833vw] mt-[3.2vw] lg:mt-[1vw]">
                    {items.map((item, index) => (
                        <div key={index} className="px-[2.564vw] lg:px-[1.458vw] py-[0.513vw] lg:py-[0.365vw] bg-white rounded-bl-xl rounded-r-xl lg:rounded-bl-3xl lg:rounded-r-3xl">
                            <h2 className="text-[#73B743] font-avenirBlack text-[2.9vw] lg:text-[1.823vw]">{item}</h2>
                        </div>
                    ))}
                    </div>
                </div>    

                <div className="flex flex-col mt-[10.938vw] w-full px-[8.667vw] lg:hidden">
                        <p className="text-[2.188vw] text-white180">Our free courses to equip you <br />  all necessary materials of Consulting</p>
                        <Button
                        color="white"
                        text="Enroll me Now"
                       addClass="w-[40%]  h-fit py-[1.563vw] text-[2.9vw] mt-[1.25vw] font-bold"
                        action={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
                    />
                </div> 
            
            </div> 
        </div>
      </div>
    </section>
  );
}
