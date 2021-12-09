import NavBar from "../../../components/navbars/navbar-one";
import Footer from "../../../components/Footers/Allisons_Custom";
import InPersonBusiness from "../../../components/Feature_Sections/Appointment_Types/In_Person_Business";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <InPersonBusiness />
      </main>
      <Footer />
    </div>
  );
}
