import { useState } from "react";
import {
  CalendarIcon,
  CheckIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const offers = [
  {
    name: "Digital Drop Off",
    icon: ViewListIcon,
    description:
      "Submit your tax documents online, we'll take care of everything, and let you know when your return has been submitted.",
    bestFor: "Individuals",
    pricesStart: "Starting at $85",
    timeRequired: "less than 5 minutes",
    returnTurnaround: "1-2 business days",
    link: "/schedule/dropoff-virtual",
    items: [
      "Online Doc Upload",
      "No Hassle Completion",
      "IRS Audit Protection",
      "Max Refund Guarantee",
      "Free E-Filing",
      "48 Hour Turnaround",
    ],
  },
  {
    name: "In Person Drop Off",
    icon: ViewBoardsIcon,
    description:
      "Drop your tax documents off at our office, we'll file your return, and let you know when it's been submitted.",
    bestFor: "Individuals",
    pricesStart: "Starting at $85",
    timeRequired: "less than 5 minutes",
    returnTurnaround: "1-2 business days",
    link: "/schedule/dropoff-in-person",
    items: [
      "Drop Off at Office",
      "No Hassle Completion",
      "IRS Audit Protection",
      "Max Refund Guarantee",
      "Free E-Filing",
      "48 Hour Turnaround",
    ],
  },
  {
    name: "Online Tax Consultation",
    icon: CalendarIcon,
    description:
      "Schedule a virtual consultation with our in house tax experts, we'll finish your return during the session, and you'll leave knowing exactly what your refund will be.",
    bestFor: "Business Owners and Complex Individuals",
    pricesStart: "Starting at $150",
    timeRequired: "about 30 minutes",
    returnTurnaround: "immediately",
    link: "/schedule/virtual-personal",
    items: [
      "Online/Virtual Meeting",
      "Talk to a Tax Expert",
      "IRS Audit Protection",
      "Max Refund Guarantee",
      "Free E-Filing",
      "Immediate Turnaround",
    ],
  },
  {
    name: "In Person Tax Consultation",
    icon: UsersIcon,
    description:
      "Schedule an in-person consultation with a tax expert.  We'll oversee your return from start to finish and have it finished by the time you walk out of our office.",
    bestFor: "Business Owners and Complex Individuals",
    pricesStart: "Starting at $150",
    timeRequired: "about 30 minutes",
    returnTurnaround: "immediately",
    link: "/schedule/in-person-personal",
    items: [
      "In-person Meeting",
      "Talk to a Tax Expert",
      "IRS Audit Protection",
      "Max Refund Guarantee",
      "Free E-Filing",
      "Immediate Turnaround",
    ],
  },
];

export default function Example() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary-700" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:px-8 lg:grid lg:grid-cols-2">
        <div className="px-4 py-16 bg-white sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Allisons At Your Service
            </h2>
            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Four Ways to Get Your Taxes Done
            </p>
            <dl className="mt-12 space-y-10">
              {offers.map((feature, i) => (
                <div
                  key={feature.name}
                  className={`relative ${
                    selected === i ? "bg-gray-200" : null
                  } rounded-md p-4 cursor-pointer`}
                  onClick={() => setSelected(i)}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 rounded-md bg-primary-500">
                      <feature.icon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <Panel offer={offers[selected]} />
      </div>
    </div>
  );
}

const Panel = ({ offer }) => {
  return (
    <div className="px-4 py-16 bg-primary-700 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
      <div className="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
        <div>
          <h2 className="sr-only">Price</h2>
          <p className="relative ">
            <span className="flex flex-col text-center">
              <span className="text-3xl font-extrabold tracking-tight text-white">
                Start Your
              </span>
              <span className="mt-2 text-4xl font-extrabold text-primary-200">
                {offer.name}
              </span>
              <span className="mt-2 text-xl font-light text-white">
                {offer.pricesStart}
              </span>
            </span>
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-px overflow-hidden rounded sm:grid-cols-2"
        >
          {offer.items.map((item) => (
            <li
              key={item}
              className="flex items-center px-4 py-4 space-x-3 text-base text-white bg-opacity-50 bg-primary-800"
            >
              <CheckIcon
                className="w-6 h-6 text-primary-300"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href={offer.link}
          className="flex items-center justify-center w-full px-8 py-4 text-lg font-medium leading-6 bg-white border border-transparent rounded-md text-primary-600 hover:bg-primary-50 md:px-10"
        >
          Get started today
        </a>
        <p className="block text-base text-center font-extralight text-primary-200 hover:text-white">
          Want to Talk About it?{" "}
          <span className="ml-2 font-light">Call us at (330) 532-3074</span>
        </p>
      </div>
    </div>
  );
};
