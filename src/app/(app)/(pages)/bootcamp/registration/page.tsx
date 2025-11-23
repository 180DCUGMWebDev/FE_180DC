import RegistrationForm from "@/components/modules/bootcamp/registration/RegistrationForm";
import Closed from "@/components/modules/closed/Closed";

export const metadata = {
  title: "Bootcamp | 180 Degrees Consulting UGM",
};

export default function BootcampRegistrationPage() {
  return (
    // <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black to-green-300/90 p-4">
    //   <div className="w-full max-w-4xl py-20">
    //     <div className="rounded-lg border-0 bg-white p-6 shadow-2xl backdrop-blur-xs">
    //       <RegistrationForm />

    //     </div>
    //   </div>
    // </section>
    <Closed />
  );
}
