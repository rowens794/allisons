import NavBar from "../../components/navbars/navbar-one";
import Footer from "../../components/Footers/Allisons_Custom";
import Grid from "../../components/Feature_Sections/Appointment_Selection";

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
