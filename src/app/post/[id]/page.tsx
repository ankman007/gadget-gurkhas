"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/LogoBanner';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';

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

            </div>
            <Footer/>


        </>
    );
}
