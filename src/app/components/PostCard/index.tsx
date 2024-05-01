"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Post {
    title: string;
    id: number;
}

export default function PostCard() {
    const [post, setPost] = useState<Post[]>([]);
    const [authorName, setAuthorName] = useState('');
    const [postCategory, setPostCategory] = useState('');

    useEffect(() => {
        generateRandomPost();
        generateAuthorName();
        generateRandomCatagory();
    }, []);

    const generateRandomPost = () => {
        const randomPostID = Math.floor(Math.random() * 100) + 1; 
        fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostID}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Problem during data fetching.');
                }
                return response.json();
            })
            .then((data) => {
                const { title, id } = data;
                setPost({ title, id });
            })
            .catch((error) => console.log("Encountered error while fetching the data: ", error));
    };
    
    const generateAuthorName = () => {
        const randomFirstNames = [
            "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia", 
            "James", "Amelia", "Benjamin", "Isabella", "Lucas", "Mia", "Henry", "Evelyn", "Alexander", "Harper",
            "Michael", "Abigail", "Daniel", "Emily", "Matthew", "Elizabeth", "David", "Sofia", "Joseph", "Ella"
        ];
    
        const randomLastNames = [
            "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", 
            "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson"
        ];

        const randomFirstNameIndex = Math.floor(Math.random() * randomFirstNames.length);
        const randomLastNameIndex = Math.floor(Math.random() * randomLastNames.length);
        const randomFirstName = randomFirstNames[randomFirstNameIndex];
        const randomLastName = randomLastNames[randomLastNameIndex];
        setAuthorName(`${randomFirstName} ${randomLastName}`);
    }

    const generateRandomCatagory = () => {
        const categories = ['Trending', 'Multimedia', 'Tech Reviews', 'IoT', 'Artificial Intelligence', 'Cybersecurity', 'Programming', 'Software Development', 'Mobile Apps', 'Web Development', 'Data Science', 'Cloud Computing', 'Gadgets & Devices', 'Robotics', 'Augmented Reality', 'Virtual Reality', 'Blockchain', 'Internet', 'Networking', 'Computer Hardware'];

        const randomCatagory = categories[Math.floor(Math.random() * categories.length)];
        setPostCategory(`${randomCatagory}`);
    }

    return (
        
        <div className="rounded-md bg-white shadow-lg max-w-md mx-auto m-2">
            <div className="relative">
                <Image src="/images/dummy-image.png" width={500} height={500} alt="dummy-image" className="rounded-t-md" />
            </div>
            <div className="px-4 py-3">
                <div className="flex items-center justify-between flex-grow">
                    <p className="text-sm font-medium text-gray-600">{authorName} in <span className="text-blue-500">
                        <Link href={`category/${postCategory.replace(/\s+/g, '-').toLowerCase()}`}>{postCategory}</Link></span></p>
                </div>
                <hr className="my-2" />
                <Link className="block text-lg font-semibold text-gray-900 hover:text-blue-500 capitalize"
                    href={{
                        pathname: `/post`,
                        query: {
                            post_id: post.id,
                        }
                    }}>
                        {post.title}
                </Link>
                <p className="text-sm font-medium text-gray-600">July 21, 2022</p>
            </div>
        </div>
    );
}
