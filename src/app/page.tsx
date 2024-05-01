import Navigation from "./components/Navigation/index";
import Header from "./components/LogoBanner/index";
import TrendingBar from "./components/TrendingBar";
import LatestPosts from "./components/LatestPosts";
import EditorsPickPosts from "./components/EditorsPickPosts";
import DeepDivesPosts from "./components/DeepDivesPosts";
import OurExpertiseCard from "./components/OurExpertiseCard";

import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Navigation/>
      <Header/>
      <TrendingBar/>
      <LatestPosts/>
      <EditorsPickPosts/>
      <DeepDivesPosts/>
      <OurExpertiseCard/>
      <Footer/>
    </>   
  );
}
