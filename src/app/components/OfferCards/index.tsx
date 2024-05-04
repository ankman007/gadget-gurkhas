import OfferCard from "../OfferCard";

export default function OfferCards() {
  return (
    <div className="md:flex justify-center gap-10 md:h-80 m-10">
      <div className="md:hidden hidden">
        {/* This content will be hidden on small screens */}
        <div className="flex space-x-4">
          <OfferCard offerValue={"Top Deals This Week"} />
          <OfferCard offerValue={"Top Head To Head Product Comparisons"} />
          <OfferCard offerValue={"Full Length Product Reviews"} />
        </div>
      </div>
      <div className="hidden md:flex">
        {/* This content will be shown only on medium and large screens */}
        <div className="flex space-x-10">
          <OfferCard offerValue={"Top Deals This Week"} />
          <OfferCard offerValue={"Top Head To Head Product Comparisons"} />
          <OfferCard offerValue={"Full Length Product Reviews"} />
        </div>
      </div>
    </div>
  );
}
