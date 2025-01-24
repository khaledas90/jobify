"use client";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
export default function Layout({ profile, notifications, yourjob }) {
    const [open, setOpen] = useState("Profile");
    return ( <
        >
        <
        div className = "Sitting" >
        <
        section className = "w-full mb-6 mx-auto " >
        <
        div className = "lg:w-[80%] md:w-[90%] sm:w-[92%] xs:w-[96%] mx-auto flex items-center justify-center" >
        <
        div className = "w-full md:p-6 xs:p-4 rounded-lg md:mt-0 sm:p-8 dark:bg-gray-900" >
        <
        div className = "w-full mx-auto shadow-xl rounded-sm border border-gray-200 dark:border dark:border-gray-800" >
        <
        h1 className = "text-2xl text-blue-600 font-bold p-4 bg-gray-200 shadow-lg dark:bg-gray-800 dark:text-white rounded-sm" >
        Sitting <
        /h1>

        <
        div className = "w-full md:flex sm:gap-2 xs:gap-0" >
        <
        div className = "lg:w-[30%] md:w-[30%] xs:w-full bg-gray-100 flex md:flex-col xs:flex-row xs:justify-center sm:gap-2 dark:bg-gray-700" >
        <
        ul className = "py-2 space-y-2 w-full " >
        <
        li onClick = {
            () => setOpen("Profile") }
        className = { `sm:text-xl xs:text-md font-semibold py-3 px-2  flex items-center cursor-pointer  transition-all duration-200 ${
                          open === "Profile" && "bg-black text-white"
                        } hover:bg-black hover:text-white` } >
        <
        CiUser className = "text-3xl mx-2 flex" / > Profile <
        /li> <
        li onClick = {
            () => setOpen("Notifications") }
        className = { `sm:text-xl xs:text-md font-semibold py-3 px-2 flex items-center cursor-pointer transition-all duration-200 ${
                          open === "Notifications" && "bg-black text-white"
                        } hover:bg-black hover:text-white` } >
        <
        IoIosNotifications className = "text-3xl mx-2 flex" / >
        Notifications <
        /li> <
        li onClick = {
            () => setOpen("YourJob") }
        className = { `sm:text-xl xs:text-md font-semibold py-3 px-2 flex items-center cursor-pointer transition-all duration-200 ${
                          open === "YourJob" && "bg-black text-white"
                        } hover:bg-black hover:text-white` } >
        <
        MdWork className = "text-3xl mx-2 flex" / >
        Your Job <
        /li> <
        li onClick = {
            () => setOpen("Logout") }
        className = { `sm:text-xl xs:text-md font-semibold py-3 px-2 flex items-center cursor-pointer transition-all duration-200 ${
                          open === "Logout" && "bg-black text-white"
                        } hover:bg-black hover:text-white` } >
        <
        IoLogOut className = "text-3xl mx-2 flex" / >
        Logout <
        /li> <
        /ul> <
        /div>

        <
        div className = "lg:w-[100%] md:w-[70%]" > { open === "Profile" && profile } { open === "Notifications" && notifications } { open === "YourJob" && yourjob } <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> <
        /div> <
        />
    );
}