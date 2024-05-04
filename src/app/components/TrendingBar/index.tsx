"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import postsData from "../../../../public/posts.json";
interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  authorId: number;
  publishedDate: string;
  category: string;
}

export default function TrendingBar() {
  const [post, setPost] = useState<{ title: string; id: number }>({
    title: "",
    id: 0,
  });

  useEffect(() => {
    generateRandomPost();
  }, []);

  const posts: Post[] = postsData.posts;

  const generateRandomPost = async () => {
    const randomPostIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomPostIndex];
    await Promise.all(posts.map(async (post, index) => {
      if (index !== randomPostIndex) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay time as needed
        console.log(`Post ${index} called`);
      }
    }));
    setPost(randomPost);
  };

  const trending_post: string = post.title;

  return (
    <div className="container w-full rounded-xl bg-blue-900 h-12 flex items-center justify-start mx-auto m-4 p-4 xs:h-16">
      <div className="content flex items-center xs:p-4 xs:m-4">
        <FontAwesomeIcon icon={faBolt} className="text-yellow h-5 mr-3" />
        <p className="text-white cursor-pointer capitalize">
          {" "}
          <Link href={"/trending"}>Trending Now</Link> | <Link href={`/post/${post.id}`}>{trending_post}</Link>
        </p>
      </div>
    </div>
  );
}
