// Import Components
import ImgF from "@/components/element/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function TooSmall() {
  return (
    <main className="flex min-[250px]:hidden">
      <div className="relative flex h-[100vmax] w-full items-center justify-center p-[15vw]">
        {/* Background */}
        {createBackground("dark")}

        {/* Logo */}
        <div className="absolute -z-998 flex h-screen w-full items-center justify-center">
          <div className="w-[75vw]">
            <ImgF
              src="/img/global/logo180dctrns.png"
              alt="logo 180dc"
              className="opacity-40 grayscale"
            />
          </div>
        </div>

        {/* Text */}
        <p className="text-center font-lato-regular text-[8vw] text-light-white">
          {
            "Your current screen is too small to read the content of the page. Please use a better device with bigger resolution / try to increase your current resolution!"
          }
        </p>
      </div>
    </main>
  );
}
