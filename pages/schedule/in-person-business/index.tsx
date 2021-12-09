import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import InPersonBusiness from "../../../components/appointment_types/In_Person_Business";

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
