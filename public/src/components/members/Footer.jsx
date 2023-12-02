const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/users/about-us" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Bookish.co
              </span>
            </a>
          </div>
          <div className="md:ml-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 w-full md:w-auto">
            <div className="text-gray-500 dark:text-gray-400 font-medium">
              <h2 className="mb-2 text-lg font-bold text-white uppercase dark:text-white">
              <a href="/users/about-us">About Us</a>
              </h2>
              <p className="text-sm text-[#FDF9EC] font-normal">
                Platform dengan menyajikan Dunia Literasi dengan Pilihan Buku Terbaik
              </p>
            </div>
            <div className="md:ml-16 mb-6 md:mb-0">
              <h2 className="mb-2 text-lg font-bold text-white uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2 flex items-center">
                  <a
                    href="https://www.facebook.com/"
                    className="hover:underline flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FDF9EC"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.135 6H15V3H13.135C12.0369 3.00132 10.9841 3.43814 10.2076 4.21463C9.43114 4.99111 8.99432 6.04388 8.993 7.142V9H7V12H9V21.938H12V12H14.021L14.613 9H12V6.591C12.0023 6.43481 12.0655 6.28569 12.176 6.17532C12.2866 6.06496 12.4358 6.00207 12.592 6H13.135Z"
                        fill="#FDF9EC"
                      />
                    </svg>
                    <span className="text-[#FDF9EC] font-normal">
                      bookish.co
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gmail.com/"
                    className="hover:underline flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                    >
                      <path
                        d="M10.036 8.278L19.294 0.488C18.9354 0.175011 18.476 0.0017575 18 0H2C1.49469 0.000970083 1.00873 0.194424 0.641 0.541L10.036 8.278Z"
                        fill="#FDF9EC"
                      />
                      <path
                        d="M11.241 9.817C10.8804 10.0923 10.4397 10.2422 9.986 10.244C9.55791 10.2449 9.14121 10.1062 8.799 9.849L0 2.6V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2.5L11.241 9.817Z"
                        fill="#FDF9EC"
                      />
                    </svg>
                    <span className="text-[#FDF9EC] font-normal">
                      bookish@mail.co
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:ml-8">
              <h2 className="mb-2 text-lg font-bold text-white uppercase dark:text-white">
                Privacy
              </h2>
              <ul className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a
                    href="/users/privacy-policy"
                    className="hover:underline text-[#FDF9EC] font-normal"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
