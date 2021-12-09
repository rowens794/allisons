import React, { ReactElement } from "react";
const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Book Appointment",
    href: "/schedule",
  },
  {
    name: "Contact Us",
    href: "/#contact",
  },
];

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="justify-center hidden space-x-6 md:order-2 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-400">
            &copy; 2022 Allison’s Tax and Financial Services
          </p>
        </div>
      </div>
    </footer>
  );
}
