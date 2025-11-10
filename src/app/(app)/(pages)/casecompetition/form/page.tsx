import { FormCaseComp } from "@/components/modules/casecomp/FormCaseCompetition";
import ComingSoon from "@/components/modules/casecomp/ComingSoon";

export const metadata = {
  title: "APAC | 180 Degrees Consulting UGM",
};

export default function CaseComp() {
  return (
    <main className="bg-[#E8E8E8]">
      <FormCaseComp />
      {/* <ComingSoon /> */}
    </main>
  );
}
