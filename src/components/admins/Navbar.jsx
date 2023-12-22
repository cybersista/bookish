import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarAdmins = () => {
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
    navigate("/admins/dashboard");
  };

  return (
    <nav className="bg-[#858585] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Bookish.co
          </span>
        </a>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                href="/admins/dashboard"
                className="text-white block py-2 px-3 rounded md:bg-transparent md:hover:text-black md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/admins/kategori"
                className="text-white block py-2 px-3 rounded md:bg-transparent md:hover:text-black md:p-0"
              >
                Kategori
              </a>
            </li>
            <li>
              <a
                href="/admins/buku-page"
                className="text-white block py-2 px-3 rounded md:bg-transparent md:hover:text-black md:p-0"
              >
                Buku
              </a>
            </li>
            <li>
              <a
                href="/admins/gudang"
                className="text-white block py-2 px-3 rounded md:bg-transparent md:hover:text-black md:p-0"
              >
                Gudang
              </a>
            </li>
            <li>
              <button
                onClick={toggleAccountDropdown}
                id="dropdownAccountLink"
                data-dropdown-toggle="dropdownAccount"
                aria-controls="dropdownAccount"
                aria-expanded={isAccountDropdownOpen}
                className="text-white flex items-center justify-between w-full py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:w-auto"
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
                <div className="absolute right-0 mt-2 p-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transform -translate-x-1/2 z-10" >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/admins/registrasi"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Registrasi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/admins/login"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Log In
                      </a>
                    </li>
                    <li>
                      <a
                        href="/admins/detail-user"
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

export default NavbarAdmins;
