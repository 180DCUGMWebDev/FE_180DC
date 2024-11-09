import Image from "next/image";

export function Speaker() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#E8E8E8] p-6">
      {/* Header */}
      <div className="mt-12 text-center">
        {/* Ribbon Title */}
        <div className="relative inline-block">
          <Image
            src="/img/bootcamp/circles.png" // Path for the ribbon image
            alt=""
            width={130}
            height={130}
            className="absolute -left-[26vw] -top-[3vw]"
          />
          <Image
            src="/img/bootcamp/rectangle.png" // Path for the ribbon image
            alt="Acquire, Apply, Achieve: Building the Consultants of Tomorrow"
            width={700}
            height={90}
            className="h-auto w-full"
          />
          <span className="font-avenirBlack absolute inset-0 flex justify-center items-center text-3xl font-bold text-[#73B743] text-center">
            Acquire, Apply, Achieve: Building
            <br />
            the Consultants of Tomorrow
          </span>
        </div>
      </div>

      {/* Stacked Content */}
      <div className="relative mt-8 flex flex-col items-center">
        {/* Silhouette Image */}
        <div className="relative z-10">
          <Image
            src="/img/bootcamp/siluet.png" // Path for silhouette image
            alt="Vector image of three silhouettes with question marks"
            width={400}
            height={200}
            className="h-auto w-full"
          />
        </div>

        {/* TBA Text Boxes over Silhouettes */}
        <div className="absolute bottom-4 flex justify-around w-full z-30">
          <div className="rounded-lg bg-[#F4F4F4] p-2 shadow-md w-20 text-center">
            <span className="text-gray-600">TBA</span>
          </div>
          <div className="rounded-lg bg-[#F4F4F4] p-2 shadow-md w-20 text-center">
            <span className="text-gray-600">TBA</span>
          </div>
          <div className="rounded-lg bg-[#F4F4F4] p-2 shadow-md w-20 text-center">
            <span className="text-gray-600">TBA</span>
          </div>
        </div>

        {/* Event Details */}
        <div className="absolute top-20 w-full mt-[27%] max-w-2xl rounded-lg bg-white p-4 shadow-lg z-20">
          <div className="flex w-full flex-col md:flex-row">
            {/* Date, Time, and Location Section */}
            <div className="flex w-full md:w-2/3 flex-col space-y-4">
              <div className="flex items-center space-x-10 mt-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/bootcamp/calendar.png" // Path for calendar icon
                    alt="Calendar icon"
                    width={20}
                    height={20}
                  />
                  <span className="font-avenirBlack">XX November 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/bootcamp/clock.png" // Path for clock icon
                    alt="Clock icon"
                    width={20}
                    height={20}
                  />
                  <span className="font-avenirBlack">16.30 - 19.30</span>
                </div>
              </div>

              {/* Location Section */}
              <div className="mt-2 flex items-center space-x-2">
                <Image
                  src="/img/bootcamp/location.png" // Path for location icon
                  alt="Location icon"
                  width={20}
                  height={20}
                />
                <span className="font-avenirBlack">
                  BRI Work FISPOL Universitas Gadjah Mada
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center mx-4">
              <Image
                src="/img/bootcamp/garis.png" // Path for divider line
                alt="Divider"
                width={2}
                height={50}
              />
            </div>

            {/* Registration Information */}
            <div className="w-full md:w-1/3 text-left font-avenirBlack mt-4">
              Register now for FREE* or miss the seats
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
