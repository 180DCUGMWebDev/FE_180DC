import { FormCaseComp } from "@/components/modules/casecomp/FormCaseCompetition";
import ComingSoon from "@/components/modules/videocasecompetition/ComingSoon";
import { HeroCaseComps } from "@/components/modules/videocasecompetition/HeroCaseComp";
import { TimelineCaseComp } from "@/components/modules/videocasecompetition/TimelineCaseComp";

export const metadata = {
  title: "APAC | 180 Degrees Consulting UGM",
};

export default function VideoCaseComp() {
  return (
    <main className="bg-[#E8E8E8]">
      <HeroCaseComps />
      <TimelineCaseComp />
    </main>
  );
}
