import NavBar from "../../../components/navbars/navbar-one";
import Footer from "../../../components/Footers/Allisons_Custom";
import Dropzone from "../../../components/Drop-Off-Form/file-drop";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="relative grid grid-cols-1 py-8 mx-auto gap-x-16 max-w-7xl lg:px-8 lg:grid-cols-2 min-h-screenLessHeaderAndFooter">
        <section className="p-8 pt-6 pb-12 bg-gray-200 border border-gray-300 border-dashed rounded text-primary-300 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:row-start-1 lg:col-start-2">
          <div className="max-w-2xl p-4 mx-auto lg:max-w-none">
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-700">
                Instructions
              </h3>
              <p className="mb-4 text-sm font-light text-gray-700">
                Submitting a digital drop off return is easy. Simply fill out
                the contact form along with payment details and drag digital
                copies of your tax information into the drag and drop box below.
              </p>
              <p className="mb-4 text-sm font-light text-gray-700">
                Don’t worry about naming your files. Our tax professionals will
                identify and sort the documents once they start working on your
                return.
              </p>
              <p className="mb-4 text-sm font-light text-gray-700">
                In most cases we can complete your return without any input on
                your part, however, if we do need to clarification in order to
                maximize your refund, we will reach out to you directly.
              </p>

              <p className="mb-4 text-sm font-light text-gray-700">
                Once your return is complete, we will email you copies of your
                tax documents.
              </p>

              <h3 className="text-xl font-bold text-gray-700 ">
                Submit Tax Docs Below
              </h3>
              <Dropzone />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:row-start-1 lg:col-start-1"
        >
          <h2 className="pl-4 mb-8 text-4xl text-gray-700 sm:pl-0">
            Digital Return Drop-off
          </h2>

          <form>
            <div className="max-w-2xl px-4 mx-auto lg:max-w-none lg:px-0">
              <div>
                <h3
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Contact information
                </h3>

                <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        autoComplete="phone"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3
                  id="payment-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Payment details
                </h3>

                <div className="grid grid-cols-3 mt-6 sm:grid-cols-4 gap-y-6 gap-x-4">
                  <div className="col-span-3 sm:col-span-4">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        autoComplete="cc-number"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-3">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="csc"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6 mt-10 border-t border-gray-200">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
                >
                  Pay now
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
