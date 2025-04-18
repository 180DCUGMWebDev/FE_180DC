"use client";

import { FormCaseComp } from "@/components/casecomp/FormCaseCompetition";
import ComingSoon from "@/components/casecomp/ComingSoon";
import { HeroCaseComps } from "@/components/casecomp/HeroCaseComp";
import {TimelineCaseComp} from "@/components/casecomp/TimelineCaseComp";
import { DescriptionCaseComp } from "@/components/casecomp/DescriptionCaseComp";

export default function CaseComp() {
  return (
    <main className="bg-[#E8E8E8]">
      <HeroCaseComps />
      <DescriptionCaseComp />
      <TimelineCaseComp />
    </main>
  );
}
