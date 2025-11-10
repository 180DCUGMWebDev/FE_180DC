import HeroFbanks from "@/components/modules/store/frameworkbank/HeroFBanks";
import PreviewFbanks from "@/components/modules/store/frameworkbank/PreviewFbanks";
import SecureYoursFbank from "@/components/modules/store/frameworkbank/SecureYoursFbank";

export const metadata = {
  title: "Framework Bank | 180 Degrees Consulting UGM",
};

export default function frameworkbank() {
  return (
    <main>
      <HeroFbanks />
      <PreviewFbanks />
      <SecureYoursFbank theme="dark" />
    </main>
  );
}
