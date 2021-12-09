import {
  UsersIcon,
  LightningBoltIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const features = [
  {
    name: "Personal Return",
    description:
      "Your an individual with a w-2 or a 1099 + investment accounts. We can help you file your tax return in our office.",
    icon: UsersIcon,
    time: "30 minutes",
    price: "$85",
    virtualLinkText: "Virtual Appt.",
    inpersonLinkText: "In-Person Appt.",
    virtualLink: "/schedule/virtual-personal",
    inpersonLink: "/schedule/in-person-personal",
  },
  {
    name: "Personal + Business Return",
    description:
      "Your an individual with a w-2 or a 1099 + investment accounts. We can help you file your tax return via an online video call.",
    icon: BriefcaseIcon,
    time: "60 minutes",
    price: "$150",
    virtualLinkText: "Virtual Appt.",
    inpersonLinkText: "In-Person Appt.",
    virtualLink: "/schedule/virtual-business",
    inpersonLink: "/schedule/in-person-business",
  },
  {
    name: "Drop Off",
    description:
      "You have a business or rental property along with the rest of your personal tax needs.  We can help you complete and file your tax return in our office.",
    icon: LightningBoltIcon,
    time: "Done in 48 hours",
    price: "$85-$150",
    virtualLinkText: "Submit Online",
    inpersonLinkText: "Drop Off @ Office",
    virtualLink: "/schedule/dropoff-virtual",
    inpersonLink: "/schedule/dropoff-in-person",
  },
];

export default function Example() {
  return (
    <div className="pt-8 overflow-hidden min-h-screenLessHeaderAndFooter bg-gray-50 sm:pt-6 md:pt-12 lg:pt-18">
      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 transform -translate-x-1/2 left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">
              Schedule an Appointment
            </h2>
            <h4 className="font-light text-gray-700 ">
              Select the type of appoint you need.
            </h4>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <div className="h-full p-4 border-2 border-gray-400 rounded-md shadow-md ">
                  <dt>
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                  <div className="flex flex-row w-full h-12 gap-5 ">
                    <Link href={feature.virtualLink}>
                      <a className="w-full">
                        <div className="w-full py-2 mt-3 text-center text-gray-600 bg-gray-100 border border-gray-300 rounded-full hover:bg-primary-300">
                          {feature.virtualLinkText}
                        </div>
                      </a>
                    </Link>
                    <Link href={feature.inpersonLink}>
                      <a className="w-full">
                        <div className="w-full py-2 mt-3 text-center text-gray-600 bg-gray-100 border border-gray-300 rounded-full hover:bg-primary-300">
                          {feature.inpersonLinkText}
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
