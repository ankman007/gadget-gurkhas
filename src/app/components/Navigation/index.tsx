import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

export default function Navigation() {

    return (
        <>
            <header className="mx-auto w-full bg-blue-200">
                <div className="main-nav flex h-100 bg-blue-900">
                    <ul className="flex w-full items-center font-bold text-white uppercase text-xs">
                        <li className="m-4"><Link href={'/'}>Home</Link></li>
                        <li className="m-4"><Link href={'/about-us'}>About Us</Link></li>
                        <li className="m-4"><Link href={'/contact-us'}>Contact Us</Link></li>
                        <li className="m-4"><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
                    </ul>
                    <Link href={'/login'}>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white rounded m-4 p-2">
                            Join/Login
                        </button>
                    </Link>
                </div>
                <div className="flex bg-white text-blue-900">
                    <ul className="flex justify-end w-full p-0 m-0 font-medium ">
                        <li className="m-4"><Link href={'/category/trending'}>Trending</Link></li>
                        <li className="m-4"><Link href={'/category/multimedia'}>Multimedia</Link></li>
                        <li className="m-4"><Link href={'/category/tech-reviews'}>Tech Reviews</Link></li>
                        <li className="m-4"><Link href={'/category/iot'}>IoT</Link></li>
                        <li className="m-4"><Link href={'/category/ai'}>Artificial Intelligence</Link></li>
                    </ul>
                    <FontAwesomeIcon className="text-black w-5 m-4 cursor-pointer" icon={faBars} />
                </div>
            </header>
        </>
    )
}

