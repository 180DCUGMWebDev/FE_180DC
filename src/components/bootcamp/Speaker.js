import Image from "next/image";

export function Speaker() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#E8E8E8] p-4 md:p-6">
      {/* Header */}
      <div className="mt-8 md:mt-[6vw] text-center">
        {/* Ribbon Title */}
        <div className="relative inline-block">
          <Image
            src="/img/bootcamp/circles.png"
            alt=""
            width={130}
            height={130}
            className="absolute -left-24 -top-8 md:-left-[26vw] md:-top-[3vw] md:block hidden w-24 md:w-32"
          />
          <Image
            src="/img/bootcamp/rectangle.png"
            alt="Acquire, Apply, Achieve: Building the Consultants of Tomorrow"
            width={700}
            height={90}
            className="h-auto w-[90vw] md:w-full" 
          />
          <span className="font-avenirBlack absolute inset-0 flex justify-center items-center text-base md:text-[2vw] font-bold text-[#73B743] text-center leading-relaxed md:leading-[1.5] md:flex"> {/* Hidden untuk mobile */}
            Acquire, Apply, Achieve: Building
            <br />
            the Consultants of Tomorrow
          </span>
        </div>
      </div>

      {/* Stacked Content */}
      <div className="relative mt-8 md:mt-[6vw] flex flex-col items-center w-full">
        {/* Silhouette Image with Larger Size */}
        <div className="relative z-10 scale-150">
          <Image
            src="/img/bootcamp/siluet.png"
            alt="Vector image of three silhouettes with question marks"
            width={500}
            height={250}
            className="h-auto w-[80vw] md:w-[35vw]"
          />
        </div>

        {/* TBA Text Boxes over Silhouettes */}
        <div className="absolute top-[35vw] md:top-[15vw] flex justify-around w-[75vw] md:w-[40vw] z-30 hidden md:flex"> 
          <div className="rounded-lg bg-[#F4F4F4] p-2 md:p-[0.5vw] shadow-md w-20 md:w-[6vw] text-center">
            <span className="text-gray-600 text-sm md:text-[0.9vw]">TBA</span>
          </div>
          <div className="rounded-lg bg-[#F4F4F4] p-2 md:p-[0.5vw] shadow-md w-20 md:w-[6vw] text-center">
            <span className="text-gray-600 text-sm md:text-[0.9vw]">TBA</span>
          </div>
          <div className="rounded-lg bg-[#F4F4F4] p-2 md:p-[0.5vw] shadow-md w-20 md:w-[6vw] text-center">
            <span className="text-gray-600 text-sm md:text-[0.9vw]">TBA</span>
          </div>
        </div>

        {/* Event Details */}
        <div className="absolute text-center top-[24vw] md:top-[9vw] w-[85vw] md:w-[40vw] scale-110 scale-x-125 mt-[8vw] max-w-2xl rounded-lg bg-white p-4 md:p-[1.5vw] shadow-lg z-20">
          <div className="flex w-full flex-col md:flex-row">
            {/* Date, Time, and Location Section */}
            <div className="flex w-full md:w-2/3 flex-col space-y-4 md:space-y-[1.5vw]">
              <div className="flex items-center space-x-6 md:space-x-[3vw] mt-2 md:mt-[0.5vw]">
                <div className="flex items-center space-x-2 md:space-x-[0.5vw]">
                  <Image
                    src="/img/bootcamp/calendar.png"
                    alt="Calendar icon"
                    width={20}
                    height={20}
                    className="w-5 md:w-[1.2vw] h-5 md:h-[1.2vw]"
                  />
                  <span className="font-avenirBlack text-sm md:text-[1vw]">XX November 2024</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-[0.5vw]">
                  <Image
                    src="/img/bootcamp/clock.png"
                    alt="Clock icon"
                    width={20}
                    height={20}
                    className="w-5 md:w-[1.2vw] h-5 md:h-[1.2vw]"
                  />
                  <span className="font-avenirBlack text-sm md:text-[1vw]">16.30 - 19.30</span>
                </div>
              </div>

              {/* Location Section */}
              <div className="mt-2 md:mt-[0.5vw] flex items-center space-x-2 md:space-x-[0.5vw]">
                <Image
                  src="/img/bootcamp/location.png"
                  alt="Location icon"
                  width={20}
                  height={20}
                  className="w-5 md:w-[1.2vw] h-5 md:h-[1.2vw]"
                />
                <span className="font-avenirBlack text-sm md:text-[1vw]">
                  BRI Work FISPOL Universitas Gadjah Mada
                </span>
              </div>
            </div>

            {/* Divider (Vertical for Desktop and Horizontal for Mobile) */}
            <div className="hidden md:flex items-center mx-[1.5vw]">
              <Image
                src="/img/bootcamp/garis.png"
                alt="Divider"
                width={2}
                height={80}
                className="w-[0.15vw] h-[5vw]"
              />
            </div>
            <div className="md:hidden flex items-center w-full mx-[1.5vw] mt-2">
              <Image
                src="/img/bootcamp/horizontal.png"
                alt="Horizontal Divider"
                width={100}
                height={2}
                className="h-[0.15vw] w-[4vw]"
              />
            </div>

            {/* Registration Information */}
            <div className="w-full md:w-1/3 text-left font-avenirBlack mt-3 md:mt-[1vw] text-sm md:text-[0.9vw]">
              Register now for FREE* or miss the seats
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
