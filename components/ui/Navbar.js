"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Hamburger = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="24"
        viewBox="0 0 52 24"
    >
        <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
            <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 47)"
                fill="#574c4c"
            />
            <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 67)"
                fill="#574c4c"
            />
            <rect
                id="Rectangle_4"
                data-name="Rectangle 4"
                width="52"
                height="4"
                rx="2"
                transform="translate(294 57)"
                fill="#574c4c"
            />
        </g>
    </svg>
);

const Logo = () => (
    <div className="font-bold text-xl">
        {/* Replace this with your actual logo component or image */}
        <span>Your Logo</span>
    </div>
);

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const router = useRouter();

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const isActive = (pathname) => {
        return router.pathname === pathname;
    };

    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="logo">
                    <Logo />
                </div>
                <div className="menu-icon md:hidden" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements md:flex md:items-center ${showNavbar ? "block" : "hidden"} w-full md:w-auto`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
                        <li>
                            <Link href="/" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Home</Link>
                        </li>
                        <li>
                            <Link href="/blogs" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/blogs") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Blogs</Link>
                        </li>
                        <li>
                            <Link href="/projects" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/projects") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Projects</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/about") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`block py-2 px-4 rounded hover:bg-gray-100 ${isActive("/contact") ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;