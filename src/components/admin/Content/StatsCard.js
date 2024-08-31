export default function StatsCard({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg border border-gray-200 max-w-sm w-full h-[156px] lg:w-[320px] lg:h-[200px]">
      <div className="text-3xl lg:text-[40px] font-bold text-black font-latoBold">
        {value}
      </div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
}
