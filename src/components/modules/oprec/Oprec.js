import Image from "next/image";

export default function Oprec() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/img/homepage/balairung.png"
          alt="background"
          width={2000}
          height={2000}
          className="h-full w-full object-cover opacity-60"
        />
      </div>

      {/* Decorative Elements */}
      <Image
        src="/img/bootcamp/ellipseBlue.png"
        alt="decoration"
        width={600}
        height={600}
        className="absolute right-[10%] top-[20%] z-20 h-[30vw] w-[30vw] opacity-30 lg:h-[20vw] lg:w-[20vw]"
      />
      <Image
        src="/img/bootcamp/ellipseGreen.png"
        alt="decoration"
        width={400}
        height={400}
        className="absolute bottom-[20%] left-[5%] z-20 h-[20vw] w-[20vw] opacity-20 lg:h-[15vw] lg:w-[15vw]"
      />

      {/* Hero Content */}
      <div className="relative z-30 flex min-h-screen flex-col justify-center px-[5%] py-20 text-white sm:px-[10%] lg:px-[4%]">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 font-avenirBlack text-4xl sm:text-5xl lg:text-7xl">
              Open <span className="text-primary">Recruitment</span>
            </h1>
            <p className="mx-auto max-w-3xl font-latoRegular text-lg text-white/80 sm:text-xl lg:text-2xl">
              Join 180DC UGM and become part of the world&apos;s largest student-led consultancy.
              Shape your future, impact organizations, and develop exceptional consulting skills.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
              <div className="font-avenirBlack text-2xl lg:text-3xl">
                100<span className="text-primary">+</span>
              </div>
              <div className="text-sm text-white/80">Alumni Network</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
              <div className="font-avenirBlack text-2xl lg:text-3xl">
                50<span className="text-primary">+</span>
              </div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
              <div className="font-avenirBlack text-2xl lg:text-3xl">
                20<span className="text-primary">+</span>
              </div>
              <div className="text-sm text-white/80">Partner Organizations</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
              <div className="font-avenirBlack text-2xl lg:text-3xl">
                Global<span className="text-primary">+</span>
              </div>
              <div className="text-sm text-white/80">Network Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
