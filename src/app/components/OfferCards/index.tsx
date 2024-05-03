import OfferCard from "../OfferCard";



export default function OfferCards() {
  return (
    <div className="flex justify-center gap-10 h-80 mb-4  ">
      <OfferCard offerValue={"Top Deals This Week"}/>
      <OfferCard offerValue={"Top Head To Head Product Comparisons"}/>
      <OfferCard offerValue={"Full Length Product Reviews"}/>

    </div>
  );
}
