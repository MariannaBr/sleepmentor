import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import pic1 from "../public/sleep2.svg";
import doctor from "../public/doctor.jpg";
import doctor2 from "../public/doctor2.svg";
import doctor3 from "../public/humberto-chavez-FVh_yqLR9eA-unsplash.jpg";
import doctor4 from "../public/doctor5.svg";
import ouraStat from "../public/graph.svg";
import certi1 from "../public/certification1.svg";
import certi2 from "../public/certification2.svg";

export default function Home() {
  return (
    <div className="relative bg-white">
      <div className="relative w-full h-full mx-auto max-w-7xl">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={pic1}
          alt=""
        />
      </div>

      <div className="relative sm:-mt-10 ">
        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-gray-400">Reclaim your sleep</span>
          <span className="block text-primary-blue">with a sleep mentor</span>
        </h1>
        <div className="my-10 md:mb-14 lg:mb-32 max-w-sm mx-auto sm:max-w-none flex justify-center">
          <div className="mx-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-opacity-70 sm:px-8"
            >
              Join
            </a>
          </div>
        </div>
      </div>

      <div className="bg-primary-blue pt-10 lg:py-32 md:pt-14 pb-20 md:pb-24 lg:pt-32 lg:pb-40 xl:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              80% of high-achievers are sleep deprived
            </h2>
          </div>
        </div>
        <div className="mt-10 bg-primary-blue">
          <div className="relative">
            <div className="relative max-w-7xl mx-auto px-14 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-primary-blue p-4 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-blue">
                      IQ Points
                    </dt>
                    <dd className="order-1 text-4xl font-extrabold text-red-300">
                      -15
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-primary-blue p-4 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-blue">
                      Testosterone
                    </dt>
                    <dd className="order-1 text-4xl font-extrabold text-red-300">
                      -15%
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-primary-blue p-4 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-blue">
                      Ability to burn fat
                    </dt>
                    <dd className="order-1 text-4xl font-extrabold text-red-300">
                      -30%
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative bg-white -mt-8 lg:-mt-14 max-w-xs sm:max-w-xl lg:max-w-3xl mx-auto text-center rounded-lg shadow-xl overflow-hidden z-10">
        <div class="space-y-6 xl:space-y-10">
          <Image className="w-full object-cover" src={ouraStat} alt="" />
          <div class="space-y-2 pb-5 md:pb-8 xl:pb-14 px-5">
            <div class="text-3xl md:text-4xl font-extrabold tracking-tight space-y-1">
              <h3 class="text-gray-400">A sleep tracker gives you the data.</h3>
              <p class="text-primary-blue">A sleep mentor helps you improve!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-md md:max-w-2xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-14 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:h-64">
        <div className="relative mx-auto">
          <h3 className="text-3xl font-extrabold text-center text-primary-blue tracking-tight sm:text-4xl">
            Our world class mentors are
          </h3>

          <dl className="mt-6 ml-6 space-y-2 text-center">
            <div className="relative ">
              <dt>
                <div className="flex justify-center h-20">
                  <Image className="flex w-20 h-20 object-fill" src={certi1} alt="" />

                  {/* <svg
                  className="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg> */}
                  <div className="flex items-center text-lg leading-6 font-medium text-primary-blue">
                  Spencer Institute
                  </div>
                </div>
              </dt>
            </div>

            <div className="relative">
            <dt>
                <div className="flex justify-center h-20">
                  <Image className="flex w-20 h-20 object-fill" src={certi2} alt="" />

                  {/* <svg
                  className="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg> */}
                  <div className="flex items-center text-lg leading-6 font-medium text-primary-blue">
                  Association of professional sleep consultants
                  </div>
                </div>
              </dt>
              {/* <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-primary-blue">
                  Invite team members
                </p>
              </dt> */}
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-primary-blue">
                  Invite team members
                </p>
              </dt>
            </div>
          </dl>
        </div>

        <div className=" w-64 h-48 sm:w-80 sm:h-60 object-cover shadow-lg rounded-lg my-8 mx-auto">
          <Image
            className="object-cover shadow-lg rounded-lg"
            src={doctor4}
            alt=""
          />
        </div>
      </div>

      <div className="bg-primary-blue mt-10 md:mt-14">
        <div className="max-w-7xl mx-auto text-center py-8 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-gray-400">Reclaim your sleep</span>
            <span className="block text-white">with sleep mentor</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-blue bg-white hover:bg-gray-200"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-primary-blue hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" className="text-primary-blue hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" className="text-primary-blue hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <div className="mt-4 md:mt-0 md:order-1">
            <p className="text-center text-base text-primary-blue">
              &copy; 2021 SleepMentor, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

{
  /* <div className="relative bg-secondary-brown">
      <div className="lg:relative 2xl:max-w-7xl 2xl:mx-auto">
        <div className="mx-auto max-w-7xl w-full py-16 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-primary-blue sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Reclaim your sleep </span>
              <span className="block text-primary-blue xl:inline">
                with a sleep mentor
              </span>
            </h1>
          </div>
        </div>
        <div className="relative w-full h-full lg:absolute lg:inset-y-20 lg:right-0 lg:w-1/2 lg:h-96 xl:h-full lg:overflow-hidden">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={pic2}
            alt=""
          />
        </div>
      </div>

      <div className="bg-primary-blue py-12 lg:py-24 xl:my-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              80% of high-achievers are sleep deprived
            </h2>
          </div>
        </div>
        <div className="mt-10 bg-primary-blue">
          <div className="relative">
            <div className="relative max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-secondary-brown shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-primary-blue p-4 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-blue">
                      IQ Points
                    </dt>
                    <dd className="order-1 text-4xl font-extrabold text-red-300">
                      -15
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-primary-blue p-4 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-blue">
                      Testosterone
                    </dt>
                    <dd className="order-1 text-4xl font-extrabold text-red-300">
                      -15%
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-primary-blue p-4 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-blue">
                      Ability to burn fat
                    </dt>
                    <dd className="order-1 text-4xl font-extrabold text-red-300">
                      -30%
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 bg-secondary-brown overflow-hidden lg:pt-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-400 sm:text-4xl">
              <span className="block">A sleep tracker gives you the data.</span>
              <span className="block text-primary-blue">
              A sleep mentor helps you improve!
              </span>
            </h2>
          </div>

          <div className="relative text-left mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:h-64">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-left text-primary-blue tracking-tight sm:text-3xl">
                Our world class mentors are
              </h3>

              <dl className="mt-6 space-y-2 text-left">
                <div className="relative ">
                  <dt>
                    <svg
                      className="absolute h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="ml-9 text-lg leading-6 font-medium text-primary-blue">
                      Invite team members
                    </p>
                  </dt>
                </div>

                <div className="relative">
                  <dt>
                    <svg
                      className="absolute h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="ml-9 text-lg leading-6 font-medium text-primary-blue">
                      Invite team members
                    </p>
                  </dt>
                </div>

                <div className="relative">
                  <dt>
                    <svg
                      className="absolute h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="ml-9 text-lg leading-6 font-medium text-primary-blue">
                      Invite team members
                    </p>
                  </dt>
                </div>
              </dl>
            </div>

            <div
              className="mt-10 relative w-full lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
              aria-hidden="true"
            >
              <Image
                className="absolute mx-auto w-full h-full object-cover"
                src={ouraStat}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <div className="py-10 px-6 bg-primary-blue sm:py-16 lg:py-20 md:flex xl:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl text-center md:text-left font-extrabold tracking-tight text-secondary-brown">
                Reclaim your sleep with SleepMentor
              </h2>
            </div>
            <div className="mt-8 mx-auto sm:w-full sm:max-w-md md:mt-0 md:ml-4 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autocomplete="email"
                  className="w-full border-white px-5 py-3 placeholder-primary-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-400 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                ></input>
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-blue-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-secondary-brown">
                We care about the protection of your data. Read our{" "}
                <a
                  href="#"
                  className="text-secondary-brown font-medium underline"
                >
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */
}

{
  /* Footer */
}

{
  /* <footer className="bg-secondary-brown">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-primary-blue hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" className="text-primary-blue hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#" className="text-primary-blue hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-primary-blue">
              &copy; 2021 SleepMentor, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div> */
}
