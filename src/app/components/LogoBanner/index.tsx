import Link from "next/link";

export default function Header() {
    return (
        <Link href={'/'}>
            <div className="w-full bg-blue-900">
                <div className="container mx-auto h-64 flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold hover:text-gray-900">
                        Gadget Gurkhas
                    </h1>
                </div>
            </div>
        </Link>
    );
}
