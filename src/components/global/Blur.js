import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function Blur({ className, children }) {
  const { isLogin } = useContext(AuthContext);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLogin && (
        <div className="absolute left-[-7.5%] top-[-7.5%] z-[100] h-[115%] w-[115%] bg-[url('/img/academy/GRAD_180Mobile.png')] bg-cover opacity-[0.99] blur-xl md:left-[-2.5%] md:top-[-2.5%] md:h-[105%] md:w-[105%] md:opacity-[0.99] md:blur-xl" />
      )}
      {children}
    </div>
  );
}
