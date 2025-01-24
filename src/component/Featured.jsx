"use client";

import Tittle from './Tittle';
import CardFeatured from './CardFeatured';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeatured } from '@/app/store/Slice/FeaturedSlice';
import Link from 'next/link';
import Loader from './loader';

export default function Featured() {
    const { data, status } = useSelector((state) => state.featured);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getFeatured());
    }, [dispatch]);



    if (status === 'loading') return <Loader />
    return (
        <div className="Category py-6 px-5">
            <Tittle HeaderTittle="Featured Jobs" SubTittle=" Know our featured jobs and make your dream job. " />
            <div className="flex">
                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.map((item) => (
                        <CardFeatured key={item.id} id={item.id} img={item.img} name={item.name} location={item.location} salary={item.salary} status={item.status} experience={item.experience} country={item.country} />
                    ))}
                </div>
            </div>
            <div className="btn py-10 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                    <Link href="/jobs" >All Jobs</Link>
                </button>
            </div>
        </div>
    );
}
