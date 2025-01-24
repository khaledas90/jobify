"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '@/app/store/Slice/CategorySlice';

import Tittle from './Tittle';
import CardCategory from './CardCategory';
import Loader from './loader';





export default function Category() {
    const { data, status } = useSelector((state) => state.category);
    const dispatch = useDispatch();




    useEffect(() => {
        dispatch(getCategory());

    }, [dispatch]);



    if (status === 'loading') return <Loader />


    return (
        <div className="Category py-6 px-5">
            <Tittle HeaderTittle=" Popular Job Category" SubTittle="We have many popular job categories" />
            <div className="flex">
                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.map((item) => (
                        <CardCategory key={item.id} id={item.id} img={item.img} name={item.name} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}
