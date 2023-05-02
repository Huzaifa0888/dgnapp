import Header from "./Components/header";
import HeroSection from "./Components/heroSection";
import Box from "./Components/box";
import Investment from "./Components/investment";
import RoadMap from "./Components/roadMap";

function App() {
  return (
    <>
      <section className="font-sans bg-[url('/public/background.jpg')]">
        <Header></Header>
        <HeroSection></HeroSection>
        <Box></Box>
        <Investment></Investment>
        <RoadMap></RoadMap>
      </section>
    </>
  );
}

export default App;
