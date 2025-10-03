"use client";

import { FormCaseComp } from "@/components/modules/casecomp/FormCaseCompetition";
import ComingSoon from "@/components/modules/casecomp/ComingSoon";
import { HeroCaseComps } from "@/components/modules/casecomp/HeroCaseComp";
import { TimelineCaseComp } from "@/components/modules/casecomp/TimelineCaseComp";
import { DescriptionCaseComp } from "@/components/modules/casecomp/DescriptionCaseComp";

export default function CaseComp() {
  return (
    <main className="bg-[#E8E8E8]">
      <HeroCaseComps />
      <DescriptionCaseComp />
      <TimelineCaseComp />
    </main>
  );
}
