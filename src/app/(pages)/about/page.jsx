import Testimonials from '@/component/Testimonials'
import React from 'react'

export const metadata = {
    title: "About Us",
    description: " SkillHive connects skilled professionals with businesses, offering a hub of talent across industries.",
}
export default function page() {
    return (
        <>
            <div className="about-us">
                <div className="sm:flex items-center max-w-screen-xl mx-auto">

                    <div className="sm:w-1/2 p-10">
                        <div className="image object-center text-center">
                            <img
                                src="https://i.imgur.com/WbQnbas.png"
                                alt="About Us"
                                className="mx-auto"
                            />
                        </div>
                    </div>

                    <div className="sm:w-1/2 p-5">
                        <div className="text">
                            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                                About <span className="text-indigo-600">SkillHive</span>
                            </h2>
                            <p className="text-gray-700">
                                SkillHive connects skilled professionals with businesses, offering
                                a hub of talent across industries. It simplifies the process of
                                finding the right talent by bringing together a wide range of
                                expertise under one roof, ensuring businesses can find the right
                                fit quickly and efficiently.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative py-6 flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <img
                            className="h-full w-full object-cover"
                            src="https://picsum.photos/id/1018/2000"
                            alt="Winding mountain road"
                        />
                    </div>


                    <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

                        <div className="flex flex-col p-12 md:px-16">
                            <h2 className="text-lg font-medium uppercase text-blue-800 lg:text-3xl">
                                you can work with SkillHive
                            </h2>
                            <p className="mt-4">
                                SkillHive connects skilled professionals with businesses, offering
                                a hub of talent across industries. It simplifies the process of
                                finding the right talent by bringing together a wide range of
                                expertise under one roof, ensuring businesses can find the right
                                fit quickly and efficiently.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-blue-800 hover:shadow-md md:w-48"
                                >
                                    Find your job
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonials />
            </div>
        </>
    )
}
