import Button from "../global/Button";

export default function LookForward() {
  return (
    <section className="w-full h-fit">
      <div className="relative w-full h-full">
        {/* Background */}
        <div className="absolute -z-[998] bg-white w-full h-full" />
        <div className="flex flex-col justify-center items-center w-full h-full gap-[16px] p-[100px]">
          <h1 className="text-center font-avenirBlack text-[84px]/[96px] text-transparent bg-clip-text bg-gradient-to-br from-primary from-[35%] to-secondary to-[65%] leading-[1] py-[4px]">
            {"We Look Forward to"}
            <br />
            {"Speaking with You"}
          </h1>
          <h2 className="font-latoRegular text-center text-black text-[28px]/[36px] mt-[8px]">
            {"Explore our different services offerings, and"}
            <br />
            {"reach out to us for a discussion."}
          </h2>
          <Button
            color={"green"}
            text={"Consult Now!"}
            addClass={"w-[170px] text-[16px]"}
          />
        </div>
      </div>
    </section>
  );
}
