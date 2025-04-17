"use client";

import { FormCaseComp } from "@/components/casecomp/FormCaseCompetition";
import ComingSoon from "@/components/casecomp/ComingSoon";
import { HeroCaseComps } from "@/components/casecomp/HeroCaseComp";

export default function CaseComp() {
  return (
    <main className="bg-[#E8E8E8]">
        <HeroCaseComps />
      <ComingSoon />
    </main>
  );
}
