import Navbar from "@/app/component/navbar/page";
import Header from "@/app/component/header/page";
import Footer from "@/app/component/footer/page";

export default function SignIn() {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="bg-purple-100 py-12 relative">
        <div className="container mx-auto px-4 ml-24">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 ">My Account</h1>
          <div className="mt-2 flex flex-wrap gap-2 text-gray-700">
            <a className="font-semibold font-italic" href="">Home</a>
            <span>.</span>
            <a className="font-semibold font-italic" href="#">Pages</a>
            <span>.</span>
            <a className="text-pink-600 font-semibold font-italic" href="/pages/contact">My Account</a>
          </div>
        </div>
      </section>

      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 mt-24 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Login</h1>
            <p className="mt-2 text-gray-500">Please login using account details below.</p>
          </div>

          {/* Page Title Section */}
          <div className="mt-6">
            <form action="">
              {/* Email Section */}
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer w-full border border-gray-300 rounded-md px-3 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none sm:text-base text-sm"
                  autoComplete="off"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-4 left-2 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-800 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>

              {/* Password Section */}
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer w-full border border-gray-300 rounded-md px-3 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none sm:text-base text-sm"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-2 left-4 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-800 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-800"
                >
                  Password
                </label>
                <p className="text-sm text-gray-500 mt-2 text-left">
                  <a
                    href="#!"
                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                  >
                    Forgot your password?
                  </a>
                </p>
              </div>

              {/* Submit Button */}
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-pink-600 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-500">
                Don't have an account yet?{' '}
                <a
                  href="http://localhost:3000/pages/createaccount"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Create account
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>

      <img className="w-full md:w-[1100px] mx-auto mt-24" src="/image/image 1174.png" alt="logos" />
      
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
