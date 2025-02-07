import Navbar from "@/app/component/navbar/page";
import Footer from "@/app/component/footer/page";
import Header from "@/app/component/header/page";
export default function CreateAccount() {
    return (
    <div> 
       <Header/>
       <Navbar/>
       
      <section className="bg-purple-100 py-12 relative">
        <div className="container mx-auto px-4 ml-24">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 ">My Account</h1>
          <div className="mt-2 flex flex-wrap gap-2 text-gray-700">
            <a className="font-semibold font-italic" href="">Home</a>
            <span>.</span>
            <a className="font-semibold font-italic" href="#">Pages</a>
            <span>.</span>
            <a className="text-pink-600 font-semibold font-italic" href="/pages/contact">Create Account</a>
          </div>
        </div>
      </section>
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-24">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Create Account</h1>
            <p className="mt-2 text-gray-500">Create a new account to get started</p>
          </div>
          <div className="mt-5">
            <form action="">
              <div className="relative mt-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="off"
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Full Name
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="off"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="confirmPassword"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Confirm Password
                </label>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-pink-600 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Create Account
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Already have an account?{' '}
                <a
                  href="#!"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Login
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
      <img className="w-full md:w-[1100px] mx-auto mt-24" src="/image/image 1174.png" alt="logos" />

      <div className="mt-24">
        <Footer/>
      </div>
      </div> 
    );
  }
  