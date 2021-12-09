import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Grid from "../../components/appointment_selection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <Grid />
      </main>
      <Footer />
    </div>
  );
}
