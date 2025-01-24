"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobId } from '@/app/store/Slice/JobIdSlice';
import Loader from '@/component/loader';
import CardFeatured from '@/component/CardFeatured';
import Featured from '@/component/Featured';

export default function Page({ params }) {
  const { data, status } = useSelector((state) => state.jobId);
  const dispatch = useDispatch();


  console.log(data);

  useEffect(() => {
    dispatch(getJobId(params.id));
  }, [dispatch, params.id]);


  if (status === 'loading') return <Loader />


  return (
    <>
      <div className="jobId">
        <div className="mt-20 mb-12">
          <div className="block sm:flex justify-between mb-10 items-center w-[80%] mx-auto">
            <div className="flex-[0.7]">
              <CardFeatured key={data.id} id={data.id} img={data.img} name={data.name} location={data.location} salary={data.salary} status={data.status} experience={data.experience} country={data.country} />
            </div>

            <div className="lg:flex lg:mt-0 grid mt-3">
              <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Apply Now</button>
            </div>
          </div>
          <Featured />
        </div>
      </div>
    </>
  )
}
