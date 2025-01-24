import Image from "next/image";
import { GrMapLocation } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Link from "next/link";
export default function CardFeatured({ id, img, name, location, salary, status, experience, country }) {
    return (
        <>
            <Link href={`/jobs/${id}`}>
                <div
                    key={id}
                    className="p-4 border-2 cursor-pointer hover:bg-gray-200 rounded-lg border-opacity-10 transition-all duration-200 hover:shadow-sm hover:scale-102"
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-16">
                            <Image
                                src={img}
                                width={50}
                                height={50}
                                layout="intrinsic"
                                className="rounded-full h-auto w-full"
                                alt={name}
                            />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-1">{name}</h4>
                            <div className="flex items-center md:space-x-10 space-x-4">
                                <div className="flex items-center space-x-2">
                                    <GrMapLocation className="text-indigo-500 w-[1.5rem] " />
                                    <p className="text-[14px] text-black font-semibold  text-opacity-70">{location}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaMoneyCheckDollar className="text-indigo-500 w-[1.5rem] " />
                                    <p className="text-[14px] text-black font-semibold  text-opacity-70">{salary}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-4 mt-4">

                                <div className="text-[10px] sm:text-[12px] text-black font-semibold text-opacity-80 px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-opacity-30 capitalize bg-green-400">{status}</div>
                                <div className="text-[10px] sm:text-[12px] text-black font-semibold text-opacity-80 px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-opacity-30 capitalize bg-red-400">{experience}</div>
                                <div className="text-[10px] sm:text-[12px] text-black font-semibold text-opacity-80 px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-opacity-30 capitalize bg-blue-400">{country}</div>


                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
