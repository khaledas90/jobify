import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/app/assets/logo.png';

export default function Footer() {
    return (
        <>
            <div className="flex items-end w-full  bg-gray-100">
                <footer className="w-full text-gray-700 bg-gray-100 body-font">
                    <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                            <Link href="/" className="flex items-center">
                                <Image src={logo.src} alt="Logo" width={50} height={50} />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                    SkillHive
                                </span>
                            </Link>
                            <div className="my-2 w-full">
                                <p>SkillHive connects skilled professionals with businesses, offering a hub of talent across industries.and makes finding the right talent</p>
                            </div>
                            <div className="mt-4">
                                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.11 2c-2.88 0-4.44 2.28-4.44 4.42 0 .35.04.69.1 1.01C7.69 7.4 4.07 5.52 1.64 2.75a4.37 4.37 0 00-.6 2.23c0 1.54.79 2.88 1.99 3.66a4.48 4.48 0 01-2.01-.55v.06c0 2.14 1.54 3.93 3.58 4.33a4.5 4.5 0 01-2.00.08 4.49 4.49 0 004.2 3.11 9 9 0 01-6.63 1.85 12.72 12.72 0 006.86 2.01c8.25 0 12.75-6.84 12.75-12.75 0-.2-.01-.42-.03-.61A9.05 9.05 0 0023 3z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37a4 4 0 01-4.4 4.43A4.41 4.41 0 017 11.37V7.63A4.41 4.41 0 0111.6 7a4.41 4.41 0 014.4 4.37z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path stroke="none"
                                                d="M16 8a6 6 0 00-12 0c0 3.316 4.558 7.186 5.543 8.065a.7.7 0 00.914 0C11.442 15.186 16 11.316 16 8z">
                                            </path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h2 className="mb-3 text-lg font-semibold tracking-widest text-blue-600 uppercase title-font">About us</h2>
                                <nav className="mb-10 list-none">
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">jop</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">Blog</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">Privacy</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">polis</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h2 className="mb-3 text-lg font-semibold tracking-widest text-blue-600 uppercase title-font">Links</h2>
                                <nav className="mb-10 list-none">
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">all jobs</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">job details</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">how it work</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">faq</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h2 className="mb-3 text-lg font-semibold tracking-widest text-blue-600 uppercase title-font">contact us</h2>
                                <nav className="mb-10 list-none">
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">+201090898650</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">khaledah@gmail.com</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">Khaled Ahmed</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 cursor-pointer hover:text-gray-800">Alexandria- Egypt</a>
                                    </li>
                                </nav>
                            </div>

                        </div>
                    </div>
                    <div className="bg-gray-300">
                        <div className="container px-5 py-4 mx-auto">
                            <p className="text-sm text-center text-gray-500">© 2024 All Rights Reserved —
                                <a href="/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">SkillHive </a>
                                 Made by khaled ahmed
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}
