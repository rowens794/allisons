import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Your Taxes</span>
                    <span className="block text-primary-400">Done Right</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Schedule an appointment today to get your taxes to get your
                    Federal and State taxes prepared by a local CPA.
                  </p>
                  <div className="flex gap-5 mt-10 sm:mt-12">
                    <Link href="/schedule/in-person-personal">
                      <a>
                        <button
                          type="submit"
                          className="block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 focus:ring-offset-gray-900"
                        >
                          Schedule an Appointment
                        </button>
                      </a>
                    </Link>
                    <Link href="/schedule/virtual-personal">
                      <a>
                        <button
                          type="submit"
                          className="block w-full px-4 py-3 font-medium text-white bg-gray-500 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 focus:ring-offset-gray-900"
                        >
                          Digital Drop Off
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    width={600}
                    height={600}
                    src="/images/hero.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
