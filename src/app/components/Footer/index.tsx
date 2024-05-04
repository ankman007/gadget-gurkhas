import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faShieldAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="container flex mx-auto bg-blue-900 p-2 rounded-xl text-white font-medium">
            <div className="design-by flex-grow m-4 cursor-pointer"> 
                Design By <b className="text-gray-950"><a href="https://github.com/ankman007/next-ts-blog-application" target="_blank">CodeSQAD</a></b>
            </div>
            <ul className="flex items-end">
                <li className="m-4">
                    <Link href={'/'} className="flex items-center">
                        Home
                    </Link>
                </li>
                <li className="m-4">
                    <Link href={'/about-us'} className="flex items-center">
                        About Us
                    </Link>
                </li>
                <li className="m-4">
                    <Link href={'/contact-us'} className="flex items-center">
                        Contact Us
                    </Link>
                </li>
                <li className="m-4">
                    <Link href={'/privacy-policy'} className="flex items-center">
                        Privacy Policy
                    </Link>
                </li>
                <li className="m-4">
                    <Link href={'/disclaimer'} className="flex items-center">
                        Disclaimer
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
