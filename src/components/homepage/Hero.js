import Image from "next/image";
import Button from "../global/Button";
import Link from "next/link";

export function Hero() {
  const podcastLink =
    "https://open.spotify.com/episode/1IogEVhcWmggBfkz3k7Ovg?si=50ac78066a434705";
  return (
    <section className="flex flex-col">
      {/* Hero */}
      <div className="lg:bg-black w-full h-fit lg:min-h-[50vw] lg:h-screen relative px-[5%] sm:px-[10%] lg:px-[4%] flex items-center max-lg:pt-[15vh] max-lg:pb-[25vh] z-10">
        {/* Hero Background */}
        <Image
          src="/img/homepage/balairung.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-10 inset-0 w-full h-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/homepage/balairung_mobile.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute z-10 inset-0 w-full h-full lg:hidden"
        />
        {/* Hero Content */}
        <div className="relative z-20 text-white h-fit lg:h-1/2 w-full flex lg:justify-between max-lg:pb-[20px]">
          {/* Kolom Kiri */}
          <div className="w-full lg:w-[54%] flex flex-col justify-between max-lg:items-center max-lg:gap-[15px]">
            {/* Teks */}
            <div className="flex flex-col gap-2 max-lg:items-center">
              <div className="font-avenirBlack text-3xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[80px] max-lg:text-center max-lg:text-primary">
                Providing Perfect Solutions For Your Own Business.
              </div>
              <div className="font-latoRegular text-xs sm:text-base lg:text-xl xl:text-2xl 2xl:text-[26px] w-[90%] lg:w-[72%] max-lg:text-center">
                UGM branch of the world&apos;s largest student-led consultancy
                for non-profits & social enterprises.
              </div>
            </div>
            {/* Tombol */}
            <div className="flex gap-8 max-lg:w-full max-lg:justify-center">
              <Link
                href="/apply"
                className="w-[50%] lg:w-[30%] max-lg:max-w-[200px]"
              >
                <Button
                  color="green"
                  text="Consult Now!"
                  addClass="w-full h-fit py-2 lg:py-3 text-sm sm:text-base lg:text-lg"
                />
              </Link>
              <Button
                color="green"
                text="Contact Us"
                addClass="w-[30%] h-fit py-3 text-lg max-lg:hidden"
              />
            </div>
          </div>
          {/* Kolom Kanan */}
          <div className="max-lg:hidden flex flex-col w-[45%] justify-between">
            {/* Bagian atas */}
            <div className="h-[60%] flex justify-between">
              <div className="relative w-[62%] rounded-r-[7%] rounded-bl-[7%] rounded-tl-[60%] overflow-hidden">
                <Image
                  src="/img/homepage/hero1.png"
                  alt="Gambar Homepage Kanan"
                  width={2000}
                  height={2000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black flex flex-col font-avenirBlack rounded-[24px] px-[20px] pt-[30px] w-[34%] justify-center">
                <div className="text-[40px] xl:text-[60px] 2xl:text-[70px] leading-[25px] xl:leading-[45px] 2xl:leading-[50px]">
                  8<span className="text-primary">+</span>
                </div>
                <div className="lg:text-[12px] xl:text-[15px] 2xl:text-[20px]">
                  Notable <span className="text-primary">Mentors</span>
                </div>
                <div className="font-latoRegular lg:text-[9px] xl:text-[10px] 2xl:text-[12px] overflow-hidden">
                  Delivering high quality consultancy to clients, supported by
                  professional mentors from notable entities.
                </div>
              </div>
            </div>
            {/* Bagian bawah */}
            <div className="h-fit flex flex-col justify-center items-center">
              <iframe
                title="Spotify Web Player"
                src={`https://open.spotify.com/embed${
                  new URL(podcastLink).pathname
                }`}
                className="rounded-[8px] w-full h-[152px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* What is 180DC UGM */}
      <div className="h-fit max-lg:pb-[5vh] lg:h-screen lg:min-h-[54vw] px-[5%] lg:px-[4%] z-20 relative">
        <div className="h-fit lg:h-full max-lg:py-[20px] flex flex-col justify-center items-center bg-white max-lg:rounded-[12px] max-lg:-mt-[10vh] max-lg:drop-shadow-[-2px_3px_5px_#1A1A1A40] max-lg:px-[5%]">
          {/* Judul (Mobile) */}
          <div className="font-avenirBlack text-2xl sm:text-3xl text-primary lg:hidden text-center mb-2">
            What is <br />
            180DC UGM?
          </div>
          {/* Gambar */}
          <div className="w-full max-h-[60%] overflow-hidden relative z-10 rounded-t-[10px] lg:rounded-t-[20px]">
            <Image
              src="/img/homepage/balairung_green.png"
              alt="Balairung"
              width={1000}
              height={1000}
              className="w-full z-10"
            />
          </div>
          {/* Teks */}
          <div className="flex flex-col px-[2.3%] gap-[23px] max-lg:-mt-[10px] z-20 max-lg:items-center">
            <div className="flex flex-col">
              <div className="font-avenirBlack lg:text-6xl xl:text-7xl max-lg:hidden">
                What is 180DC UGM?
              </div>
              <div className="font-latoRegular text-xs sm:text-base lg:text-2xl xl:text-3xl max-lg:text-center">
                180 Degrees Consulting Universitas Gadjah Mada is the first
                Indonesian branch of the world&apos;s largest consultancy for
                non-profit and social enterprises. Being at the very forefront
                of desirable change, 180 Degrees Consulting UGM has helped
                various entities in overcoming the challenges they face at
                extremely affordable costs.{" "}
              </div>
            </div>
            <Link href="/aboutus" className="w-[15%] max-lg:hidden">
              <Button
                color="black"
                text="Read More"
                addClass="w-full h-fit py-3 text-lg"
              />
            </Link>
            <Link href="/aboutus" className="w-[40%] lg:hidden">
              <Button
                color="green"
                text="Read More"
                addClass="w-full h-fit py-2 text-sm sm:text-base"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
