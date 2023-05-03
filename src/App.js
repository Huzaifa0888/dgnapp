import Header from "./Components/header";
import HeroSection from "./Components/heroSection";
import Box from "./Components/box";
import Investment from "./Components/investment";
import RoadMap from "./Components/roadMap";
import Tokenomics from "./Components/tokenomics";
import Faq from "./Components/faq";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <section className="font-sans bg-[url('/public/background.jpg')]">
        <Header></Header>
        <HeroSection></HeroSection>
        <Box></Box>
        <Investment></Investment>
        <RoadMap></RoadMap>
        <Tokenomics></Tokenomics>
        <Faq></Faq>
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
