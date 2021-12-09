import Image from "next/image";

const posts = [
  {
    title: "Small Business Accounting & Payroll",
    href: "#",
    description:
      "Whether you need to generate monthly financial statements or prepare payroll for your employees, we offer 1 stop service for small business owners to ensure that their accounting needs are met.",
    imageUrl: "/images/payroll.jpeg",
  },
  {
    title: "IRS Issue Resolution",
    href: "#",
    description:
      "Have you recieved a scary letter from the IRS?  Dealing with them can be a buerocratic and emotional nightmare.  Let us take over the process and make your life easier.",
    imageUrl: "/images/irs.jpeg",
  },
  {
    title: "Nonprofit Accounting",
    href: "#",
    description:
      "Nonprofit organizations face many of the same challenges that small business owners face.  Whether your organization needs help with day to day accounting or preparation of 990 filings, we are here to help.",
    imageUrl: "/images/nonprofit.jpeg",
  },
];

export default function Example() {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We Are More Than Just Tax Prep
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            We are a full service accounting practice that helps small
            businesses, nonprofits and individuals deal with day to day
            accounting, bookkeeping and regulatory issues.
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative flex-shrink-0 overflow-hidden">
                <div className="absolute top-0 z-20 w-full h-full opacity-40 bg-primary-700" />
                <Image
                  className="object-cover w-full h-full"
                  width={600}
                  height={300}
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
