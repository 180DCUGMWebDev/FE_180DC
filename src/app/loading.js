export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mb-8 inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
        <h2 className="font-avenirBlack text-2xl text-white">Loading...</h2>
        <p className="mt-2 font-latoRegular text-white180">Please wait a moment</p>
      </div>
    </div>
  );
}
