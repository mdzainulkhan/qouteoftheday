"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar({ isOpen }) {
   const pathname = usePathname();

  const navLinkClass = (path) =>
    `mb-1 px-2 py-2 rounded-lg flex items-center font-medium transition ${
      pathname === path
        ? "text-blue-600 bg-gray-200"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-200"
    }`;
  return (
    <>
      {isOpen && (
        <div className="bg-white w-64 min-h-screen overflow-y-auto shadow relative z-30">
          <div className="flex items-center px-6 py-3 h-16">
            <div className="text-2xl font-bold tracking-tight text-gray-800">
              Quotes Admin.
            </div>
          </div>

          <div className="px-4 py-2">
            <ul>
              <li>
                <Link href="/dashboard" className={navLinkClass("/dashboard")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 opacity-50" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                  </svg> Dashboard
                </Link>
              </li>

              <li>
                <Link href="/manage" className={navLinkClass("/manage")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 opacity-50" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                    <line x1="4" y1="19" x2="20" y2="19"></line>
                    <polyline points="4 15 8 9 12 11 16 6 20 10"></polyline>
                  </svg> Manage Data
                </Link>
              </li>

              <li>
                <a href="/" className={navLinkClass("/")} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 opacity-50" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg> Website
                </a>
              </li>

            </ul>
          </div>
        </div>
      )}
      {/* <Dashboard /> */}
    </>
  );
}
