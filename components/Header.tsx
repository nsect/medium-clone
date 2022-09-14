import Link from 'next/link';
function Header() {
  return (
    <header className="bg-white border-b border-black sticky top-0 flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="logo object-contain cursor-pointer"
            src="/assets/logo.png"
            alt="logo"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>
            <a
              className="hover:text-green-600"
               href="https://nsectdevelopment.com/"
            >
              About
            </a>
          </h3>
          <h3>
            <a
              className="hover:text-green-600"
              href="https://nsectdevelopment.com/#form"
            >
              Contact
            </a>
          </h3>
          <h3 className=" hover:bg-white hover:border hover:border-green-600 cursor-pointer hover:text-green-600 text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className=" group flex items-center space-x-5 text-green-600">
        <h3 className="group-hover:bg-green-600 border px-4 py-1 rounded-full border-green-600">
          <a
            className="group-hover:text-white duration-200"
            href="https://nsectdevelopment.com"
          >
            Back to nsect dev
          </a>
        </h3>
      </div>
    </header>
  );
}

export default Header;
