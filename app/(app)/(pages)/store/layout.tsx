import React from "react";
import CTASection180 from "@/components/elements/CTASection180";
import { CartProvider } from "@/components/modules/store/context/CartContext";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartProvider>
        {children}
        <CTASection180
          title={
            <>
              We Look Forward to
              <br />
              Speaking with You
            </>
          }
          subtitle={
            <>
              Explore our different services offerings, and
              <br className="hidden sm:block" /> reach out to us for a discussion.
            </>
          }
          primaryButtonText="Consult Now!"
          primaryButtonHref="/apply"
        />
      </CartProvider>
    </>
  );
};

export default StoreLayout;
