import HeroOprec from "@/components/modules/oprec/25-26/consulting/HeroOprec";
import Guidebook from "@/components/modules/oprec/25-26/consulting/Guidebook";
import CTA from "@/components/modules/oprec/25-26/consulting/CTA";
// import ComingSoon from "@/components/modules/comingsoon/ComingSoon";
// import Closed from "@/components/modules/closed/Closed";

export default function OpenRecruitment2526() {
  return (
    <>
      <HeroOprec />
      <Guidebook />
      <CTA registerPath="/oprec/25-26/consulting/cycle2/register" />
      {/* <Closed /> */}
      {/* <ComingSoon /> */}
    </>
  );
}
