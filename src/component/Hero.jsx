"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import hero from '@/app/assets/hero.png'
import { SearchJobs } from '@/app/store/Slice/SearchJobSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
export default function Hero() {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
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
        <>
            <div className="Hero py-11">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-4">

                        <div className="flex flex-col justify-center md:items-start w-full px-2">
                            <h4 className="text-4xl text-center md:text-left md:text-5xl font-bold leading-none">
                                The <span className="text-indigo-600">Easiest way </span><br /> to find your dream job.
                            </h4>

                            <p className="py-6 text-lg text-center md:text-left text-gray-700">
                                Each day, millions of jobseekers and employers search Jobify.
                                and we&apos;re here to help. The future of talent. Join us and start your new career.
                            </p>

                            <div className="flex m-auto md:my-4 md:mx-2 md:w-[30rem] w-auto rounded bg-white">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="w-full border-none bg-transparent focus:border focus:border-gray-400 px-4 py-1 text-gray-900 focus:outline-none" />
                                <button onClick={onSearchSubmit} className="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-purple-500">search</button>
                            </div>

                        </div>
                        <div className="flex justify-center">
                            <div className="w-[80%]">
                                <Image src={hero} width={800} height={600} className="w-full" alt="Hero Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
