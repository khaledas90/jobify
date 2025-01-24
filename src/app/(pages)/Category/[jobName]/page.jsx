"use client";
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '@/app/store/Slice/JobsSlice';
import Tittle from '@/component/Tittle';
import CardFeatured from '@/component/CardFeatured';
import Loader from '@/component/loader';




export default function Page({ params }) {
    const { jobName } = params
    console.log(jobName);

    const { data, status } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    console.log(data, "data");


    useEffect(() => {
        dispatch(getJobs(jobName));
    }, [dispatch, jobName]);


    if (!data || !Array.isArray(data)) return <p className='text-center text-3xl text-gray-400'>No jobs available.</p>;
    if (status === 'loading') return <Loader />

    return (
        <>
            <div className={`Jobs-${jobName} py-6 px-5`}>
                <Tittle HeaderTittle={`${jobName.replace(/[%0-9]/g, '').trim("")} Jobs`} SubTittle={`We have many ${jobName.replace(/[%0-9]/g, '').trim()} jobs explore it.`} />
                <div className="flex">
                    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.isArray(data) && data.map((item) => (
                            <CardFeatured key={item.id} id={item.id} img={item.img} name={item.name} location={item.location} salary={item.salary} status={item.status} experience={item.experience} country={item.country} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
