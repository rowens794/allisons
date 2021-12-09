import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import VirtualPersonal from "../../../components/appointment_types/Virtual_Personal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <VirtualPersonal />
      </main>
      <Footer />
    </div>
  );
}
