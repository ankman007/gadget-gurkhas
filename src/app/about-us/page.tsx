"use client";
import Navigation from "@/app/components/Navigation";
import Header from "@/app/components/LogoBanner";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function MyComponent() {
  return (
    <>
      <Navigation />
      <Header />
      <div className="container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 capitalize text-center">
          About Us
        </h2>
        <p className="text-lg capitalize">
          For more than 25 years, Gadget Gurkhas has built a reputation as the
          premier source for trustworthy, no-nonsense reviews on everything tech
          – from phones to TVs to laptops to tablets to streaming services. If
          you can snap a picture with it, watch it, type on it, or subscribe to
          it, chances are we have reviewed it.
        </p>
        {/* Add button */}
        <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg  transition duration-300 ease-in-out transform hover:scale-105">
          Learn More About Us
        </button>
        {/* Extra content section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-lg">
            Meet our dedicated team of tech enthusiasts who strive to bring you
            the latest and most accurate reviews and insights.
          </p>
          {/* Images */}
          <div className="flex justify-center mt-4">
            <div className="relative h-20 w-20 mr-4">
              <Image
                src="/images/dummy-image.png"
                alt="Team Member 1"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="relative h-20 w-20 mr-4">
              <Image
                src="/images/dummy-image.png"
                alt="Team Member 2"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="relative h-20 w-20 mr-4">
              <Image
                src="/images/dummy-image.png"
                alt="Team Member 3"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="relative h-20 w-20 mr-4">
              <Image
                src="/images/dummy-image.png"
                alt="Team Member 3"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="relative h-20 w-20">
              <Image
                src="/images/dummy-image.png"
                alt="Team Member 3"
                layout="fill"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
