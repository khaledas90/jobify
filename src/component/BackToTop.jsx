"use client";

import React, { useEffect, useState } from 'react'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);




    useEffect(() => {

        const toggleVisible = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }




        window.addEventListener("scroll", toggleVisible)
        return () => window.removeEventListener("scroll", toggleVisible)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-5 right-5 z-50 px-[15px] py-[9px] text-[15px] rounded-full bg-blue-600 text-white ${isVisible ? 'block' : 'hidden'}`}
            >
                ↑
            </button>
        </>
    )
}
