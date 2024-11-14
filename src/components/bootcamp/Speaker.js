import Image from "next/image";

const ImageWithFallback = ({ src, alt, ...props }) => (
  <Image
    src={src}
    alt={alt || ""}
    {...props}
  />
);

const TBABox = () => (
  <div className="rounded-lg bg-[#F4F4F4] p-[0.513vw] lg:p-[0.365vw] shadow-md w-[15vw] lg:w-[6vw] text-center">
    <span className="text-gray-600 text-[2.9vw] lg:text-[0.9vw]">TBA</span>
  </div>
);

export function Speaker() {
  return (
    <div className="flex aspect-[1920/2280] w-full h-fit flex-col items-center bg-[#E8E8E8] p-[2.564vw] lg:p-[1.458vw]">
      
      {/* Desktop Version */}
      <div className="max-lg:hidden aspect-[1920/1080]  h-fit w-full mb-[5vw]">
        {/* Header */}
        <div className="mt-[6.154vw] lg:mt-[6vw] text-center">
          {/* Ribbon Title */}
          <div className="relative inline-block">
            <ImageWithFallback
              src="/img/bootcamp/circles.png"
              alt=""
              width={130}
              height={130}
              className="absolute -left-[15.385vw] -top-[5.128vw] lg:-left-[30vw] lg:-top-[3vw] lg:block hidden w-[15.385vw] lg:w-[8vw]"
            />
            <div className="relative">
              <ImageWithFallback
                src="/img/bootcamp/Rectangle.png"
                alt=""
                width={700}
                height={90}
                className="h-auto w-[90vw] lg:w-[40vw]"
              />
              <h1 className="font-avenirBlack absolute inset-0 flex justify-center items-center text-[3.077vw] lg:text-[2vw] font-bold text-[#73B743] text-center leading-relaxed lg:leading-[1.5]">
                Acquire, Apply, Achieve: Building
                <br />
                the Consultants of Tomorrow
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative mt-[6.154vw] lg:mt-[6vw] flex flex-col items-center w-full">
          {/* Silhouette Image */}
          <div className="relative z-10 scale-150">
            <ImageWithFallback
              src="/img/bootcamp/siluet.png"
              alt="Three silhouettes representing future consultants"
              width={500}
              height={250}
              className="h-auto w-[80vw] lg:w-[35vw]"
            />
          </div>

          {/* TBA Boxes */}
          <div className="absolute top-[35vw] lg:top-[15vw] flex justify-around w-[75vw] lg:w-[40vw] z-30  lg:flex gap-[2.133vw]">
            {[...Array(3)].map((_, i) => (
              <TBABox key={i} />
            ))}
          </div>

          {/* Event Details Card */}
          <div className="absolute text-center top-[24vw] lg:top-[9vw] w-[85vw] lg:w-[40vw] scale-110 scale-x-125 mt-[8vw] max-w-[90vw] lg:max-w-[50vw] rounded-lg bg-white p-[2.564vw] lg:p-[1.458vw] shadow-lg z-20">
            <div className="flex w-full flex-col lg:flex-row">
              {/* Date, Time, Location Section */}
              <div className="flex w-full lg:w-2/3 flex-col space-y-[3.077vw] lg:space-y-[1.5vw]">
                <div className="flex items-center space-x-[3.846vw] lg:space-x-[3vw] mt-[1.282vw] lg:mt-[0.5vw]">
                  <div className="flex items-center space-x-[1.282vw] lg:space-x-[0.5vw]">
                    <ImageWithFallback
                      src="/img/bootcamp/calendar.png"
                      alt="Calendar icon"
                      width={20}
                      height={20}
                      className="w-[3.205vw] lg:w-[1.2vw] h-[3.205vw] lg:h-[1.2vw]"
                    />
                    <span className="font-avenirBlack text-[2.9vw] lg:text-[1vw]">XX November 2024</span>
                  </div>
                  <div className="flex items-center space-x-[1.282vw] lg:space-x-[0.5vw]">
                    <ImageWithFallback
                      src="/img/bootcamp/clock.png"
                      alt="Clock icon"
                      width={20}
                      height={20}
                      className="w-[3.205vw] lg:w-[1.2vw] h-[3.205vw] lg:h-[1.2vw]"
                    />
                    <span className="font-avenirBlack text-[2.9vw] lg:text-[1vw]">16.30 - 19.30</span>
                  </div>
                </div>

                <div className="flex items-center space-x-[1.282vw] lg:space-x-[0.5vw]">
                  <ImageWithFallback
                    src="/img/bootcamp/location.png"
                    alt="Location icon"
                    width={20}
                    height={20}
                    className="w-[3.205vw] lg:w-[1.2vw] h-[3.205vw] lg:h-[1.2vw]"
                  />
                  <span className="font-avenirBlack text-[2.9vw] lg:text-[1vw]">
                    BRI Work FISPOL Universitas Gadjah Mada
                  </span>
                </div>
              </div>

              {/* Dividers */}
              <div className="hidden lg:flex items-center mx-[3.846vw] lg:mx-[1.5vw]">
                <ImageWithFallback
                  src="/img/bootcamp/garis.png"
                  alt=""
                  width={2}
                  height={80}
                  className="w-[0.385vw] lg:w-[0.15vw] h-[12.821vw] lg:h-[5vw]"
                />
              </div>
              <div className="lg:hidden flex items-center justify-center w-full my-[1.282vw]">
                <ImageWithFallback
                  src="/img/bootcamp/horizontal.png"
                  alt=""
                  width={100}
                  height={2}
                  className="h-[0.385vw] lg:h-[0.15vw] w-full max-w-[10.256vw]"
                />
              </div>

              {/* Registration Info */}
              <div className="w-full lg:w-1/3 text-left font-avenirBlack mt-[1.923vw] lg:mt-[1vw] text-[2.9vw] lg:text-[0.9vw]">
                Register now for FREE* or miss the seats
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden text-center">
        
        {/* Title */}
        <div className="relative flex items-center justify-center mb-[3vw]">
          <div className="relative flex items-center justify-center w-[90vw]">
            <ImageWithFallback
              src="/img/bootcamp/Rectangle.png"
              alt=""
              width={700}
              height={90}
              className="absolute h-auto w-full top-0 left-0"
            />
            <h1 className="font-avenirBlack z-10 text-[4vw] font-bold text-[#73B743] leading-tight text-center px-[5vw] py-[3vw]">
              Acquire, Apply, Achieve: Building the Consultants of Tomorrow
            </h1>
          </div>
        </div>

        {/* Silhouette Image */}
        <div className="relative flex justify-center mb-[0vw]"> 
          <ImageWithFallback
            src="/img/bootcamp/Siluet.png"
            alt="Three silhouettes representing future consultants"
            width={300}
            height={150}
            className="w-[80vw]"
          />
        </div>

        {/* Event Details Card */}
        <div className="bg-white rounded-lg shadow-lg p-[5vw] w-[90vw] max-w-[500px] mx-auto">
          {/* Date and Time on One Line */}
          <div className="flex justify-between items-center mb-[3vw]">
            <div className="flex items-center space-x-[2vw]">
              <ImageWithFallback
                src="/img/bootcamp/calendar.png"
                alt="Calendar icon"
                width={20}
                height={20}
                className="w-[5vw] h-[5vw]"
              />
              <span className="text-[4vw] font-bold">XX November 2024</span>
            </div>
            <div className="flex items-center space-x-[2vw]">
              <ImageWithFallback
                src="/img/bootcamp/clock.png"
                alt="Clock icon"
                width={20}
                height={20}
                className="w-[5vw] h-[5vw]"
              />
              <span className="text-[4vw] font-bold">16.30 - 19.30</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-start space-x-[2vw] mb-[3vw]">
            <ImageWithFallback
              src="/img/bootcamp/location.png"
              alt="Location icon"
              width={20}
              height={20}
              className="w-[5vw] h-[5vw]"
            />
            <span className="text-[4vw] font-bold text-left">
              BRI Work FISPOL Universitas Gadjah Mada
            </span>
          </div>

          {/* Registration Info */}
          <div className="border-t border-gray-300 mt-[3vw] pt-[3vw]">
            <p className="text-[4vw] font-bold font-avenirBlack">
              Register now for FREE* or miss the seats
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
