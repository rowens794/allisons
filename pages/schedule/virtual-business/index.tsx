import NavBar from "../../../components/navbars/navbar-one";
import Footer from "../../../components/Footers/Allisons_Custom";
import Virtual_Business from "../../../components/Feature_Sections/Appointment_Types/Virtual_Business";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <Virtual_Business />
      </main>
      <Footer />
    </div>
  );
}
