import Image from "next/image";
import { MailIcon, PhoneIcon, HomeIcon } from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="relative bg-white" id="contact">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative w-full h-full">
            <Image
              className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              layout="fill"
              src="/images/office-lime.jpg"
              alt="Allison's Tax and Financial Services Office"
            />
          </div>
        </div>
      </div>
      <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Contact Us
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Feel Free to reach out to us if you have any questions.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (330) 532-3074</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <HomeIcon
                    className="w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>455 Main Streen</p>
                  <p className="mt-1">Wellsville, OH 43968</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>allen@allisonstax.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
