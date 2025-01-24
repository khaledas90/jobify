import Category from '@/component/Category'
import React from 'react'


export const metadata = {
    title: "Services",
    description: " SkillHive connects skilled professionals with businesses, offering a hub of talent across industries.",
}


export default function page() {
    return (
        <>
            <div className="Services py-10 px-10">
                <Category />
            </div>
        </>
    )
}
