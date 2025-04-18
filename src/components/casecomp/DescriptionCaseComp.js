import Image from "next/image";
import { useState, useEffect } from "react";

export function DescriptionCaseComp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Set initial value
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Clean up
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full">
        <Image
          src="/img/casecomp/bg-desc-apac.png"
          alt="APAC Case Competition Background"
          width={1920}
          height={1080}
          className="min-h-screen w-full object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
        <div className=" font-serif text-2xl text-green-700 md:text-4xl">
          <Image
            src="/img/casecomp/HeaderDescAPAC.png"
            alt=""
            width={2000}
            height={2000}
            className="w-[75vw] object-cover"
          />
        </div>
        <div className="mx-auto max-w-4xl rounded-xl bg-green-50 bg-opacity-90 p-6 text-center md:p-10">
          <div className="mb-8 text-xl font-medium text-green-800 md:text-3xl">
            <div className="mb-[2vw] mt-[3vw] font-latoBold text-[3.33vw] text-[#73B743]"></div>
          </div>

          <div className="space-y-6 text-left text-gray-800">
            <p className="text-sm md:text-base">
              Here, at the 2025 <span className="font-bold">180DC APAC Case Competition</span>,
              through a dynamic APAC business case competition centered on this transformative
              theme, we strive to achieve the integration of renewable energy into supply chains.
              Our three core value drivers are{" "}
              <span className="font-bold">sustainability, innovation</span>, and{" "}
              <span className="font-bold">empowerment</span>, so we can achieve a vision where
              renewable energy catalyzes sustainable growth and community development.
            </p>

            <p className="rounded-lg bg-green-200 bg-opacity-40 p-3 text-sm md:text-base">
              Together,{" "}
              <span className="font-semibold text-green-700">
                we aspire to create lasting value for all stakeholders and achieve meaningful
                progress in corporate social responsibility.
              </span>{" "}
              We hope to provide optimal benefits to stakeholders in this way.
            </p>

            <p className="text-sm md:text-base">
              In today's interconnected world, sustainability has become the cornerstone of
              development across industries and communities. To create a future where environmental
              well-being and economic growth go hand in hand, it is essential to empower renewable
              energy as the driving force behind transforming supply chains. To do this, we must
              give the chance for every person that wants to develop: the creative, innovative, and
              brave enough to do distinctive movements. These actions that have already been written
              above also need sustainability initiatives to make it come true.
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <button className="rounded-full bg-green-700 px-6 py-2 font-medium text-white transition duration-300 hover:bg-green-800 md:px-8 md:py-3">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
