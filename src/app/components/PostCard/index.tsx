"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

export default function PostCard() {
  // Set the initial state of post as an empty object of type Post
  const [post, setPost] = useState<Post | null>(null);
  const posts: Post[] = postsData.posts;

  useEffect(() => {
    generateRandomPost();
  });

  const generateRandomPost = () => {
    const randomPostIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomPostIndex];
    setPost(randomPost);
  };

  // Render the component only if post is not null
  if (!post) return null;

  return (
    <div className="rounded-md bg-white shadow-lg max-w-md m-3 px-4">
      <div className="relative cursor-pointer">
        <Image
          src={post.image}
          width={600}
          height={600}
          alt="dummy-image"
          className="rounded-t-md"
        />
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center justify-between flex-grow">
          <p className="text-sm font-medium text-gray-600">
            {post.author} in{" "}
            <span className="text-blue-500">
              <Link
                href={
                  post.category
                    ? `category/${post.category
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`
                    : "#"
                }
              >
                {post.category}
              </Link>
            </span>
          </p>
        </div>
        <hr className="my-2" />
        <Link
          className="block text-lg font-semibold text-gray-900 hover:text-blue-500 capitalize"
          href={`/post/${post.id}`}
        >
          {post.title}
        </Link>
        <p className="text-sm font-medium text-gray-600">
          {post.publishedDate}
        </p>
      </div>
    </div>
  );
}
