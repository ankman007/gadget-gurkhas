import Link from "next/link";
import Image from "next/image";

export default function OurExpertiseCard() {

    const blogDescription = "For more than 25 years, Gadget Gurkhas has built a reputation as the premier source for trustworthy, no-nonsense reviews on everything tech – from phones to TVs to laptops to tablets to streaming services. If you can snap a picture with it, watch it, type on it or subscribe to it, chances are we've reviewed it.";
    
    return (
        <div className="container mx-auto flex justify-center items-center m-4 rounded-2xl">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-10 bg-gray-100">
                    <Image src="/images/dummy-image.png" width={500} height={500} alt="dummy-image" className="rounded-t-lg lg:rounded-t-none lg:rounded-l-lg rounded-xl" />
                </div>
                <div className="w-full lg:w-1/2 bg-blue-900 p-4 lg:rounded-r-lg text-white flex flex-col justify-center items-center">
                <h4 className="text-xl font-bold mb-4">Our Expertise</h4>
                <p className="text-center">{blogDescription}</p>
            </div>

            </div>
        </div>
    );
}
