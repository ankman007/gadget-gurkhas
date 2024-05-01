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
                <p className='text-lg capitalize'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit iusto sunt provident in perspiciatis. Fuga, aspernatur quo velit minima in est? Voluptatum at magnam minus pariatur architecto impedit ex distinctio nostrum dolore perspiciatis excepturi atque quis assumenda, ducimus illo laborum similique neque. Repellat aut officia eaque? Possimus officia tenetur magnam illo officiis provident a quos veritatis commodi fugit cupiditate harum assumenda sunt vero eaque itaque corporis, totam libero aliquid porro, atque iusto earum. Expedita dignissimos animi iure modi accusantium quas ipsam amet nulla vitae voluptate? Aliquid, blanditiis maiores aut officia voluptates consequuntur ut dicta magnam. Tenetur, totam eaque. Id.
                </p>
            </div>
            <Footer/>
        </>
    );
}
