import Link from "next/link";

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
              Confirm Your Appointment
            </h2>
            <h4 className="font-light text-gray-700 ">
              Personal Tax Return at Our Office
            </h4>
          </div>
          <div className="flex flex-col-reverse pt-4 mt-6 md:gap-8 md:flex-row md:col-span-2 justify-evenly sm:mt-0">
            <div className="w-full py-4">
              <p className="pb-4 font-light text-gray-800">
                <span className="font-bold">
                  Schedule an appointment at our office, in Wellsville, OH
                </span>
                {", "}
                to sit down with a Certified Public Account and have your tax
                return completed before you walk out the door.
              </p>
              <p className="pb-4 font-light text-gray-800">
                Personal returns take approximately{" "}
                <span className="font-bold">30 minutes to complete</span>.
                During that time we will organize your tax documents and make
                sure that you are getting absolutely every deduction that your
                are eligible for. In fact we guarantee that you will get the
                highest refund possible or we‘ll give you your money back.
              </p>
              <p className="pb-4 font-light text-gray-800">
                <span className="font-bold ">
                  We charge $85 for a personal returns
                </span>{" "}
                and this is a perfect solutions for individuals and families who
                face standard taxation needs:
              </p>
              <ul className="pb-2 pl-8 text-gray-800 list-disc">
                <li className="pb-2 font-light text-gray-800">
                  Less than $500k in Annaul Income
                </li>
                <li className="pb-2 font-light text-gray-800">
                  W2 or 1099 Earnings Statements
                </li>
                <li className="pb-2 font-light text-gray-800">
                  Multiple Retirement, Interest Bearing, and Brokerage Accounts
                </li>
                <li className="pb-2 font-light text-gray-800">
                  Mortgage & Student Loan Interest Statements
                </li>
                <li className="pb-2 font-light text-gray-800">
                  Multiple Dependants
                </li>
                <li className="pb-2 font-light text-gray-800">
                  Major Medical Expenses
                </li>{" "}
                <li className="pb-2 font-light text-gray-800">
                  Pension & Social Security Income
                </li>
                <li className="pb-2 font-light text-gray-800">
                  Charitable Contributions
                </li>
              </ul>
              <p className="pb-4 font-light text-gray-800">
                Our{" "}
                <span className="font-bold">
                  service includes preparation and filing of your federal,
                  state, and local tax returns
                </span>
                . We also E-File all eligible returns to ensure that you get
                your tax refund as quickly as possible.
              </p>
              <p className="pb-4 font-light text-gray-800">
                If you have a business or rental property we will likely need
                additional time to complete your return. Please schedule an
                appointment at this link -{" "}
                <Link href="/schedule/in-person-business">
                  <a className="underline text-primary-700">
                    Personal & Business Appointment
                  </a>
                </Link>
                .
              </p>
            </div>
            <div className="w-64 max-w-full py-4 mx-auto md:w-44">
              <button
                type="button"
                className="items-center w-full px-4 py-4 font-medium text-center text-white border border-transparent rounded shadow-md md:w-44 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <a href="https://calendly.com/rowens794/30-minute-return-in-person">
                  Schedule - $85
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
