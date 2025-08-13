import Image from "next/image";
import Link from "next/link";
import Button180 from "@/components/element/Button";

const batches = [
  {
    id: "25-26-consulting-batch-1",
    title: "Consulting Analyst",
    type: "Consulting Analyst",
    description: "Open recruitment for Consulting Analyst Batch 1 25/26",
    status: "Open",
    period: "13 August 2025",
    image: "/img/opreccycle/bgHeroOprec.png",
    href: "/oprec/25-26/consulting",
  },
  {
    id: "25-26-functional",
    title: "Functional Analyst",
    type: "Functional Analyst",
    description: "Open recruitment for Functional Analyst Batch 25/26",
    status: "Closed",
    period: "7 August 2025",
    image: "/img/homepage/hero1.png",
    href: "/oprec/25-26/functional",
  },
  {
    id: "24-25",
    title: "Consulting Analyst",
    cycle: "Cycle 2",
    type: "Consulting Analyst",
    description: "Open Recruitment for Consulting Analyst Cycle 2 Batch 24/25",
    status: "Closed",
    period: "January 2025 - February 2025",
    image: "/img/opreccycle/bgHeroOprec.png",
    href: "/oprec/24-25",
  },
];

export default function Linking() {
  // Get current batch (first in array) and previous batches
  const currentBatch = batches[0];
  const previousBatches = batches.slice(1);

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 px-[5%] py-20 sm:px-[10%] lg:px-[4%]">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-avenirBlack text-3xl text-white sm:text-4xl lg:text-5xl">
            Take your <span className="text-primary">Impact</span> now!
          </h2>
          <p className="mx-auto font-latoRegular text-lg text-white/70">
            Join the latest recruitment cycle and become part of our community of changemakers.
          </p>
        </div>

        {/* Current Batch - Main Card */}
        <div className="relative mb-16 flex flex-col justify-center gap-4 lg:flex-row lg:items-center">
          <div className="hover:bg-white/8 group relative h-fit w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300">
            {/* Card Background */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={currentBatch.image}
                alt={`${currentBatch.title} ${currentBatch.cycle}`}
                fill
                className="object-cover opacity-15 transition-opacity duration-300 group-hover:opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 flex h-fit flex-col px-8 py-4 lg:flex-row lg:items-center">
              {/* Content */}
              <div className="flex flex-1 flex-col">
                {/* Status Badge */}
                <div className="mb-5 flex flex-row flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border-[1px] border-primary bg-white px-4 py-1 text-sm font-medium text-black">
                      {currentBatch.status}
                    </span>
                    {currentBatch.cycle && (
                      <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
                        {currentBatch.cycle}
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center py-1 text-sm text-white/80">
                    {currentBatch.type}
                  </span>
                </div>
                {/* Title */}
                <h3 className="font-avenirBlack text-2xl leading-snug text-white lg:text-3xl">
                  {currentBatch.title}
                </h3>
                {/* Description */}
                <p className="mb-2 max-w-4xl font-latoRegular text-base leading-relaxed text-white/80 lg:text-lg">
                  {currentBatch.description}
                </p>
                {/* Period */}
                <p className="mb-6 text-white/80">{currentBatch.period}</p>
                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href={currentBatch.href} className="sm:flex-1">
                    <Button180
                      color="green"
                      text="Apply Now"
                      addClass="w-full text-sm py-2 lg:text-base font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Subtle Hover Effects */}
            <div className="absolute -bottom-1 -right-1 h-16 w-16 rounded-full bg-primary/10 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100"></div>
          </div>
        </div>

        {/* Previous Batches Timeline */}
        {previousBatches.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-8 text-center font-avenirBlack text-2xl text-white lg:text-3xl">
              Previous <span className="text-primary">Recruitment</span> Cycles
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent lg:left-1/2 lg:-translate-x-px"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {previousBatches.map((batch, index) => (
                  <div
                    key={batch.id}
                    className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-2 h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/50 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-30"></div>
                    </div>

                    {/* Timeline Card */}
                    <div
                      className={`ml-12 w-full lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
                    >
                      <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10">
                        {/* Card Background */}
                        <div className="absolute inset-0">
                          <Image
                            src={batch.image}
                            alt={`${batch.title} ${batch.cycle}`}
                            fill
                            className="h-full w-full object-cover opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        {/* Card Content */}
                        <div className="relative z-10 p-6">
                          {/* Header */}
                          <div className="mb-4 flex flex-wrap items-center justify-between">
                            <div className="flex gap-2">
                              <span className="rounded-full border-[1px] border-primary bg-transparent px-3 py-1 text-sm font-semibold text-white">
                                {batch.status}
                              </span>
                              <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
                                {batch.cycle}
                              </span>
                            </div>
                            <span className="inline-flex items-center py-1 text-sm text-white/80">
                              {batch.type}
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="font-avenirBlack text-xl leading-snug text-white">
                            {batch.title}
                          </h4>

                          {/* Description */}
                          <p className="mb-2 font-latoRegular text-sm leading-none text-white/80">
                            {batch.description}
                          </p>

                          {/* Stats */}
                          <div className="mb-4 flex gap-4 text-xs text-white/60">
                            <span>{batch.period}</span>
                          </div>

                          {/* CTA */}
                          <Link href={batch.href}>
                            <Button180
                              color="gray"
                              text="View Details"
                              addClass="w-full text-sm py-2 transition-all duration-300 hover:bg-gray-600 hover:text-white"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="rounded-3xl bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 text-center">
          <h3 className="mb-4 font-avenirBlack text-xl text-white lg:text-2xl">
            Ready to join <span className="text-primary">180DC UGM</span>?
          </h3>
          <p className="mb-6 font-latoRegular text-white/80">
            Learn more about our program structure, requirements, and what makes 180DC UGM special.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/aboutus">
              <Button180
                color="transparent"
                text="About Us"
                addClass="border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
                className="px-4 py-1"
              />
            </Link>
            <Link href="/aboutus#services">
              <Button180
                color="green"
                text="Services"
                addClass="hover:bg-gray-800 hover:text-white transition-all duration-300"
                className="px-4 py-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
