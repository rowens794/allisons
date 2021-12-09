import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="relative grid grid-cols-1 py-8 mx-auto gap-x-16 max-w-7xl lg:px-8 lg:grid-cols-2 min-h-screenLessHeaderAndFooter">
        <div />
        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:row-start-1 lg:col-start-1"
        >
          <h2 className="pl-4 mb-8 text-4xl text-gray-700 sm:pl-0">
            Drop-off at The Office
          </h2>

          <p className="text-gray-700">
            You don‘t need to register your return or set an appointment to
            drop-off at the office. Simply come in any time and you can leave
            your tax documents at the front desk. We‘ll let you know when your
            return has been filed and is ready for pick up.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
