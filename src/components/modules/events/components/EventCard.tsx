import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Button180 from "@/components/elements/Button180";

interface EventCardProps {
  title: string;
  description: string;
  image?: string;
  available: boolean;
  href?: string;
  className?: string; // Bermanfaat untuk layout grid col-span
}

const EventCard = ({
  title,
  description,
  image,
  available,
  href = "#",
  className,
}: EventCardProps) => {
  const CardContent = (
    <div
      className={cn(
        "group relative flex h-full w-full flex-col transition-transform duration-300 select-none",
        className,
        available ? "rounded-[24px] bg-gradient-to-br from-[#8ADF60] to-[#3CE0F9] p-[2px]" : ""
      )}
    >
      <div
        className={cn(
          "relative z-0 flex h-full w-full flex-col overflow-hidden p-6 sm:p-8",
          available ? "rounded-[22px]" : "rounded-[24px]"
        )}
      >
        {/* Solid default dark background */}
        <div className="absolute inset-0 z-[-3] bg-[#383838]" />

        {/* Dynamic Background Image */}
        {image && (
          <>
            <div
              className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${image}')` }}
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-[#2a2a2a] via-[#383838]/80 to-transparent" />
          </>
        )}

        {/* Badge Status (At the top) */}
        <div className="font-avenir-heavy relative z-10">
          {available ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1C5158] px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-[#3CE0F9] shadow-[0_0_8px_#3CE0F9]"></div>
              <span className="text-xs text-white">On Registration</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full bg-[#525252] px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-[#D1D1D1]"></div>
              <span className="text-xs text-white">Closed</span>
            </div>
          )}
        </div>

        {/* Main Content (Pushed to the bottom) */}
        <div className="relative z-10 mt-auto flex flex-col gap-4 pt-8">
          {/* Text Content */}
          <div className="flex flex-col gap-1">
            <span className="font-avenir-heavy text-[10px] tracking-widest text-[#8ADF60] uppercase sm:text-xs">
              PROGRAM
            </span>
            <h3 className="font-avenir-black text-2xl text-white sm:text-3xl">{title}</h3>
            <p className="font-mulish mt-1 line-clamp-2 text-xs text-gray-300 sm:text-sm">
              {description}
            </p>
          </div>

          {/* Bottom Button Area */}
          <div className={cn(!available && "pointer-events-none opacity-80")}>
            <Button180
              color="green"
              size="sm"
              text="Explore"
              icon={<ArrowRight size={14} className="fill-white" />}
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (!available) {
    return <div className={cn("h-full w-full opacity-80", className)}>{CardContent}</div>;
  }

  return (
    <Link href={href} className={cn("block h-full w-full", className)}>
      {CardContent}
    </Link>
  );
};

export default EventCard;
