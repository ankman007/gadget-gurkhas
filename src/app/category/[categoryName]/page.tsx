"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/LogoBanner';

export default function MyComponent() {
    // const searchParams = useSearchParams()    
    const pathname = usePathname();

    const parts = pathname.split("/category/");
    const category = parts[1];
    return (
        <>
        <Navigation/>
        <Header/>
        <h2 className='container mx-auto font-bold text-2xl m-10'>
            This is catagory page for {category} category. 
        </h2>
        </>
    );
}
