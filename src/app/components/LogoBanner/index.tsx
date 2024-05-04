import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full bg-blue-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-32 lg:h-40 flex items-center justify-center">
                <Link href={'/'}>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold hover:text-gray-900">
                        Gadget Gurkhas
                    </h1>
                </Link>
            </div>
        </div>
    );
}
