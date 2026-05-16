"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [opens, setOpens] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setOpens(!opens);
  }
  const toggleClose = () => {
    setOpens(false);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        {opens && (
          <div className="absolute top-0 left-0 bg-white shadow-sm p-[50px] w-full z-50 group">
            <i onClick={toggleClose} className="bi bi-x-lg cursor-pointer absolute right-5 top-1 rounded-b-md flex justify-center items-center hover:bg-[#20282d] 
              w-[42px] h-[40px] hover:text-white rounded-[5px] transition"></i>
            <div className="max-w-[1024px] mx-auto">
              <div className="relative flex">
                <input className="w-[100%] px-5 rounded-e-none rounded-md border-[1px]" type="text" placeholder="Search by keyword or #" />
                <button className="bg-primary-color lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] rounded-s-none rounded-md cursor-pointer"><i className="bi bi-search text-white"></i></button>
              </div>
            </div>
            <div id="close" className="search-close-icon"><i className="far fa-times"></i></div>
          </div>
        )}
        <section className="bg-primary-color hidden md:block">
          <div className="max-w-[1320px] mx-auto py-2.5 px-8">
            <div className="flex md:justify-between flex-wrap justify-center gap-3">
              <div className="flex">
                <ul className="flex gap-5 items-center">
                  <li>
                    <Link href="-" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg></Link>
                  </li>
                  <li>
                    <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg></Link>
                  </li>
                  <li>
                    <Link href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <ul className="flex gap-5 items-center text-white">
                  <li>
                    <Link href="">About</Link>
                  </li>
                  <li><Link href="">Contact</Link></li>
                  <li><Link href="">Terms Of Service</Link></li>
                  <li><Link href="">Privacy Policy</Link></li>
                  <li><Link href="">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <nav className="bg-white px-8 py-4 shadow-sm">

          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
                ⬈
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Quote</h1>
                <p className="text-sm text-gray-500 -mt-1">Quoteoftheday</p>
              </div>
            </div>


            <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
              <li className="hover:text-primary-color cursor-pointer flex items-center gap-1">
                Home
                {/* <span className="text-xs"> <i className="bi bi-chevron-down"></i></span> */}
              </li>
              <li className="hover:text-primary-color cursor-pointer flex items-center gap-1">
                Authors
              </li>
              <li className="hover:text-primary-color cursor-pointer flex items-center gap-1">
                Topics
              </li>
              <li className="hover:text-primary-color cursor-pointer flex items-center gap-1">
                Quote Of The Day
              </li>
              <li className="hover:text-primary-color cursor-pointer flex items-center gap-1">
                Contact
              </li>
            </ul>
            <div className="flex items-center gap-1 md:gap-4">
              <button onClick={handleChange} className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                <i className="bi bi-search cursor-pointer "></i>
              </button>
              <button className="hidden md:block bg-primary-color cursor-pointer text-white px-4 py-3 rounded-xl font-semibold hover:bg-gray-900">
                Quote Of The Day
              </button>

              <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 lg:hidden">
                <Image src="/img-self/01.svg" onClick={toggleMenu} width={22} height={22} alt="toggle" />
              </button>

            </div>

          </div>
        </nav>

        <div
          className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out mt-0.5 
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="lg:hidden bg-white block items-center gap-8 font-medium text-gray-700 pt-0 px-8 py-4">
            <li className="hover:text-primary-color cursor-pointer flex items-center gap-1 py-3">
              Home
              {/* <span className="text-xs"> <i className="bi bi-chevron-down"></i></span> */}
            </li>
            <li className="hover:text-primary-color cursor-pointer flex items-center gap-1 py-3">
              Authors
            </li>
            <li className="hover:text-primary-color cursor-pointer flex items-center gap-1 py-3">
              Topics
            </li>
            <li className="hover:text-primary-color cursor-pointer flex items-center gap-1 py-3">
              Quote Of The Day
            </li>
            <li className="hover:text-primary-color cursor-pointer flex items-center gap-1 py-3">
              Contact
            </li>
          </ul>
        </div>
      </header>
      <section className="relative bg-[url(/img-self/hero.webp)] bg-center bg-cover h-[240px] bg-no-repeat flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative w-full max-w-[1320px] mx-auto px-8">
          <div className="flex justify-between text-white">
            <div className="w-1/2 lg:text-2xl">
              Let us sacrifice our today so that
              our children can have a better tomorrow.
            </div>

            <div className="w-1/2 lg:text-2xl text-right">
              To succeed in your mission, you must
              have single-minded devotion to your goal.
            </div>
          </div>
        </div>

        <div className="h-30 w-30 rounded-full absolute -bottom-15 z-10 border-4 border-white flex items-center justify-center bg-white">
          <Image
            src="/img-self/logo.webp"
            alt="hero"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </section>

      <section className="bg-[url(/img-self/hill.avif)] bg-center bg-cover bg-no-repeat pb-15 pt-15 relative">
      <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Popular Topics</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-300 transition">Motivational</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Life</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Inspirational</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Attitude</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Positive</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Love</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Funny</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Dreams</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Valentine's Day</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition">Morning</a></li>
            </ul>
            <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-300 transition">
              More Topics
            </button>
          </div>

         
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Popular Authors</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-300">A. P. J. Abdul Kalam</a></li>
              <li><a href="#" className="hover:text-yellow-300">Napoleon Bonaparte</a></li>
              <li><a href="#" className="hover:text-yellow-300">Virat Kohli</a></li>
              <li><a href="#" className="hover:text-yellow-300">Albert Einstein</a></li>
              <li><a href="#" className="hover:text-yellow-300">Mahatma Gandhi</a></li>
              <li><a href="#" className="hover:text-yellow-300">Rumi</a></li>
              <li><a href="#" className="hover:text-yellow-300">Socrates</a></li>
              <li><a href="#" className="hover:text-yellow-300">Cristiano Ronaldo</a></li>
              <li><a href="#" className="hover:text-yellow-300">Abraham Lincoln</a></li>
              <li><a href="#" className="hover:text-yellow-300">Khalil Gibran</a></li>
            </ul>
            <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-300 transition">
              More Authors
            </button>
          </div>

         
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-black shadow-xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-xl font-semibold mb-4 border-b border-black/30 pb-2">In the News</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-300">Bernard Baruch</a></li>
              <li><a href="#" className="hover:text-yellow-300">AB de Villiers</a></li>
              <li><a href="#" className="hover:text-yellow-300">Norman Vincent Peale</a></li>
              <li><a href="#" className="hover:text-yellow-300">Mother Teresa</a></li>
              <li><a href="#" className="hover:text-yellow-300">William Shakespeare</a></li>
              <li><a href="#" className="hover:text-yellow-300">Stephen Hawking</a></li>
              <li><a href="#" className="hover:text-yellow-300">Bertrand Russell</a></li>
              <li><a href="#" className="hover:text-yellow-300">Sun Tzu</a></li>
              <li><a href="#" className="hover:text-yellow-300">Mahatma Gandhi</a></li>
              <li><a href="#" className="hover:text-yellow-300">Leonardo da Vinci</a></li>
            </ul>
          </div>

         
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-black shadow-xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-xl font-semibold mb-4 border-b border-black/30 pb-2">Today's Birthdays</h2>
            <ul className="space-y-2 text-sm">
              <li>1874 - <a href="#" className="hover:text-yellow-300">Thomas J. Watson</a></li>
              <li>1953 - <a href="#" className="hover:text-yellow-300">Janice Dickinson</a></li>
              <li>1972 - <a href="#" className="hover:text-yellow-300">Billie Joe Armstrong</a></li>
              <li>1981 - <a href="#" className="hover:text-yellow-300">Paris Hilton</a></li>
              <li>1963 - <a href="#" className="hover:text-yellow-300">Michael Jordan</a></li>
            </ul>

            <div className="mt-4 space-y-1 text-sm border-t border-black/30">
              
              <a href="#" className="block hover:text-yellow-300 mt-3">Birthdays on February 17th →</a>
              <a href="#" className="block hover:text-yellow-300">All Birthdays →</a>
            </div>
          </div>

        </div>
      </section>


    </>
  );
}
