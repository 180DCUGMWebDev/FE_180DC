"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import ContactUsButton180 from "@/components/elements/ContactUsButton180";
import ImageAction from "@/components/elements/ImageAction";
import { cn } from "@/lib/utils";

interface CTASection180Props {
  /** Main heading text. Supports ReactNode for line breaks. */
  title: string | React.ReactNode;
  /** Subtitle or description text. */
  subtitle?: string | React.ReactNode;
  /** Text for the primary action button. */
  primaryButtonText: string;
  /** Href for the primary action button (if using Link). */
  primaryButtonHref?: string;
  /** Action for the primary button (if using function). */
  primaryButtonAction?: () => void;
  /** Background styling. */
  background?: "dark" | "gradient" | "none";
  /** Decoration image type. */
  decoration?: "shard" | "check" | "none";
  /** Optional ID for section navigation. */
  id?: string;
  /** Additional classes for the section. */
  className?: string;
}

export default function CTASection180({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonAction,
  background = "dark",
  decoration = "shard",
  id,
  className,
}: CTASection180Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-t-[3px] border-green-300 px-[5%] py-16 sm:px-[10%] lg:px-[4%] lg:py-24",
        background === "dark" && "bg-[#1A1A1A]",
        background === "gradient" && "bg-linear-to-b from-gray-900 to-black",
        className
      )}
    >
      {/* Decoration */}
      {decoration === "shard" && (
        <div className="absolute top-0 right-0 w-[280px] opacity-10 max-lg:hidden">
          <ImageAction alt="" src="/img/store/merch/right-shard.png" />
        </div>
      )}

      <div className="mx-auto max-w-[1440px] text-center">
        <div className="mb-12 py-2">
          <h2 className="font-avenir-black mb-8 bg-linear-to-br from-green-300 from-35% to-cyan-300 to-65% bg-clip-text pb-[0.15em] text-center text-[36px] leading-tight text-transparent sm:text-[48px] lg:text-[64px]">
            {title}
          </h2>
          {subtitle && (
            <p className="font-lato-regular mx-auto max-w-2xl text-[16px] text-white/90 lg:text-[22px]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4">
          {decoration === "check" && (
            <Image
              src="/img/oprec/check.png"
              alt="Checkmark"
              width={100}
              height={100}
              className="absolute top-[-60%] right-[-14%] rotate-[-20deg] sm:top-[-30%]"
            />
          )}
          <div className="flex w-full flex-col gap-4 sm:w-fit sm:flex-row">
            <Button180
              color="green"
              text={primaryButtonText}
              href={primaryButtonHref}
              action={primaryButtonAction}
              size="md"
              addClass="w-full sm:w-[220px] font-avenir-heavy"
            />
            <ContactUsButton180 size="md" addClass="w-full sm:w-[220px] font-avenir-heavy" />
          </div>
        </div>
      </div>
    </section>
  );
}
