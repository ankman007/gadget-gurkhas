"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function TrendingBar() {
  const [post, setPost] = useState<{ title: string; id: number }>({
    title: "",
    id: 0,
  });

  useEffect(() => {
    generateRandomPost();
  }, []);

  const generateRandomPost = () => {
    const randomPostID = Math.floor(Math.random() * 100) + 1;
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Problem during data fetching.");
        }
        return response.json();
      })
      .then((data) => {
        const { title, id } = data;
        setPost({ title, id });
      })
      .catch((error) =>
        console.log("Encountered error while fetching the data: ", error)
      );
  };

  const trending_post: string = post.title;

  return (
    <div className="container w-full rounded-xl bg-blue-900 h-10 flex items-center justify-start mx-auto m-4 p-3">
      <div className="content flex items-center">
        <FontAwesomeIcon icon={faBolt} className="text-yellow h-5 mr-3" />
        <p className="text-white cursor-pointer capitalize">
          {" "}
          <Link href={"/trending"}>Trending Now</Link> | {trending_post}
        </p>
      </div>
    </div>
  );
}
