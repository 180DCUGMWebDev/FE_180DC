// Import Components
import DesignSystem from "@/components/misc/DesignSystem";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center py-[100px] p-[30px]">
      {createBackground("dark")}
      
      <DesignSystem />
    </main>
  );
}
