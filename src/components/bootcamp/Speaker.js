import Image from "next/image";

const ImageWithFallback = ({ src, alt, ...props }) => (
  <Image src={src} alt={alt || ""} {...props} />
);

const TBABox = () => (
  <div className="w-[15vw] rounded-lg bg-[#F4F4F4] p-[0.513vw] text-center shadow-md lg:w-[6vw] lg:p-[0.365vw]">
    <span className="text-[2.9vw] text-gray-600 lg:text-[0.9vw]">TBA</span>
  </div>
);

export function Speaker() {
  return (
    <div className="aspect-[1920/2280] flex h-fit w-full flex-col items-center bg-[#E8E8E8] p-[2.564vw] lg:p-[1.458vw]">
      {/* Desktop Version */}
      <div className="aspect-[1920/1080] mb-[5vw] h-fit w-full max-lg:hidden">
        {/* Header */}
        <div className="mt-[6.154vw] text-center lg:mt-[6vw]">
          {/* Ribbon Title */}
          <div className="relative inline-block">
            <ImageWithFallback
              src="/img/bootcamp/circles.png"
              alt=""
              width={130}
              height={130}
              className="absolute -left-[15.385vw] -top-[5.128vw] hidden w-[15.385vw] lg:-left-[30vw] lg:-top-[3vw] lg:block lg:w-[8vw]"
            />
            <div className="relative">
              <ImageWithFallback
                src="/img/bootcamp/rectangleNew.png"
                alt=""
                width={700}
                height={90}
                className="h-auto w-[90vw] lg:w-[40vw]"
              />
              <h1 className="absolute inset-0 flex items-center justify-center text-center font-avenirBlack text-[3.077vw] font-bold leading-relaxed text-[#73B743] lg:text-[2vw] lg:leading-[1.5]">
                Acquire, Apply, Achieve: Building
                <br />
                the Consultants of Tomorrow
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative mt-[6.154vw] flex w-full flex-col items-center lg:mt-[6vw]">
          {/* Silhouette Image */}
          <div className="relative z-10 scale-150">
            <ImageWithFallback
              src="/img/bootcamp/vectorSiloutte.png"
              alt="Three silhouettes representing future consultants"
              width={500}
              height={250}
              className="h-auto w-[80vw] lg:w-[35vw]"
            />
          </div>

          {/* TBA Boxes */}
          <div className="absolute top-[35vw] z-30 flex w-[75vw] justify-around gap-[2.133vw] lg:top-[15vw] lg:flex lg:w-[40vw]">
            {[...Array(3)].map((_, i) => (
              <TBABox key={i} />
            ))}
          </div>

          {/* Event Details Card */}
          {/* <div className="absolute top-[24vw] z-20 mt-[8vw] w-[85vw] max-w-[90vw] scale-110 scale-x-125 rounded-lg bg-white p-[2.564vw] text-center shadow-lg lg:top-[9vw] lg:w-[40vw] lg:max-w-[50vw] lg:p-[1.458vw]">
            <div className="flex w-full flex-col lg:flex-row">
              Date, Time, Location Section
              <div className="flex w-full flex-col space-y-[3.077vw] lg:w-2/3 lg:space-y-[1.5vw]">
                <div className="mt-[1.282vw] flex items-center space-x-[3.846vw] lg:mt-[0.5vw] lg:space-x-[3vw]">
                  <div className="flex items-center space-x-[1.282vw] lg:space-x-[0.5vw]">
                    <ImageWithFallback
                      src="/img/bootcamp/calendar.png"
                      alt="Calendar icon"
                      width={20}
                      height={20}
                      className="h-[3.205vw] w-[3.205vw] lg:h-[1.2vw] lg:w-[1.2vw]"
                    />
                    <span className="font-avenirBlack text-[2.9vw] lg:text-[1vw]">
                      XX November 2024
                    </span>
                  </div>
                  <div className="flex items-center space-x-[1.282vw] lg:space-x-[0.5vw]">
                    <ImageWithFallback
                      src="/img/bootcamp/clock.png"
                      alt="Clock icon"
                      width={20}
                      height={20}
                      className="h-[3.205vw] w-[3.205vw] lg:h-[1.2vw] lg:w-[1.2vw]"
                    />
                    <span className="font-avenirBlack text-[2.9vw] lg:text-[1vw]">
                      16.30 - 19.30
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-[1.282vw] lg:space-x-[0.5vw]">
                  <ImageWithFallback
                    src="/img/bootcamp/location.png"
                    alt="Location icon"
                    width={20}
                    height={20}
                    className="h-[3.205vw] w-[3.205vw] lg:h-[1.2vw] lg:w-[1.2vw]"
                  />
                  <span className="font-avenirBlack text-[2.9vw] lg:text-[1vw]">
                    BRI Work FISPOL Universitas Gadjah Mada
                  </span>
                </div>
              </div>

              Dividers
              <div className="mx-[3.846vw] hidden items-center lg:mx-[1.5vw] lg:flex">
                <ImageWithFallback
                  src="/img/bootcamp/garis.png"
                  alt=""
                  width={2}
                  height={80}
                  className="h-[12.821vw] w-[0.385vw] lg:h-[5vw] lg:w-[0.15vw]"
                />
              </div>
              <div className="my-[1.282vw] flex w-full items-center justify-center lg:hidden">
                <ImageWithFallback
                  src="/img/bootcamp/horizontal.png"
                  alt=""
                  width={100}
                  height={2}
                  className="h-[0.385vw] w-full max-w-[10.256vw] lg:h-[0.15vw]"
                />
              </div>

              Registration Info
              <div className="mt-[1.923vw] w-full text-left font-avenirBlack text-[2.9vw] lg:mt-[1vw] lg:w-1/3 lg:text-[0.9vw]">
                Register now for FREE* or miss the seats
              </div>
              
            </div>
          </div> */}
        </div>

        
      </div>

      {/* Mobile Version */}
      <div className="text-center lg:hidden">
        {/* Title */}
        <div className="relative mb-[3vw] flex items-center justify-center">
          <div className="relative flex w-[90vw] items-center justify-center">
            <ImageWithFallback
              src="/img/bootcamp/rectangleNew.png"
              alt=""
              width={700}
              height={90}
              className="absolute left-0 top-0 h-auto w-full"
            />
            <h1 className="z-10 px-[5vw] py-[3vw] text-center font-avenirBlack text-[4vw] font-bold leading-tight text-[#73B743]">
              Acquire, Apply, Achieve: Building the Consultants of Tomorrow
            </h1>
          </div>
        </div>

        {/* Silhouette Image */}
        <div className="relative mb-[0vw] flex justify-center">
          <ImageWithFallback
            src="/img/bootcamp/vectorSiloutte.png"
            alt="Three silhouettes representing future consultants"
            width={300}
            height={150}
            className="w-[80vw]"
          />
          <div className="absolute top-[35vw] z-30 flex w-[75vw] justify-around gap-[2.133vw] lg:top-[15vw] lg:flex lg:w-[40vw]">
            {[...Array(3)].map((_, i) => (
              <TBABox key={i} />
            ))}
          </div>
        </div>

        

        {/* Event Details Card */}
        {/* <div className="mx-auto w-[90vw] max-w-[500px] rounded-lg bg-white p-[5vw] shadow-lg">
          Date and Time on One Line
          <div className="mb-[3vw] flex items-center justify-between">
            <div className="flex items-center space-x-[2vw]">
              <ImageWithFallback
                src="/img/bootcamp/calendar.png"
                alt="Calendar icon"
                width={20}
                height={20}
                className="h-[5vw] w-[5vw]"
              />
              <span className="text-[4vw] font-bold">XX November 2024</span>
            </div>
            <div className="flex items-center space-x-[2vw]">
              <ImageWithFallback
                src="/img/bootcamp/clock.png"
                alt="Clock icon"
                width={20}
                height={20}
                className="h-[5vw] w-[5vw]"
              />
              <span className="text-[4vw] font-bold">16.30 - 19.30</span>
            </div>
          </div>

          Location
          <div className="mb-[3vw] flex items-center justify-start space-x-[2vw]">
            <ImageWithFallback
              src="/img/bootcamp/location.png"
              alt="Location icon"
              width={20}
              height={20}
              className="h-[5vw] w-[5vw]"
            />
            <span className="text-left text-[4vw] font-bold">
              BRI Work FISPOL Universitas Gadjah Mada
            </span>
          </div>

          Registration Info
          <div className="mt-[3vw] border-t border-gray-300 pt-[3vw]">
            <p className="font-avenirBlack text-[4vw] font-bold">
              Register now for FREE* or miss the seats
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
