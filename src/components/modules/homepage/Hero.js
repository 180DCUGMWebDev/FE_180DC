import Image from "next/image";
import Button180 from "@/components/element/Button";
import Link from "next/link";

export function Hero({ contactRef }) {
  const podcastLink = "https://open.spotify.com/episode/3LRLqk6d9B7XkSA5zekYC8?si=c122ebff6e664062";
  return (
    <section className="flex flex-col">
      {/* Hero */}
      <div className="relative z-10 flex h-fit w-full items-center px-[5%] max-lg:pb-[25vh] max-lg:pt-[15vh] sm:px-[10%] lg:h-screen lg:min-h-[50vw] lg:bg-black lg:px-[4%]">
        {/* Hero Background */}
        <Image
          src="/img/homepage/balairung.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-full w-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/homepage/balairung_mobile.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-full w-full lg:hidden"
        />
        {/* Hero Content */}
        <div className="relative z-20 flex h-fit w-full text-white max-lg:pb-[20px] lg:h-1/2 lg:justify-between">
          {/* Kolom Kiri */}
          <div className="flex w-full flex-col justify-between max-lg:items-center max-lg:gap-[15px] lg:w-[54%]">
            {/* Teks */}
            <div className="flex flex-col gap-2 max-lg:items-center">
              <div className="font-avenir-black text-3xl max-lg:text-center max-lg:text-primary sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[80px]">
                Providing Perfect Solutions For Your Own Business.
              </div>
              <div className="w-[90%] font-lato-regular text-xs max-lg:text-center sm:text-base lg:w-[72%] lg:text-xl xl:text-2xl 2xl:text-[26px]">
                UGM branch of the world&apos;s largest student-led consultancy for non-profits &
                social enterprises.
              </div>
            </div>
            {/* Tombol */}
            <div className="flex gap-8 max-lg:w-full max-lg:justify-center">
              <Link href="/apply" className="w-[50%] max-lg:max-w-[200px] lg:w-[30%]">
                <Button180
                  color="green"
                  text="Consult Now!"
                  addClass="w-full h-fit py-2 lg:py-3 text-sm sm:text-base lg:text-lg transition-all duration-500 hover:scale-110 hover:bg-gray-800 hover:text-white"
                />
              </Link>
              <Button180
                color="green"
                text="Contact Us"
                addClass="w-[30%] h-fit py-3 text-lg max-lg:hidden transition-all duration-500 hover:scale-110 hover:bg-gray-800 hover:text-white"
                action={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
              />
            </div>
          </div>
          {/* Kolom Kanan */}
          <div className="flex w-[45%] flex-col justify-between max-lg:hidden">
            {/* Bagian atas */}
            <div className="flex h-[60%] justify-between">
              <div className="relative w-[62%] overflow-hidden rounded-r-[7%] rounded-bl-[7%] rounded-tl-[60%]">
                <Image
                  src="/img/homepage/hero1.png"
                  alt="Gambar Homepage Kanan"
                  width={2000}
                  height={2000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex w-[34%] flex-col justify-center rounded-[24px] bg-black px-[20px] pt-[30px] font-avenir-black">
                <div className="text-[40px] leading-[25px] xl:text-[60px] xl:leading-[45px] 2xl:text-[70px] 2xl:leading-[50px]">
                  8<span className="text-primary">+</span>
                </div>
                <div className="lg:text-[12px] xl:text-[15px] 2xl:text-[20px]">
                  Notable <span className="text-primary">Mentors</span>
                </div>
                <div className="overflow-hidden font-lato-regular lg:text-[9px] xl:text-[10px] 2xl:text-[12px]">
                  Delivering high quality consultancy to clients, supported by professional mentors
                  from notable entities.
                </div>
              </div>
            </div>
            {/* Bagian bawah */}
            <div className="flex h-fit flex-col items-center justify-center">
              <iframe
                title="Spotify Web Player"
                src={`https://open.spotify.com/embed${new URL(podcastLink).pathname}`}
                className="h-[152px] w-full rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* What is 180DC UGM */}
      <div className="relative z-20 h-fit px-[5%] max-lg:pb-[5vh] lg:h-screen lg:min-h-[54vw] lg:px-[4%]">
        <div className="flex h-fit flex-col items-center justify-center bg-white max-lg:-mt-[10vh] max-lg:rounded-[12px] max-lg:px-[5%] max-lg:py-[20px] max-lg:drop-shadow-[-2px_3px_5px_#1A1A1A40] lg:h-full">
          {/* Judul (Mobile) */}
          <div className="mb-2 text-center font-avenir-black text-2xl text-primary sm:text-3xl lg:hidden">
            What is <br />
            180DC UGM?
          </div>
          {/* Gambar */}
          <div className="relative z-10 max-h-[60%] w-full overflow-hidden rounded-t-[10px] lg:rounded-t-[20px]">
            <Image
              src="/img/homepage/balairung_green.png"
              alt="Balairung"
              width={1000}
              height={1000}
              className="z-10 w-full"
            />
          </div>
          {/* Teks */}
          <div className="z-20 flex flex-col gap-[23px] px-[2.3%] max-lg:-mt-[10px] max-lg:items-center">
            <div className="flex flex-col">
              <div className="font-avenir-black max-lg:hidden lg:text-6xl xl:text-7xl">
                What is 180DC UGM?
              </div>
              <div className="font-lato-regular text-xs max-lg:text-center sm:text-base lg:text-2xl xl:text-3xl">
                180 Degrees Consulting Universitas Gadjah Mada is the first Indonesian branch of the
                world&apos;s largest consultancy for non-profit and social enterprises. Being at the
                very forefront of desirable change, 180 Degrees Consulting UGM has helped various
                entities in overcoming the challenges they face at extremely affordable costs.{" "}
              </div>
            </div>
            <Link href="/aboutus" className="w-[15%] max-lg:hidden">
              <Button180
                color="black"
                text="Read More"
                addClass="w-full h-fit py-3 text-lg transition-all duration-500 hover:scale-110 hover:bg-gray-800 hover:text-white"
              />
            </Link>
            <Link href="/aboutus" className="w-[40%] lg:hidden">
              <Button180
                color="green"
                text="Read More"
                addClass="w-full h-fit py-2 text-sm sm:text-base transition-all duration-500 hover:scale-110 hover:bg-gray-800 hover:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
