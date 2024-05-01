import Link from "next/link";
import Image from "next/image";

export default function PostCard() {
    return (
        <div className="rounded-md bg-white shadow-lg max-w-md mx-auto m-2">
            <div className="relative">
                <Image src="/images/dummy-image.png" width={500} height={500} alt="dummy-image" className="rounded-t-md" />
            </div>
            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-600">Ram Thapa in <span className="text-blue-500">Tech Reviews</span></p>
                    <p className="text-sm font-medium text-gray-600">July 21, 2022</p>
                </div>
                <hr className="my-2" />
                <Link href="#" className="block text-lg font-semibold text-gray-900 hover:text-blue-500">
                    Best Headphone Under Rs 2000 In 2024
                </Link>
            </div>
        </div>
    );
}
