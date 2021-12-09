import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import InPersonPersonal from "../../../components/appointment_types/In_Person_Personal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <InPersonPersonal />
      </main>
      <Footer />
    </div>
  );
}
