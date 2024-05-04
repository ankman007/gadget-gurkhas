// "use client";
// import { usePathname, useSearchParams } from 'next/navigation';
// import Navigation from '@/app/components/Navigation';
// import Header from '@/app/components/LogoBanner';
// import Footer from '@/app/components/Footer';


// export default function MyComponent() {
//     // const searchParams = useSearchParams()    
//     const pathname = usePathname();

//     const parts = pathname.split("/category/");
//     const category = parts[1]; 
//     return (
//         <>
//         <Navigation/>
//         <Header/>
//         <div className='container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center'>
//             <h2 className='container mx-auto font-bold text-2xl m-10'>
//                 This is catagory page for {category} category. 
//             </h2>
//         </div>
//         <Footer/>
//         </>
//     );
// }

"use client";
import { useState, useEffect } from "react";
import postsData from "../../../../public/posts.json";
import { usePathname } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/LogoBanner';
import Footer from '@/app/components/Footer';
import PostCard from "@/app/components/PostCard";

function CategoryPage() {
    const pathName = usePathname();
    const parts = pathName.split("/category/");
    const categoryId = parseInt(parts[1]);

    const [categoryDetails, setCategoryDetails] = useState<string | null>(null);
    const [categoryPosts, setCategoryPosts] = useState<any[]>([]);

    useEffect(() => {
        const categoryPosts = postsData.posts.filter(post => post.categoryId === categoryId);
        const category = categoryPosts.length > 0 ? categoryPosts[0].category : null;

        setCategoryDetails(category);
        setCategoryPosts(postsData.posts.filter(post => post.category === category));
    }, [categoryId]);

    console.log(categoryPosts)

    return (
        <>
            <Navigation />
            <Header />
            <div className='container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center'>
                <h2 className='container mx-auto font-bold text-2xl m-10'>
                    Posts In {categoryDetails || "Not available"}
                </h2>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryPosts.map((post) => (
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

export default CategoryPage;

