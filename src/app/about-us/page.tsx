"use client";
import Navigation from "@/app/components/Navigation";
import Header from "@/app/components/LogoBanner";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function MyComponent() {
  return (
    <>
      <Navigation />
      <Header />
      <div className="container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 uppercase text-center">
          About Us
        </h2>
        <p className="text-lg">
          For more than 25 years, Gadget Gurkhas has built a reputation as the
          premier source for trustworthy, no-nonsense reviews on everything tech
          – from phones to TVs to laptops to tablets to streaming services. If
          you can snap a picture with it, watch it, type on it, or subscribe to
          it, chances are we have reviewed it.
        </p>
        <button className="bg-gray-500 hover:bg-blue-700 text-white rounded m-4 p-2">
          <Link href={'/'}>
            Learn More About Us
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
}
