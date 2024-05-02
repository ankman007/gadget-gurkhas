"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/LogoBanner';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';
import { TwitterShareButton, FacebookShareButton, EmailShareButton, RedditShareButton, TelegramShareButton, TumblrShareButton} from 'react-share';
import { TwitterIcon, FacebookIcon, EmailIcon, RedditIcon, TelegramIcon, TumblrIcon} from 'react-share';

export default function MyComponent(){
    const pathName = usePathname();
    const parts = pathName.split("/post/");
    const postID = parts[1];

    const [post, setPost] = useState({});

    const getPostInfo = () => {
        const randomPostID = Math.floor(Math.random() * 100) + 1; 
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Problem during data fetching.');
                }
                return response.json();
            })
            .then((data) => {
                const { title, body } = data;
                setPost({ title, body });
            })
            .catch((error) => console.log("Encountered error while fetching the data: ", error));
    };
    useEffect(() => {
        getPostInfo();
    }, [])
    return (
        <>
            <Navigation/>
            <Header/>
            
            <div className="container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center">
                <h2 className='text-2xl font-bold mb-4 capitalize text-center'>{post.title}</h2>
                <p className='text-lg capitalize'>
                    {[...Array(10)].map((_, index) => (
                        index === 0 ? post.body : ` ${post.body}`
                    ))}
                </p>
                <div className='container mx-auto m-4 justify-start items-start gap-2 mb-2'>
                <h3 className='text-lg font-extrabold mb-2'>Share on social media: </h3>
                <ul className='flex gap-4'>
                    <li className=''>
                        <TwitterShareButton url={pathName} title={post.title}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                    </li>
                    <li>
                        <FacebookShareButton url={pathName} title={post.title}><FacebookIcon size={32} round={true} /></FacebookShareButton>    
                    </li>
                    <li>
                        <EmailShareButton url={pathName} title={post.title}><EmailIcon size={32} round={true} /></EmailShareButton>

                    </li>
                    <li>
                        <RedditShareButton url={pathName} title={post.title}><RedditIcon size={32} round={true} /></RedditShareButton>

                    </li>
                    <li>
                        <TelegramShareButton url={pathName} title={post.title}><TelegramIcon size={32} round={true} /></TelegramShareButton>

                    </li>
                    <li>
                        <TumblrShareButton url={pathName} title={post.title}><TumblrIcon size={32} round={true} /></TumblrShareButton>
                    </li>
                </ul>
                </div>

            </div>
            <Footer/>


        </>
    );
}
