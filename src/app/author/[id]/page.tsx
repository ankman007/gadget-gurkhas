"use client";
import { useState, useEffect } from "react";
import postsData from "../../../../public/posts.json";
import { usePathname } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/LogoBanner';
import Footer from '@/app/components/Footer';
import PostCard from "@/app/components/PostCard";

function AuthorPage() {
    const pathName = usePathname();
    const parts = pathName.split("/author/");
    const authorId = parseInt(parts[1]);

    const [authorDetails, setAuthorDetails] = useState<string | null>(null);
    const [authoredPosts, setAuthoredPosts] = useState<any[]>([]);

    useEffect(() => {
        const authorPosts = postsData.posts.filter(post => post.authorId === authorId);
        const author = authorPosts.length > 0 ? authorPosts[0].author : null;

        setAuthorDetails(author);
        setAuthoredPosts(postsData.posts.filter(post => post.author === author));
    }, [authorId]);

    console.log(authoredPosts)

    return (
        <>
            <Navigation />
            <Header />
            <div className='container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center'>
                <h2 className='container mx-auto font-bold text-2xl m-10'>
                    All posts by {authorDetails || "Not available"}
                </h2>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {authoredPosts.map((post) => (
                    <div key={post.id}> 
                        <PostCard post={post}/>
                    </div>
                ))}
                </div>

                    
            </div>
            <Footer />
        </>
    );
}

export default AuthorPage;
