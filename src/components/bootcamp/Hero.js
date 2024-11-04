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
      <div className="relative">

    {/* Bgain kiri */}
        <Image
          src="/img/bootcamp/heroBootcamp.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-screen w-screen object-cover"
        />

        
        
        <div className="relative z-20 flex flex-col items-center justify-center h-screen md:flex-row">

            {/* bagian kiri */}
            <div className="flex flex-col md:w-1/2">
                <div className="flex flex-col w-full items-center px-8">
                    <Image
                    src="/img/bootcamp/consultingBootcampLogo.png"
                    width={2000}
                    height={2000}
                    className="w-[304px] h-[117px] md:w-[748px] md:h-[289px] object-contain"
                    />
                    <h2 className="font-avenirBlack mt-3 text-[16px] md:text-[48px] text-white"> <span className=" font-avenirLight">by</span> 180DC UGM</h2>
                </div>
                {/* bagian enroll */}
                <div className=" flex-col mt-[70px] w-full px-4 hidden md:flex items-center">
                    <div>
                        <p className="text-[14px] md:text-[24px] text-white180">Our free courses to equip you <br />  all necessary materials of Consulting</p>
                        <Button
                        color="white"
                        text="Enroll me Now"
                        addClass="w-[40%]  h-fit py-[10px] text-[14px] mt-[24px] font-bold"
                        action={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
                    />
                    </div>
                </div>  
            </div>

            {/* bagian kanan */}
            <div className="flex flex-col md:w-1/2">
                <div className="ml-8 md:ml-0 relative bg-white rounded-bl-[40px] w-full h-[83px] md:h-[233px] mt-[80px] rotate-2">
                    <div className="w-full h-full items-center justify-end flex absolute">
                        <h1 className="font-avenirBlack text-[24px] md:text-[67px] leading-[21px] md:leading-[60px] pr-10 md:pr-20 text-secondary text-outline-decoration max-w-[75%] md:max-w-[100%]:">The more you learn, the more you earn!</h1>
                    </div>

                    
                    <div className="flex flex-row absolute -top-10 md:-top-28">
                        <Image
                        src="/img/bootcamp/bootcampBook.png"
                        width={2000}
                        height={2000}
                        className="w-[59px] h-[83px] ml-8 md:hidden"
                        />

                        <Image
                        src="/img/bootcamp/bootcampBookHijau.png"
                        width={2000}
                        height={2000}
                        className="w-[166px] h-[236px]  ml-8 hidden md:flex object-contain"
                        />

                            <div className="w-full ml-4 mt-4 md:ml-8 md:mt-14">
                                <p className=" font-avenirRegular text-[12px] md:text-[36px] text-white180">
                                learn now! become consulting tomorrow.
                                </p>
                            </div>
                    </div>
                    
                    <Image
                        src="/img/bootcamp/bootcampStickyNotes.png"
                        width={2000}
                        height={2000}
                        className="w-[85px] h-[56px] md:w-[239px] md:h-[158px] absolute -right-4 -top-10 md:-right-24 md:-top-24"
                    />

                    <Image
                        src="/img/bootcamp/plsfixBootcamp.png"
                        width={2000}
                        height={2000}
                        className="w-[100px] h-[56px] md:w-[200px] md:h-[112px] absolute right-8 -bottom-[30px] md:right-16 md:-bottom-[50px]"
                    />
                </div> 

                <div className="flex flex-col justify-start w-full px-4 md:px-0">
                    <h3 className="text-white mt-2 md:text-[40px]">Discover Yourself Through...</h3>

                    <div className="flex flex-wrap gap-2 md:gap-4 mt-3 md:mt-6">
                    {items.map((item, index) => (
                        <div key={index} className="px-[10px] md:px-[28px] py-[2px] md:py-[7px] bg-white rounded-bl-xl rounded-r-xl md:rounded-bl-3xl md:rounded-r-3xl">
                            <h2 className="text-[#73B743] font-avenirBlack text-[14px] md:text-[35px]">{item}</h2>
                        </div>
                    ))}
                    </div>
                </div>    

                <div className="flex flex-col mt-[70px] w-full px-4 md:hidden">
                        <p className="text-[14px] text-white180">Our free courses to equip you <br />  all necessary materials of Consulting</p>
                        <Button
                        color="white"
                        text="Enroll me Now"
                        addClass="w-[40%] h-fit py-[10px] text-[14px] mt-[24px] font-bold"
                        action={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
                    />
                </div> 
            </div> 
        </div>
      </div>
    </section>
  );
}
