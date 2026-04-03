import React from "react";
import Button180 from "@/components/elements/Button180";

const CheckoutLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen w-full bg-[#444444]/10 bg-[url('/img/events/background.webp')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="relative z-10 flex min-h-[50vh] w-full flex-col gap-5">
        <Button180 text="Back to Store" href="/store" color="green"></Button180>
        {children}
      </div>
    </main>
  );
};

export default CheckoutLayout;
