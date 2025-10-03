import HeroFbanks from "@/components/modules/store/frameworkbank/HeroFBanks";
import PreviewFbanks from "@/components/modules/store/frameworkbank/PreviewFbanks";
import SecureYoursFbank from "@/components/modules/store/frameworkbank/SecureYoursFbank";

export default function frameworkbank() {
  return (
    <main>
      <HeroFbanks />
      <PreviewFbanks />
      <SecureYoursFbank theme = "dark" />
    </main>
  );
}
