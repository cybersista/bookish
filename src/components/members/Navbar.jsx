import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarUsers = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Redirect the user to the login page
    navigate("/users/dashboard");
  };

  return (
    <nav className="bg-[#677C52] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/users/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Bookish.co
          </span>
        </a>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 dark:hover:bg-transparant"
          aria-controls="navbar-dropdown"
          aria-expanded={isDropdownOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isDropdownOpen ? "" : "hidden"
          }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a
                href="/users/dashboard"
                className="text-white block py-2 px-3 rounded md:bg-transparent md:hover:text-black md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/users/kategori-buku"
                className="text-white block py-2 px-3 rounded md:bg-transparent md:hover:text-black md:p-0 focus:bg-transparent focus:text-black active:bg-transparent active:text-black"
              >
                Kategori
              </a>
            </li>
            <li>
              <a
                href="/users/shop"
                className="text-white block py-2 px-3 rounded md:bg-transparent md:hover:text-black md:p-0"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/users/keranjang"
                className="text-white block py-2 px-3 rounded md:bg-transparent md:hover:text-black md:p-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 14C18.2175 14.0001 18.4291 13.9292 18.6027 13.7982C18.7763 13.6672 18.9024 13.4832 18.962 13.274L20.962 6.274C21.0044 6.12518 21.0117 5.96855 20.9833 5.81644C20.9549 5.66433 20.8916 5.52089 20.7983 5.3974C20.7051 5.27391 20.5844 5.17374 20.4459 5.10479C20.3074 5.03583 20.1547 4.99996 20 5H6.77L6.175 2.745C6.11869 2.53148 5.99329 2.3426 5.81836 2.20783C5.64344 2.07307 5.42882 1.99999 5.208 2H4C3.73478 2 3.48043 2.10536 3.29289 2.29289C3.10536 2.48043 3 2.73478 3 3C3 3.26522 3.10536 3.51957 3.29289 3.70711C3.48043 3.89464 3.73478 4 4 4H4.438L5.038 6.255V6.265V6.274L7.038 13.274L7.784 16.26C7.29013 16.479 6.86456 16.8272 6.55222 17.268C6.23988 17.7088 6.05237 18.2258 6.00947 18.7643C5.96658 19.3028 6.0699 19.843 6.30853 20.3276C6.54715 20.8123 6.91223 21.2236 7.3652 21.5179C7.81818 21.8123 8.34224 21.9789 8.88206 22.0002C9.42188 22.0214 9.95741 21.8965 10.4321 21.6386C10.9068 21.3807 11.3031 20.9994 11.579 20.535C11.855 20.0706 12.0005 19.5402 12 19C11.9967 18.6586 11.9344 18.3203 11.816 18H14.184C14.0656 18.3203 14.0033 18.6586 14 19C14 19.5933 14.1759 20.1734 14.5056 20.6667C14.8352 21.1601 15.3038 21.5446 15.8519 21.7716C16.4001 21.9987 17.0033 22.0581 17.5853 21.9424C18.1672 21.8266 18.7018 21.5409 19.1213 21.1213C19.5409 20.7018 19.8266 20.1672 19.9424 19.5853C20.0581 19.0033 19.9987 18.4001 19.7716 17.8519C19.5446 17.3038 19.1601 16.8352 18.6667 16.5056C18.1734 16.1759 17.5933 16 17 16H9.78L9.28 14H18Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <button
                onClick={toggleAccountDropdown}
                id="dropdownAccountLink"
                data-dropdown-toggle="dropdownAccount"
                aria-controls="dropdownAccount"
                aria-expanded={isAccountDropdownOpen}
                className="text-white flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:w-auto dark:text-white dark:focus:text-white"
              >
                <svg
                  className="md:hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z"
                    fill="currentColor"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="24"
                    d="M14 13H10C8.67441 13.0016 7.40356 13.5289 6.46622 14.4662C5.52888 15.4036 5.00159 16.6744 5 18V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V18C18.9984 16.6744 18.4711 15.4036 17.5338 14.4662C16.5964 13.5289 15.3256 13.0016 14 13Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 p-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transform -translate-x-1/2 z-50" >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/users/registrasi"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Registrasi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/users/login"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Log In
                      </a>
                    </li>
                    <li>
                      <a
                        href="/users/detail-user"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Informasi Akun
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUsers;
