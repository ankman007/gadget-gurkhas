"use client";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <header className="mx-auto w-full bg-blue-200">
                <div className="main-nav flex h-100 bg-blue-900">
                    <ul className="sm:flex w-full items-center font-bold text-white uppercase text-xs">
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
            <ul className={`sm:flex ${showMenu ? 'block' : 'hidden'} justify-end w-full p-0 m-0 font-medium`}>
                <li className="m-4"><a href="/category/11">Tech Reviews</a></li>
                <li className="m-4"><a href="/category/12">Multimedia</a></li>
                <li className="m-4"><a href="/category/13">IoT</a></li>
                <li className="m-4"><a href="/category/15">Energy</a></li>
                <li className="m-4"><a href="/category/14">AI</a></li>
                <li className="m-4"><a href="/category/17">Science</a></li>
            </ul>
            <button onClick={toggleMenu} className="block sm:hidden text-black w-5 m-4 cursor-pointer">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
            </header>
        </>
    )
}

