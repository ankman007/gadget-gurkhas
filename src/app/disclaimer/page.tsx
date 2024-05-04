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
          Disclaimer
        </h2>
        <p className="text-lg">
          Welcome to Gadget Data, a platform dedicated to providing information,
          reviews, and insights on various technological products and services.
          It is essential for users to understand the following disclaimers
          regarding the content and services provided by Gadget Data.
          <br />
          <br />
          1. Accuracy and Reliability: While we strive to ensure the accuracy
          and reliability of the information presented on Gadget Data, we cannot
          guarantee that all content is free from errors or omissions. The
          opinions expressed on this platform are based on our experiences,
          research, and analysis of the products and services reviewed.
          <br />
          <br />
          2. Editorial Independence: Gadget Data maintains editorial
          independence from manufacturers, advertisers, and sponsors. Our
          reviews and recommendations are impartial and unbiased, and we do not
          allow external influences to impact our content.
          <br />
          <br />
          3. Product Endorsements: Gadget Data may feature products or services
          from various manufacturers or providers. However, the inclusion of
          such products or services does not constitute an endorsement or
          recommendation by Gadget Data. Users should conduct their own research
          and consider their individual needs and preferences before making
          purchasing decisions.
          <br />
          <br />
          4. Technology Trends: The field of technology is constantly evolving,
          and information provided on Gadget Data may become outdated over time.
          While we strive to keep our content up-to-date, we cannot guarantee
          that all information is current or relevant.
          <br />
          <br />
          5. User Responsibility: Users of Gadget Data are responsible for their
          own actions and decisions based on the information provided. Gadget
          Data shall not be held liable for any damages, losses, or
          inconveniences arising from the use of our platform or reliance on the
          information provided.
          <br />
          <br />
          By accessing or using Gadget Data, users agree to abide by these
          disclaimers and terms of use. If you have any questions or concerns
          regarding our disclaimers or content, please contact us for
          clarification.
          <br />
          <br />
          Thank you for choosing Gadget Data as your trusted source for
          technology information. We appreciate your continued support and trust
          in our platform.
        </p>
      </div>
      <Footer />
    </>
  );
}
