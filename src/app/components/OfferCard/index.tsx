interface OfferCardProps {
  offerValue: string;
}

export default function OfferCard({ offerValue }: OfferCardProps) {
  return (
    <div className=" relative flex flex-col items-center justify-center w-64 bg-blue-900 rounded-md px-5">
      <h1 className=" text-white p-5 text-xl text-center font-semibold">
        {offerValue}
      </h1>
      <button className=" absolute bottom-6 text-white font-semibold bg-gray-500 p-2 rounded-2xl">
        Explore More
      </button>
      <div className=" absolute right-0 top-0 border-l-2 border-b-2 rounded-bl-sm border-white">
        <div
          className="w-0 h-0
            border-l-[0px] border-l-white
            border-b-[38px] border-b-blue-900
            border-r-[35px] border-r-white"
        ></div>
      </div>
    </div>
  );
}
