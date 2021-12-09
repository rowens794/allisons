import { ReactElement } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
// import logo from "./logo.png";
import clientData from "../../client-data.json";

interface Props {}

let links = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Schedule an Appointment",
    href: "/schedule",
  },
  {
    title: "Contact Us",
    href: "/#contact",
  },
];

export default function index({}: Props): ReactElement {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <LogoImages />
              </div>

              <DesktopLinks />

              <div className="flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Contact />
            </div>
          </div>

          <MobileLinks />
        </>
      )}
    </Disclosure>
  );
}

const LogoImages = () => {
  return (
    <>
      <div className="flex-shrink-0">
        {/* <Image alt="Allisons" src={logo} width="150" height="30" /> */}
        {/* <p className="text-xl font-light text-gray-50">
          <span className="text-2xl font-bold text-primary-600">A</span>llison‘s{" "}
          <span className="text-2xl font-bold text-primary-600">T</span>ax
        </p> */}
      </div>
    </>
  );
};

const DesktopLinks = () => {
  return (
    <div className="hidden md:block lg:ml-6">
      <div className="flex space-x-4">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        {links.map((link) => (
          <Link href={link.href} key={link.title}>
            <a
              className={
                "text-gray-300 hover:bg-gray-700 hover:text-gray-100 px-3 py-2 rounded-sm font-light"
              }
            >
              {link.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

const MobileLinks = () => {
  return (
    <div className="px-2">
      <Disclosure.Panel className="lg:hidden">
        {links.map((link) => (
          <Disclosure.Button
            as="a"
            href={link.href}
            key={link.title}
            className="block px-3 py-2 text-base text-gray-300 rounded-md hover:bg-gray-700 hover:text-white font-e"
          >
            {link.title}
          </Disclosure.Button>
        ))}
      </Disclosure.Panel>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="hidden md:block lg:ml-4">
      <div className="items-center hidden lg:flex">
        <a
          className="text-xs text-gray-50 font-extralight"
          href={`tel:${clientData.phone}`}
        >
          Phone: {clientData.phone}
        </a>
      </div>
    </div>
  );
};
