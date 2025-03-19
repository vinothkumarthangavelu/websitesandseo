"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};








// --------------
// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const Hamburger = () => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="52"
//         height="24"
//         viewBox="0 0 52 24"
//     >
//         <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
//             <rect
//                 id="Rectangle_3"
//                 data-name="Rectangle 3"
//                 width="42"
//                 height="4"
//                 rx="2"
//                 transform="translate(304 47)"
//                 fill="#574c4c"
//             />
//             <rect
//                 id="Rectangle_5"
//                 data-name="Rectangle 5"
//                 width="42"
//                 height="4"
//                 rx="2"
//                 transform="translate(304 67)"
//                 fill="#574c4c"
//             />
//             <rect
//                 id="Rectangle_4"
//                 data-name="Rectangle 4"
//                 width="52"
//                 height="4"
//                 rx="2"
//                 transform="translate(294 57)"
//                 fill="#574c4c"
//             />
//         </g>
//     </svg>
// );

// const Logo = () => (
//     <div className="font-bold text-xl">
//         {/* Replace this with your actual logo component or image */}
//         <span>Your Logo</span>
//     </div>
// );

// const Navbar = () => {
//     const [showNavbar, setShowNavbar] = useState(false);
//     const router = useRouter();

//     const handleShowNavbar = () => {
//         setShowNavbar(!showNavbar);
//     };

//     const isActive = (pathname) => {
//         return router.pathname === pathname;
//     };

//     return (
//         <nav className="bg-white shadow-md py-4">
//             <div className="container mx-auto px-4 flex items-center justify-between">
//                 <div className="logo">
//                     <Logo />
//                 </div>
//                 <div className="menu-icon md:hidden" onClick={handleShowNavbar}>
//                     <Hamburger />
//                 </div>
//                 <div className={`nav-elements md:flex md:items-center ${showNavbar ? "block" : "hidden"} w-full md:w-auto`}>
//                     <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
//                         <li>
//                             <Link href="/" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Home</Link>
//                         </li>
//                         <li>
//                             <Link href="/blogs" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/blogs") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Blogs</Link>
//                         </li>
//                         <li>
//                             <Link href="/projects" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/projects") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Projects</Link>
//                         </li>
//                         <li>
//                             <Link href="/about" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/about") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>About</Link>
//                         </li>
//                         <li>
//                             <Link href="/contact" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/contact") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Contact</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
// --------------