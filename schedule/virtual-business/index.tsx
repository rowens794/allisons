import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Virtual_Business from "../../../components/appointment_types/Virtual_Business";

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
