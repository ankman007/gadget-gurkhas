import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

export default function TrendingBar() {
    const trending_post:string = "Best Value For Money Smart Home Devices of 2024"
    return (
        <div className="container w-full rounded-xl bg-blue-900 h-10 flex items-center justify-start mx-auto m-4 p-3">
            <div className="content flex items-center">
                <FontAwesomeIcon icon={faBolt} className="text-yellow h-5 mr-3" />
                <p className="text-white cursor-pointer"> <Link href={'/trending'}>Trending Now</Link> | {trending_post}</p>
            </div>
        </div>
    );
}
