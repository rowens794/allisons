import NavBar from "../components/navbar";
import Hero from "../components/hero";
import GridWithIcons from "../components/grid_w_icons";
import LargeBoxes from "../components/large_boxes";
import AllisonsPanel from "../components/allisons_panel";
import Contact from "../components/contact";
import Footer from "../components/footers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <Hero />
        <AllisonsPanel />
        <GridWithIcons />
        <LargeBoxes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
