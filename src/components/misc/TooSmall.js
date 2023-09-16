// Import Components
import ImgF from "../global/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function TooSmall() {
  return (
    <main className="min-[250px]:hidden flex">
      <div className="relative flex w-full h-[100vmax] items-center justify-center p-[15vw]">
        {/* Background */}
        {createBackground("dark")}

        {/* Logo */}
        <div className="absolute -z-[998] w-full h-screen flex items-center justify-center">
          <div className="w-[75vw]">
            <ImgF
              src="/img/global/logo180dctrns.png"
              alt="logo 180dc"
              className="grayscale opacity-40"
            />
          </div>
        </div>

        {/* Text */}
        <p className="font-latoRegular text-lightWhite text-[8vw] text-center">
          {
            "Your current screen is too small to read the content of the page. Please use a better device with bigger resolution / try to increase your current resolution!"
          }
        </p>
      </div>
    </main>
  );
}
