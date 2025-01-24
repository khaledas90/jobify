
"use client";
import { useState, useRef, useEffect } from 'react';
import logo from '@/app/assets/logo.png';
import Hamburger from 'hamburger-react'
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { checkUserAuth } from "@/app/utils/auth";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import imgUser from '@/app/assets/userImg.jpg';
import { Logout } from '@/app/Services/authService';
import { SearchJobs } from '@/app/store/Slice/SearchJobSlice';
import { useDispatch } from 'react-redux';

//  import { auth } from '../../../auth';   to use in server side
//  add async function in header then const session = await auth()


export default function Header() {
    const [isOpen, setOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)
    const [close, setClose] = useState(true)
    const [ToggleDropdown, setToggleDropdown] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const closeSearch = useRef(null)
    const closeDropdown = useRef(null)
    const [user, setUser] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = checkUserAuth((currentUser) => {
            setUser(currentUser);
        });

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (closeSearch.current && !closeSearch.current.contains(event.target)) {
                setClose(true);
                setToggleDropdown(false)
            }
        };

        if (typeof window !== "undefined") {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            if (typeof window !== "undefined") {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, []);

    const DropdownUser = () => {
        setOpenDropdown(!openDropdown);
    };

    const handleSignOut = async () => {
        try {
            await Logout();
            toast.success("Successfully logged out!");
            if (window !== undefined) {
                localStorage.removeItem("user");
            }
            router.push("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            console.log(searchTerm);

            dispatch(SearchJobs(searchTerm));
            router.push(`/search`);
        }
    };


    return (
        <header className="shadow-lg ">
            <nav className="bg-white  border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <Image src={logo.src} alt="Logo" width={50} height={50} />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            SkillHive
                        </span>
                    </Link>
                    <div className="flex items-center  lg:order-2">

                        <div className=" search mx-5 ">
                            <FaSearch onClick={() => setClose((prev) => !prev)} className="searchIcon cursor-pointer text-[19px]" />

                        </div>
                        {!user ? (
                            <Link
                                href="/login"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-none   font-medium rounded-lg text-sm px-4 lg:px-7 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Log in
                            </Link>
                        ) : (
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={DropdownUser}
                                    className="flex text-sm mx-2 lg:mx-5 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    type="button"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src={imgUser.src} alt="user photo" />
                                </button>

                                {openDropdown && (
                                    <div className="absolute top-14 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">

                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                            <li>
                                                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">profile</Link>
                                            </li>
                                        </ul>
                                        <div className="py-2">
                                            <span onClick={handleSignOut} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}


                        <div className="lg:hidden flex">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>

                    </div>
                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/Services"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/addJob"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Add Jobs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contactUs"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div ref={closeSearch} className={`w-full relative my-3 ${close ? 'hidden' : 'block'}`}>
                <div className="w-[50%] absolute top-[13%] z-30 left-[25%]">
                    <form onSubmit={onSearchSubmit}>
                        <input
                            className="bg-gray-200 appearance-none relative border-2 border-gray-200 rounded w-full py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                            id="inline-full-name"
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </form>
                </div>
            </div>
        </header>
    );
}
