import React from 'react'

export default function Tittle({ HeaderTittle, SubTittle }) {
    return (
        <>

            <div className="Tittle">
                <div className="text py-3">
                    <h4 className="text-4xl text-center md:text-5xl font-bold leading-none">
                        {HeaderTittle}
                    </h4>
                    <p className="py-5 text-lg text-center text-gray-700 ">
                        {SubTittle}
                    </p>
                </div>
            </div>
        </>
    )
}
