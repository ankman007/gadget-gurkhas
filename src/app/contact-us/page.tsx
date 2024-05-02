"use client";
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/LogoBanner';
import Footer from '@/app/components/Footer';

export default function MyComponent(){
    return (
        <>
            <Navigation/>
            <Header/>
            <div className="container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center">
                <h2 className='text-2xl font-bold mb-4 capitalize text-center'>Contact Us</h2>
                <form action="#">
                    <label htmlFor=""></label>
                </form>
            </div>
            <Footer/>
        </>
    );
}
