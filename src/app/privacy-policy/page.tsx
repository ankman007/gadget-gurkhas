"use client";
import Navigation from "@/app/components/Navigation";
import Header from "@/app/components/LogoBanner";
import Footer from "@/app/components/Footer";

export default function MyComponent() {
  return (
    <>
      <Navigation />
      <Header />
      <div className="container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 capitalize text-center">
          Privacy Policy
        </h2>
        <p className="text-lg">
          Welcome to the privacy policy of Gadget Data. We value your privacy
          and are committed to protecting your personal information. This policy
          outlines how we collect, use, and safeguard the information you
          provide to us.
          <br />
          <br />
          **Information Collection and Use**: Gadget Data collects personal
          information, such as your name and email address, when you subscribe
          to our newsletter or submit inquiries through our contact form. We use
          this information to communicate with you and provide you with updates
          and information about our products and services.
          <br />
          <br />
          **Data Security**: Gadget Data implements industry-standard security
          measures to protect your personal information from unauthorized
          access, disclosure, alteration, or destruction. However, please note
          that no method of transmission over the Internet or electronic storage
          is 100% secure, and we cannot guarantee absolute security.
          <br />
          <br />
          **Third-Party Services**: Gadget Data may utilize third-party
          services, such as analytics tools or advertising networks, that may
          collect information about your interactions with our website. These
          third-party services have their own privacy policies, and we encourage
          you to review them.
          <br />
          <br />
          **Cookies**: Gadget Data uses cookies to enhance your browsing
          experience and analyze website traffic. You can control cookies
          through your browser settings, but please note that disabling cookies
          may affect the functionality of our website.
          <br />
          <br />
          **Changes to this Privacy Policy**: Gadget Data reserves the right to
          update or modify this privacy policy at any time. We will notify you
          of any changes by posting the updated policy on this page.
          <br />
          <br />
          **Contact Us**: If you have any questions or concerns about this
          privacy policy or our practices regarding your personal information,
          please contact us at [email address].
          <br />
          <br />
          By using our website, you consent to the terms of this privacy policy.
        </p>
        <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg mt-8 transition duration-300 ease-in-out transform hover:scale-105">
          Learn More
        </button>
      </div>
      <Footer />
    </>
  );
}
