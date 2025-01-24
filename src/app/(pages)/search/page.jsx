"use client";
import Loader from "@/component/loader";
import { useState } from "react";
import { useSelector } from "react-redux";
import CardFeatured from "@/component/CardFeatured";
export default function Page() {
    const { data, status } = useSelector((state) => state.searchJobs);



    if (status === "loading") return <Loader />
    return (
        <>
            <div className="search py-10 px-4 my-10">
                <h1 className="text-3xl font-bold text-center mb-10">Search Results</h1>
                {data && data.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((item) => (
                            <CardFeatured
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                location={item.location}
                                salary={item.salary}
                                status={item.status}
                                experience={item.experience}
                                country={item.country}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-3xl text-gray-500 ">No results found</p>
                )}
            </div>
        </>
    )
}
