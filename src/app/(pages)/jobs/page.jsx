"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '@/app/store/Slice/AllJobSlice';
import { FilterJobs } from '@/app/store/Slice/FilterJobSlice';

import CardFeatured from '@/component/CardFeatured';
import Tittle from '@/component/Tittle';
import { CiGrid41 } from "react-icons/ci";
import { BsGrid3X2Gap } from "react-icons/bs";
export default function Page() {
    const { data, status } = useSelector((state) => state.allJobs);
    const { data: dataFilter, status: statusFilter } = useSelector((state) => state.filterJobs);
    const [visibleCount, setVisibleCount] = useState(10);
    const [experience, setExperience] = useState('');
    const [statusJob, setStatusJob] = useState('');
    const [OnFilter, setOnFilter] = useState(false);
    const [type, setType] = useState('');

    console.log(dataFilter, "dataFilter");

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllJobs());
    }, [dispatch]);

    const handleFilter = () => {
        dispatch(FilterJobs({ experience, statusJob, type }));
        console.log(experience, statusJob, type);
        setOnFilter(true);
    };
    if (status === 'loading') {
        return (
            <div className="flex justify-center py-10 px-10">
                <div className="flex flex-row gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                </div>
            </div>
        );
    }

    if (status === 'failed') {
        return <div className="text-red-500">Failed to load jobs. Please try again later.</div>;
    }

    return (
        <div className="Jobs">
            <Tittle HeaderTittle="Jobs" SubTittle="We have many jobs, explore them." />

            <div className="flex justify-between items-baseline bg-gray-100 shadow-md">
                <div className="filter flex  justify-start p-4 rounded-md ">
                    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                        <select
                            className="border rounded-md p-2"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="8 years">8 years</option>
                            <option value="7 years">7 years </option>
                            <option value="6 years">6 years</option>
                            <option value="5 years">5 years</option>
                            <option value="4 years">4 years</option>
                            <option value="3 years">3 years</option>
                            <option value="2 years">2 years</option>
                            <option value="1 years">1 years</option>
                        </select>

                        <select
                            className="border rounded-md p-2"
                            value={statusJob}
                            onChange={(e) => setStatusJob(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="open">open</option>
                            <option value="close">close</option>
                        </select>

                        <select
                            className="border rounded-md p-2"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="Programming">Programming</option>
                            <option value="Automotive Jobs">Automotive Jobs</option>
                            <option value="Health and Care">Health and Care</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Customer Services">Customer Services</option>
                        </select>
                    </div>
                </div>
                <div className="flex  items-center">
                    <button
                        onClick={handleFilter}
                        className="bg-blue-500 mx-5 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Filter
                    </button>
                    <CiGrid41 className="mx-5 text-blue-600 text-[25px]" />
                    <BsGrid3X2Gap className="mx-5 text-blue-600 text-[25px]" />
                </div>

            </div>

            {OnFilter ? (
                <div className="flex py-10 px-5">
                    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dataFilter && dataFilter.length > 0 && dataFilter.map((item) => (
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
                </div>

            ) : (
                <div className="m-1">
                    <div className="flex py-10 px-5">
                        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data && data.length > 0 && data.slice(0, visibleCount).map((item) => (
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
                    </div>

                    {data && visibleCount < data.length && (
                        <div className="btn py-10 flex justify-center">
                            <button onClick={() => setVisibleCount(visibleCount + 10)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                                View More
                            </button>
                        </div>
                    )}
                </div>
            )}



        </div>
    );
}
