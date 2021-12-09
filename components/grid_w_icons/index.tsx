import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Maximum Refund Guaranteed",
    icon: CloudUploadIcon,
    description:
      "We guarantee that every return we prepare will recieve the maximum refund.",
  },
  {
    name: "Work with a Real CPA",
    icon: LockClosedIcon,
    description:
      "Work with a real tax professional, not a part time preparer or online program.",
  },
  {
    name: "Multiple Ways to File",
    icon: RefreshIcon,
    description:
      "We make it easy to find an appointment that works for you: dropoff, online or in person.",
  },
  {
    name: "Transparent Pricing",
    icon: ShieldCheckIcon,
    description:
      "Our pricing is simple $85 for personal returns / $150 for business.",
  },
  {
    name: "Free E-Filing ",
    icon: CogIcon,
    description:
      "Say good bye to snail mail.  We send every return we prepare electronically.",
  },
  {
    name: "Low Price Guarantee",
    icon: ServerIcon,
    description:
      "If you find another CPA that will do your return for less, we'll refund the difference.",
  },
];

export default function Example() {
  return (
    <div className="relative py-16 bg-white sm:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider uppercase text-primary-600">
          Done Fast Done Right
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">
          Taxes Made Easy
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          We make getting your taxes done easy by offering the flexibility you
          need.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root h-full px-6 pb-8 bg-gray-100 rounded-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-primary-500">
                        <feature.icon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium tracking-tight text-gray-700">
                      {feature.name}
                    </h3>
                    <p className="text-base text-gray-500 ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
